import React from 'react'

const Post = ({ pinned = false, title = false}) => {
    return (
        <div className='border-[4px] border-black rounded-[20px] border-b-[10px] bg-white'>
            <div className='flex items-center pl-[20px] py-[10px] relative'>

                <a className='flex items-center' href="">
                    <img className='w-[17px] h-fit' src="/public/images/category.png" alt="" />
                    <div className='ml-[10px] font-architechs text-sm'>
                        test
                    </div>
                </a>
                <div className='w-[45px] mx-[10px]'>
                    <img className='w-full inline-block ' src="/public/images/divider.png" alt="" />
                </div>
                <div className='flex self-center'>
                    <img className='w-[17px]' src="/public/images/published.png" alt="" />
                    <div className='ml-[10px] font-architechs text-sm'>
                        10 Ocak 2020
                    </div>
                    {pinned && <img className='absolute inline-block align-middle right-[-8px] top-[-13px] bottom-auto left-auto w-[80px]'
                        src="/public/images/pin.png" alt="" />}


                </div>
            </div>
            <div className='block w-full'>
                <img className='h-[300px] object-cover w-full border-y-[4px]  rounded-tl-[20px] rounded-tr-[20px] static border-black' src="/public/images/test.jpg" alt="" />
            </div>
            {title && <a className='py-[30px] pr-[20px] pl-[35px] block' href="/post/1">
                <div style={{ fontSize: '40px', lineHeight: '40px' }} className='text-[#252420]'>
                    Hacks for Productivity
                </div>
            </a>}
        </div>
    )
}

export default Post