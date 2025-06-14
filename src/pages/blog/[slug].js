import blogData from '../../../data';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/layout/Layout';
import Breadcrumbs from '@/components/Breadcrumb_new';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = blogData.find(p => p.slug === slug);

  if (!post) return <p className="text-center py-20">Loading...</p>;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          By {post.author} | {new Date(post.date).toDateString()}
        </p>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={500}
          className="rounded-lg mb-6"
        />
        <Breadcrumbs />
        <div
          className="prose prose-lg text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
        />
      </div>
    </Layout>
  );
}
