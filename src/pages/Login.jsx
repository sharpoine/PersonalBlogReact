import React, { useState } from 'react'

const Login = () => {
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [image,setImage]=useState('')
    const [preview,setPreview]=useState('')

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
        } else {
            console.error('Login failed');
        }
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        if (!image) {
          return;
        }
        
        const formData = new FormData();
        formData.append('image', image);
        formData.append('content','test')
        
        // API endpoint'e POST isteği gönderin
        fetch('/api/posts', {
          method: 'POST',
          body: formData,
          credentials:'include'
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
        
        }
      };
    
    return (
        <div className='p-24 flex justify-start items-center'>

            <div className='bg-white border-[4px] border-black 
    border-b-[10px] 
    rounded-[30px] mb-[70px]
    p-[30px] w-[500px] h-[400px]'>
                <h1 className='mt-0 mb-[20px] font-anton text-4xl'>Giriş</h1>
                <div className='p-0 gap-[20px] justify-center grid' style={{ gridTemplateColumns: '1fr 1.25fr', gridTemplateRows: 'auto' }}>
                    <div className='flex flex-col justify-start items-start'>
                        <div className='self-stretch mb-[15px] font-architechs'>
                            <form className='box-border' onSubmit={handleSubmit}>
                                <input onChange={(e) => setMail(e.target.value)} className='bg-[#c9c5b5] border-[3px] border-black rounded-[15px] w-full 
        pt-[21px] pr-[20px] pb-[19px] pl-[13px] text-[#333] placeholder-black align-middle mb-[10px] block
        h-[38px]'
                                    style={{ lineHeight: '1.42857', fontSize: '18px' }}
                                    placeholder='kullanıcı adı' type="text" />
                                <input onChange={(e) => setPassword(e.target.value)} className='bg-[#c9c5b5] border-[3px] border-black rounded-[15px] w-full 
        pt-[21px] pr-[20px] pb-[19px] pl-[13px] text-[#333] placeholder-black align-middle mb-[10px] block
        h-[38px]
        placeholder-'
                                    style={{ lineHeight: '1.42857', fontSize: '18px' }}
                                    placeholder='Şifre' type="password" />
                                <input type="submit" value={'Giriş Yap'} className='font-anton text-[#252420] uppercase bg-[#d9d981]
        border-[3px] border-black rounded-[15px] w-full py-[12px] text-xl cursor-pointer'  />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <form onSubmit={handleSubmit2 } encType='multipart/form-data'  >
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <input className="p-24" type="submit" value="Gönder" />
            </form>

        </div>
    )
}

export default Login