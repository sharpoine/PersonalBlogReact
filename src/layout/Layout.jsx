import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'

const Layout = () => {
    return (
        <div className='w-full font-anton font-normal grid lg:grid-cols-custom md:grid-cols-.75fr sm:grid-cols-1 px-[20px] mt-[40px] lg:px-0 lg:m-0 justify-center'>
            <SideBar />


            <div className='lg:py-[70px] lg:px-[30px] py-[20px] px-0 mx-auto max-w-[1090px] h-full w-full'>
                <Header />
                <Outlet />
                <div className=' mt-[70px] border-[4px] pl-[10px] border-black rounded-[20px] border-b-[10px] block relative overflow-hidden'>
                    <div className='text-[#252420] py-[25px] px-[20px] font-architechs text-2xl'>
                        Coded by Eren Özel
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout