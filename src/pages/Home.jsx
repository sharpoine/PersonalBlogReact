import { useEffect, useState } from 'react'
import '../App.css'
import { SideBar } from '../components/SideBar'
import { Header } from '../components/Header'
import Post from '../components/Post'
import Post2 from '../components/Post2'
import Post3 from '../components/Post3'
function Home() {
    const [post, setPost] = useState([])
    const fetchPost = () => {
        fetch('/api/posts', {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                setPost(data)
                console.log(post)
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
    }
    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <>




            <Post pinned title />

            <div className='py-[40px]'>
                <img src="./images/seperator2.png" alt="" />
            </div>

            <div className='relative'>
                <h2 className='uppercase font-anton text-6xl my-0 relative'>
                    Top Stories
                </h2>
                <img className='absolute z-2 w-[80px] top-auto right-auto left-0 bottom-0' src="./images/title-dec.png" alt="" />
            </div>

            <div className='mt-[40px] mb-[20px]'>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-x-[30px] gap-y-[30px]'>
                    <Post2 />
                    <Post2 />
                    <Post2 />
                    <Post2 />
                </div>
            </div>


            <div className='py-[40px]'>
                <img src="./images/seperator2.png" alt="" />
            </div>

            <div className='relative'>
                <h2 className='uppercase font-anton text-6xl my-0 relative'>
                    Our Blog
                </h2>
                <img className='absolute z-2 w-[80px] top-auto right-auto left-0 bottom-0' src="./images/title-dec.png" alt="" />
            </div>
            <div className='mt-[40px] mb-[20px]'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 mt-[40px] mb-[20px] gap-[20px]'>
                    {
                        post.map((item) => (
                            <Post3 id={item._id} header={item.header} image={item.image} date={new Date(item.date_publish).toLocaleDateString()} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home
