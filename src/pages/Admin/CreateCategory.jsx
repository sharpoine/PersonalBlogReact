import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const CreateCategory = () => {
    const [title, setTitle] = useState('')
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


    const createCategory = async () => {
        try {
            const res = await fetch('/api/category/create', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title
                })
            });

            const data = await res.json();
            console.log(data);
            toast.success(data.message || "Kategori oluşturuldu");
        } catch (error) {
            console.error(error);
            toast.error("Kategori oluşturulurken bir hata oluştu.");
        }
    };

    return (
        <div className='grid grid-flow-row grid-cols-4'>
            <div className='col-span-1 flex flex-col gap-4 rounded-xl shadow-lg border border-1 border-b-8 border-black p-5'>
                    <input onChange={(e) => setTitle(e.target.value)} className='bg-[#c9c5b5] border-[3px] border-black rounded-[15px] w-[300px] 
        pt-[21px] pr-[20px] pb-[19px] pl-[13px] text-[#333] placeholder-black align-middle mb-[10px] block
        h-[38px]'
                        style={{ lineHeight: '1.42857', fontSize: '18px' }}
                        placeholder='Kategori Adı' type="text" />

                    <button onClick={createCategory} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
                            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg 
                            shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 
                            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[200px]">
                        Ekle
                    </button>
            </div>

            <div className='col-span-3 justify-center items-center'>
                {category.map((cat, i) => (
                    <li>{cat.title}</li>
                ))}
            </div>



        </div>
    )
}

export default CreateCategory