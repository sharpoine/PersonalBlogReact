import React from 'react'

const Post3 = () => {
    return (
        <div className='border-[4px] border-black rounded-[20px] border-b-[10px] bg-white'>
            <div className='flex items-center pl-[20px] py-[10px] relative'>

                <a className='flex items-center' href="">
                    <img className='w-[17px] h-fit' src="./images/category.png" alt="" />
                    <div className='ml-[10px] font-architechs text-sm'>
                        test
                    </div>
                </a>
                <div className='w-[45px] mx-[10px]'>
                    <img className='w-full inline-block' src="./images/divider.png" alt="" />
                </div>
                <div className='flex items-center'>
                    <img className='w-[17px] h-fit' src="./images/published.png" alt="" />
                    <div style={{lineHeight:'15px'}} className='ml-[10px] font-architechs text-sm lowercase'>
                        10 Ocak 2020
                    </div>


                </div>
            </div>
            <div className='block w-full'>
                <img className='w-full object-cover border-b-[4px] border-black border-t-0 rounded-tl-[20px] rounded-tr-[20px] min-h-[250px]' 
                src="./images/test2.jpg" alt="" />
            </div>
            <a className='py-[30px] pr-[20px] pl-[35px] block' href="">
                <div className='text-[#252420] text-xl'>
                    örnek post
                </div>
            </a>
        </div>
    )
}

export default Post3