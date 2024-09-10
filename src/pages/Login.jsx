import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Login = () => {
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('')
    const [logged, setLogged] = useState(false)
    const [value, setValue] = useState('')
    const [header, setHeader] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setLogged(true)
        } else {
            console.error('Login failed');
            setLogged(false)
        }
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('header',header)
        formData.append('content', value)

        // API endpoint'e POST isteği gönderin
        fetch('/api/posts', {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            console.log(image)
        }
    };
    useEffect(() => {
        console.log(value)
    }, [value])
    return (
        <div className='p-16 grid sm:grid-cols-1 md:grid-cols-1' style={{ gridTemplateColumns: '0.25fr 1fr' }}>

            <LoginForm handleSubmit={handleSubmit} setMail={setMail} setPassword={setPassword} />
            {
                logged && (

                    <form onSubmit={handleSubmit2} encType='multipart/form-data' className='block' style={{ height: '100%' }} >
                        <div className='ml-4 flex flex-col bg-white h-full border-[4px] border-black rounded-xl p-6 gap-3'>
                            <input onChange={(e) => setHeader(e.target.value)} className='bg-[#c9c5b5] border-[3px] border-black rounded-[15px] w-[300px] 
        pt-[21px] pr-[20px] pb-[19px] pl-[13px] text-[#333] placeholder-black align-middle mb-[10px] block
        h-[38px]'
                                style={{ lineHeight: '1.42857', fontSize: '18px' }}
                                placeholder='Başlık' type="text" />
                            <input id='image' hidden type="file" accept="image/*" onChange={handleImageChange} />

                            <label className='basis-1 font-anton text-[#252420] uppercase bg-gray-500
border-[3px] border-black rounded-[15px]  py-[12px] px-[6px] text-md cursor-pointer w-[90px]' for="image">Resim Seç</label>

                            <span id="file-chosen">{image.name}</span>



                            <ReactQuill style={{ height: '1000px' }} theme='snow' value={value} onChange={setValue} />

                            <input className='mt-12 basis-1 font-anton text-[#252420] uppercase bg-[#cbc9c2]
border-[3px] border-black rounded-[15px]  py-[12px] px-[6px] text-md cursor-pointer w-[90px]' type="submit" value="Gönder" />
                        </div>
                    </form>


                )
            }


        </div>
    )
}

export default Login