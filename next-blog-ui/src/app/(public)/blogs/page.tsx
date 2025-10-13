import BlogCard from '@/components/modules/Blogs/BlogCard';
import { IBlogPost } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Post | Next Blog',
  description: 'our all post',
};

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
    cache: 'no-store',
  });
  const blogs = await res.json();
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto ">
      <h2 className="text-center text-4xl my-5">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-6xl mx-auto">
        {blogs.map((blog: IBlogPost) => (
          <BlogCard key={blog?.id} post={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
