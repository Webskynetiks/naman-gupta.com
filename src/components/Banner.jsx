'use client';

import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 min-h-screen bg-gray-100">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Prakash Verma</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Entrepreneur <span className="mx-2">|</span> Software Engineer
        </p>
        <Link
          href="#contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-gray-800 transition"
        >
          HIRE ME
        </Link>
      </div>

      {/* Image Content */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/banner.jpg" // Ensure this image is in the public/images folder
          alt="Prakash Verma"
          width={400}
          height={500}
          className="rounded-xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Banner;
