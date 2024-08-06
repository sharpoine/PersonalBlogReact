import React from 'react'

const About = () => {
    return (
        <div className="grid grid-cols-2 border-[4px] border-black rounded-[30px] p-[30px] gap-[20px] justify-center bg-white">
            <div className='text-center bg-[#c9c5b5] border-[4px] border-black rounded-[30px] justify-end pt-0'>
                <img src='/public/images/about.png' className="w-[320px] mx-auto block" alt="" />
            </div>
            <div className='justify-center pl-[10px]'>
                <h1 className='mb-[20px] text-3xl'>Başlık</h1>
                <img src="/public/images/seperator3.png" className='mb-[20px]' alt="" />
                <p className='mb-[20px] text-xl font-architechs'>
                    Traversing the vast, ever-expanding landscape of
                    blog topics, I don a myriad of writerly hats, each representing a
                    unique facet of my passion for storytelling. With every post, I embark on
                    a new journey of exploration,
                    embracing the diversity of subjects that spark my curiosity.
                </p>
                <p className='mb-0 font-architechs text-xl'>
                    In this boundless world of words, my commitment to
                    learning knows no bounds. I am an eternal student of life's intricate
                    tapestry, always seeking
                    to deepen my understanding and share the insights I uncover.
                </p>

            </div>
        </div>
    )
}

export default About