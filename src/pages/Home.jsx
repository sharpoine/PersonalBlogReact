import { useEffect, useState } from 'react'
import '../App.css'
import Post from '../components/Post'
import Post2 from '../components/Post2'
import Post3 from '../components/Post3'
import { useInView } from 'react-intersection-observer';

function Home() {
    const [post, setPost] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasMore) {
            setPage(prev => prev + 1);
        }
    }, [inView]);

    const fetchPost = () => {
        const params = new URLSearchParams({
            page: page,
            limit: 10,

        });
        fetch(`/api/posts?${params}`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {

                if (data.length === 0) {
                    setHasMore(false);
                } else {
                    setPost(prev => [...prev, ...data]);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        fetchPost()
    }, [page])
    useEffect(() => {
        console.log(post)
    }, [post])

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
                            <Post3 postedBy={item.user.username} slug={item.slug} header={item.header} image={item.image} date={new Date(item.date_publish).toLocaleDateString()} />
                        ))
                    }
                </div>
            </div>
            <div ref={ref} style={{ height: 1 }} />
        </>
    )
}

export default Home
