import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Post3 from '../components/Post3';

const CategoryPosts = () => {
  const { categorySlug } = useParams();

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [posts, setPosts] = useState([]);

  const { ref, inView } = useInView();

  /* === sonsuz scroll tetikleyicisi === */
  useEffect(() => {
    if (inView && hasMore) setPage(prev => prev + 1);
  }, [inView, hasMore]);

  /* === veri çekme === */
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const params = new URLSearchParams({
          page,
          limit: 10,
          category: categorySlug,
        });

        const res = await fetch(`/api/posts?${params.toString()}`, {
          method: 'GET',
          credentials: 'include',
        });

        const json = await res.json();           // <-- ❶ await ekledik

        if (!res.ok) throw new Error(json.error || 'Sunucu hatası');

        if (json.length === 0) {            // backend yanıt yapısına göre
          setHasMore(false);
        } else {
          setPosts(prev => [...prev, ...json]);
          console.log(posts)
        }
      } catch (err) {
        console.error(err);
        setHasMore(false);
      }
    };

    fetchPosts();

  }, [page]);                      // kategori değişirse yeni fetch

  /* === kategori değişince sıfırla === */
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    setPosts([]);
  }, [categorySlug]);

  return (
    <div className="mt-[40px] mb-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[20px]">
        {posts.map(item => (
          <Post3
            key={item._id}                       // <-- ❷ key eklendi
            postedBy={item.user.username}
            slug={item.slug}
            header={item.header}
            image={item.image}
            date={new Date(item.date_publish).toLocaleDateString()}
          />
        ))}
      </div>

      {/* gözlem div'i */}
      <div ref={ref} style={{ height: 1 }} />
    </div>
  );
};

export default CategoryPosts;
