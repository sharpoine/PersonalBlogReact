import React from 'react'
import bolt from '../../public/images/bolt.png'
const LoginForm = ({ handleSubmit, setMail, setPassword }) => {
    return (
        <div className='bg-white border-[4px] border-black 
    border-b-[10px] 
    rounded-[30px] mb-[70px]
    p-[30px] pr-[20px] w-[560px] h-[350px]'>
            <h1 className='w-fit mb-[20px] font-anton text-4xl'>Giriş</h1>
            <div className='p-0 gap-[20px] justify-center grid' style={{ gridTemplateColumns: '1fr 1.5fr', gridTemplateRows: 'auto' }}>
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


                <div className='relative'>
                    <img className='w-[320px] h-[430px] object-cover mt-[-120px] right-0'
                        src={bolt} alt="" />
                </div>
            </div>
        </div>
    )
}

export default LoginForm