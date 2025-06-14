'use client';

import Image from 'next/image';
import { Award, Mic, Users, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/layout/Layout';
import AboutSection from '@/components/about-page/Aboutsection';

export default function AboutPage() {
  return (
    <Layout>
      <AboutSection />
       <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full">
          <Image
            src="/Images/NMIMS-Graduation.webp" // replace with your actual path
            alt="Award ceremony photo 1"
            width={1000}
            height={600}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
        <div className="w-full">
          <Image
            src="/Images/Grad-2.webp" // replace with your actual path
            alt="Award ceremony photo 2"
            width={1000}
            height={600}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </div>
    </section>
    </Layout>
  );
}
