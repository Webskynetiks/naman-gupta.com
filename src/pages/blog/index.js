import Layout from '@/layout/Layout';
import blogData from '../../../data';
import BlogCard from '@/components/blog-page/Blogpage';

export default function BlogPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800"> Blog Posts</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
