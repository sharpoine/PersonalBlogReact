import React, { useEffect, useState } from 'react'
import arrow from '../../public/images/arrow.png'
import fb from '../../public/images/fb.png'
import tw from '../../public/images/tw.png'
import ig from '../../public/images/ig.png'
import yt from '../../public/images/yt.png'
import logo from '../../public/images/logo.png'
import seperator from '../../public/images/seperator.png'
import { Link } from 'react-router-dom'



export const SideBar = () => {
  const [category, setCategory] = useState([])



  const getCategory = () => {
    fetch('/api/category/get', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        setCategory(data)
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    getCategory()
  }, [])
  const baseUrl = 'http://localhost:5173';

  return (
    <div className='left-menu flex h-full  flex-col pt-[70px] pl-[15px] pr-[20px]'>
      <img className='mx-auto mb-[40px]' src={logo} alt="" />


      <div className='bg-[#c9c5b5] text-right flex-col pt-[20px] pr-[20px] pb-[20px] pl-0 border-[4px] font-anton text-xl border-black border-b-[10px] rounded-[20px] mb-[40px]'>

        {category.map((cat, i) => (

          <Link key={i} to={cat.slug} className='flex justify-end items-center self-center mb-[10px] group'>
            <img className='invisible group-hover:visible w-[30px] align-middle' src={arrow} loading='lazy' />
            <div className='text-[#252420] flex-grow-0 flex-shrink-1 basis-auto ml-[10px] leading-[20px] uppercase'>
              {cat.title}
            </div>
          </Link>
        ))}






      </div>

      <div>
        <div className={`w-full bg-[url("/public/images/seperator.png")] h-[4px] size-auto bg-left-top`}

        />
        <div className='flex justify-around pt-[30px] pb-[30px]'>
          <a className='w-[50px] block' href="">
            <img className='align-middle max-w-full inline-block' src={fb} alt="" />
          </a>
          <a className='w-[50px] block' href="">
            <img className='align-middle max-w-full inline-block' src={tw} alt="" />
          </a>
          <a className='w-[50px] block' href="">
            <img className='align-middle max-w-full inline-block' src={yt} alt="" />
          </a>
          <a className='w-[50px] block' href="">
            <img className='align-middle max-w-full inline-block' src={ig} alt="" />
          </a>
        </div>
        <div className='w-full bg-[url("/public/images/seperator.png")] h-[4px] size-auto bg-left-top' />
      </div>
    </div>
  )
}
