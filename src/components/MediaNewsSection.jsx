'use client';

import { Newspaper, Mic, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const mediaItems = [
  {
    title: 'Interview with Hindustan Times',
    date: 'March 12, 2024',
    image: '/Images/offline-media/parking-news.webp',
    outlet: 'Hindustan Times',
    excerpt: 'Kulmani Gupta shares his vision on MSME growth and industrial reforms.',
    link: '#', // Replace with actual article URL
  },
  {
    title: 'Featured in Hindustan',
    date: 'Feb 5, 2024',
    image: '/Images/offline-media/news-two.webp',
    outlet: 'Amar Ujala',
    excerpt: 'Discussing the challenges and future of Indian manufacturing.',
    link: '#',
  },
  {
    title: 'Speech at MSME Conclave',
    date: 'Jan 22, 2024',
    image: '/media/speech.jpg',
    outlet: 'Public Event',
    excerpt: 'Keynote on MSMEs, innovation, and policy reforms.',
    link: '#',
  },
];

export default function MediaNewsSection() {
  return (
    <section className="py-20 bg-gray-50" id="media-news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-6"
        >
          Media & News
        </motion.h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Glimpses of Kulmani Gupta’s recognition in leading newspapers, interviews, and public
          events.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.outlet} • {item.date}
                </p>
                <p className="text-gray-600 mt-2 text-sm">{item.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
