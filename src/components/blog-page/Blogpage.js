import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <Image
        src={post.image}
        alt={post.title}
        width={400}
        height={250}
        className="w-full object-cover h-65"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-800 hover:underline">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 text-sm hover:underline mt-2 block"
        >
          Read more »
        </Link>
      </div>
    </div>
  );
}
