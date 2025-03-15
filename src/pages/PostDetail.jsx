import { useEffect, useState } from 'react'
import '../App.css'
import { SideBar } from '../components/SideBar'
import { Header } from '../components/Header'
import Post from '../components/Post'
import Post2 from '../components/Post2'
import Post3 from '../components/Post3'
import Markdown from "react-markdown";
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import MarkdownPreview from '@uiw/react-markdown-preview';

function PostDetail() {
    const [post, setPost] = useState()
    const { slug } = useParams()
    const getPost = () => {
        fetch('/api/posts/' + slug, {
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
        getPost()
    }, [])
    useEffect(() => {
        console.log(post)
    }, [post])

    return post ? (
        <>
            <div className='pb-{75px]'>
                <div className='grid lg:grid-cols-2 gap-[20px] lg:justify-center lg:p-0 grid-cols-1 '>
                    <div className='relative'><Post image={post.image} pinned /></div>

                    <div className='bg-white border-[4px] rounded-[30px] p-[30px] border-black flex flex-col items-start justify-start font-architechs'>
                        <h1 className='mt-0 mb-[20px] text-4xl'>
                            {post.header}
                        </h1>
                        <MarkdownPreview source={post.content} style={{ padding: 16, flex: 1, width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>


        </>
    ) : 'loading'
}

export default PostDetail