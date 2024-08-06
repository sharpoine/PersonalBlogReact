import React from 'react'
import { useState } from 'react'

export const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='lg:flex lg:mb-[50px] lg:justify-between lg:items-center block mb-[40px]'>
            <div className='block justify-between items-center lg:mb-0 mb-[20px] '>
                <h3 className='lg:mb-[5px] font-architechs text-2xl mb-[30px]'>
                    Meraba
                </h3>
                <img className='w-[150px]' src="/public/images/title-line.png" alt="" />

            </div>
            <div className='lg:flex lg:mr-[1px] lg:overflow-hidden mr-0 block relative overflow-visible'>
                <div className={` lg:mr-[1px] lg:bg-inherit lg:border-0 lg:rounded-none  
               
                bg-[#c9c5b5] border-[4px] border-black border-b-[8px] rounded-[30px] block 
                 transform transition-transform duration-300
              
                 ${toggleMenu ? `translate-x-0` : `lg:translate-x-[490px]`} 

                 
                 
                  `}>

                    <a href="" className='text-[#252420] capitalize py-[8px] px-[15px] 
                    static lg:inline-block text-sm lg:rounded-[50px] 
                    lg:border-[5px] border-black lg:border-b-[6px] 
                    font-architechs lg:mr-[10px]
                    border-b-[2px]
                    rounded-0
                    mr-0
                    block
                    
                    '>
                        İletişim
                    </a>
                    <a href="/" className='text-[#252420] capitalize py-[8px] px-[15px] 
                    static lg:inline-block text-sm lg:rounded-[50px] 
                    lg:border-[5px] border-black lg:border-b-[6px] 
                    font-architechs lg:mr-[10px]
                    border-b-[2px]
                    rounded-0
                    mr-0
                    block'>
                        Anasayfa
                    </a>
                    <a href="/hakkimda" className='text-[#252420] capitalize py-[8px] px-[15px] 
                    static lg:inline-block text-sm lg:rounded-[50px] 
                    lg:border-[5px] border-black lg:border-b-[6px] 
                    font-architechs lg:mr-[10px]
                    border-b-[2px]
                    rounded-0
                    mr-0
                    block'>
                        Hakkımda
                    </a>
                </div>
                <a href='#' onClick={() => { setToggleMenu(!toggleMenu) }} className={`lg:inline hidden px-[15px] py-[8px] border-[5px] rounded-[50px] border-black bg-[#c9c5b5] border-b-[6px]`}>
                    <img className='w-[30px]' src="/public/images/menu.png" alt="" />
                </a>
            </div>

        </div>

    )
}

