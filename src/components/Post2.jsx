import React from 'react'

const Post2 = () => {
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
                <div className='flex self-center'>
                    <img className='w-[17px]' src="./images/published.png" alt="" />
                    <div className='ml-[10px] font-architechs text-sm'>
                        10 Ocak 2020
                    </div>



                </div>
            </div>
            <div className='flex w-full p-[30px] border-t-[4px] border-black rounded-[20px] items-center'
                style={{
                    backgroundImage: "url('./images/post-bg.jpg')",
                    backgroundPosition: '0 0',
                    backgroundSize: 'auto'
                }}>

                <img className='object-cover border-[4px] border-black rounded-[50%] w-[130px] h-[130px]' src="./images/test.jpg" alt="" />
                <a className='ml-[30px] block' style={{ fontSize: '28px' }} href="">
                    Hacks For Productivity
                </a>
            </div>

        </div>

    )
}

export default Post2