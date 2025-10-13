import BlogCard from '@/components/modules/Blogs/BlogCard';
import Hero from '@/components/modules/Home/Hero';
import { IBlogPost } from '@/types';

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
    next: {
      tags: ['BLOGS'],
    },
  });
  const blogs = await res.json();
  console.log(blogs);
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-5">
        {blogs.slice(0, 3).map((blog: IBlogPost) => (
          <BlogCard key={blog?.id} post={blog} />
        ))}
      </div>
    </div>
  );
}
