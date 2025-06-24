import React, { useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css';

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [image, setImage] = useState('')
    const [header, setHeader] = useState('')
    const [content, setContent] = useState("");
    const [selectedCat, setSelectedCat] = useState('')
    const { user, logout } = useAuth();
    const [category, setCategory] = useState([])


    useEffect(() => {
        const getCategory = async () => {
            try {
                const res = await fetch('/api/category/get', {
                    method: 'GET',
                    credentials: 'include'
                })
                const data = await res.json()
                setCategory(data)
                console.log(data)
            } catch (err) {
                console.error(err)
            }
        }

        getCategory()
    }, [])

    const mdParser = new MarkdownIt();
    const handleEditorChange = ({ text }) => {
        setContent(text);
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('header', header)
        formData.append('content', content)
        formData.append('category', selectedCat)
        // API endpoint'e POST isteği gönderin
        fetch('/api/posts', {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })
            .then(response => {
                if (!response.ok) {
                    // HTTP hatalarını kontrol et (400, 500 vs.)
                    return response.json().then(err => { throw new Error(err.error || "Bilinmeyen hata oluştu"); });
                }
                return response.json(); // Yanıt JSON olarak parse edilir
            })
            .then(data => {
                console.log(data);
                toast.success(data.message)
            })
            .catch(error => {
                console.error('Error uploading image:', error);
                toast.error(error.message)
            });
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            console.log(image)
        }
    };
    const uploadImage = async (file) => {
        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await fetch('/api/posts/upload-image', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Yüklenen Resim URL:", data.image); // API'den dönen URL'yi kontrol et

            return data.image; // Resmin URL'sini döndür

        } catch (error) {
            console.error('Resim yüklenirken hata oluştu:', error);
            return null;
        }
    };
    const handleImageUpload = async (file) => {
        const imageUrl = await uploadImage(file);
        if (imageUrl) {
            return imageUrl; // Markdown editörüne resim olarak eklenecek
        } else {
            throw new Error("Resim yüklenemedi!");
        }
    };


    return user ? (
        <div className='grid grid-cols-4'>

            <div className='col-span-4'>
                <button className='font-anton text-[#252420] uppercase bg-red-500
        border-[3px] border-black rounded-[15px] w-[100px] py-[12px] text-xl cursor-pointer m-5'  onClick={logout}>Çıkış Yap</button>
                <form onSubmit={handleSubmit2} encType='multipart/form-data' className='block' style={{ height: '100%' }} >



                    <div className='ml-4 flex flex-col bg-white h-full border-[4px] border-black rounded-xl p-6 gap-3'>
                        <input onChange={(e) => setHeader(e.target.value)} className='bg-[#c9c5b5] border-[3px] border-black rounded-[15px] w-[300px] 
        pt-[21px] pr-[20px] pb-[19px] pl-[13px] text-[#333] placeholder-black align-middle mb-[10px] block
        h-[38px]'
                            style={{ lineHeight: '1.42857', fontSize: '18px' }}
                            placeholder='Başlık' type="text" />
                        <select name='category' onChange={(e) => setSelectedCat(e.target.value)}
                            className="w-[300px] mt-2 mb-4 bg-[#D9D2B5] text-black border-2 border-black rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                            <option value="">Kategori Seç</option>
                            {category.map(cat => (
                                <option value={cat._id}>{cat.title}</option>
                            ))}
                        </select>
                        <input id='image' hidden type="file" accept="image/*" onChange={handleImageChange} />

                        <label className='basis-1 font-anton text-[#252420] uppercase bg-gray-500
border-[3px] border-black rounded-[15px] py-[8px] px-[6px] text-sm cursor-pointer w-[100px]' for="image">Önizleme Seç</label>

                        <span id="file-chosen">{image.name}</span>

                        <MdEditor
                            value={content}
                            style={{ height: "500px" }}
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={handleEditorChange}
                            config={{ view: { menu: true } }}
                            onImageUpload={handleImageUpload}
                        />


                        <input className='mt-12 basis-1 font-anton text-[#252420] uppercase bg-[#cbc9c2]
border-[3px] border-black rounded-[15px]  py-[12px] px-[6px] text-md cursor-pointer w-[90px]' type="submit" value="Gönder" />
                    </div>
                </form>
            </div>


        </div>
    ) : 'Yetkin yok abi'
}

export default Admin