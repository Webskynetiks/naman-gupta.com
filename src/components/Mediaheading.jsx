'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const mediaCards = [
  {
    src: '/Images/amar-ujala.webp',
    title: 'Interview with Hindustan Times',
    outlet: 'Hindustan Times',
    date: 'March 12, 2024',
    excerpt: 'Kulmani Gupta shares his vision on Budget',
  },
  {
    src: '/Images/offline-media/electricty.webp',
    title: 'Featured in NBT NEWS',
    outlet: 'Amar Ujala',
    date: 'Feb 5, 2024',
    excerpt: 'Discussing the challenges faced by industries for electricity',
  },
  {
    src: '/Images/news-two.webp',
    title: 'Featured in Hindustna Newspaper',
    outlet: 'Public Event',
    date: 'Jan 22, 2024',
    excerpt: 'Kulmani Gupta Writes to CPCB Over Generator Pollution Ban',
  },
  {
    src: '/Images/offline-media/open-business.webp',
    caption: 'On the cover of Startup India Magazine',
    title: 'Featured In   jagran Newspaper ',
    excerpt: 'Kulmani Gupta Highlights Lack of Clarity on Factory Operations',
  },
  {
    src: '/Images/offline-media/nbt-new.webp',
    caption: 'On the cover of Startup India Magazine',
    title: 'Featured In NBT  Noida ',
    excerpt: 'Kulmani Gupta Reappointed as Chairman of IIA Noida Chapter',
  },
  {
    src: '/Images/offline-media/times-of-india.webp',
    caption: 'On the cover of Startup India Magazine',
    title: 'Interview with  Times Of india',
    outlet: 'Hindustan Times',
    excerpt: ' Kulmani Gupta Speaks on Lockdown Impact and Business Outlook',
  },
  {
    src: '/Images/offline-media/govt-helps-to-sell-goods.webp',
    caption: 'On the cover of Startup India Magazine',
    title: 'Featured in Noida',
    // outlet: "Hindustan Times",
    excerpt: 'Historic Announcement for MSMEs at Noida Expo in Presence of Kulmani Gupta',
  },
  {
    src: '/Images/offline-media/gnida-allots.webp',
    caption: 'On the cover of Startup India Magazine',
    title: 'Featured in Times Group',
    // outlet: "Hindustan Times",
    excerpt:
      'Kulmani Gupta Welcomes ₹20 Cr GNIDA Initiative for Park and Industrial Site Maintenance',
  },
  {
    src: '/Images/offline-media/metro-news.webp',
    caption: 'On the cover of Startup India Magazine',
    title: 'Featured in NBT',
    // outlet: "Hindustan Times",
    excerpt: 'Kulmani Gupta: Metro Restart Will Help Improve Industrial Conditions in Noida',
  },
  {
    src: '/Images/offline-media/suggestion.webp',
    caption: 'On the cover of Startup India Magazine',
    title: 'Featured in Hindustan Times',
    // outlet: "Hindustan Times",
    excerpt: 'Kulmani Gupta Urges Constructive Solutions for Industrial Challenges',
  },
  {
    src: '/Images/offline-media/close-industries.webp',
    caption: 'On the cover of Startup India Magazine',
    title: 'Featured in NBT',
    excerpt: 'Kulmani Gupta Urges Constructive Solutions for Industrial Challenges',
  },
  {
    src: '/Images/offline-media/powercutt.webp',
    caption: 'On the cover of Startup India Magazine',
    title: 'Featured in Dainik Jagran',
    excerpt: 'To Boost Industrial Growth, a Facilitation Center Will Be Opened in Meerut',
  },
  {
    src: '/Images/offline-media/container-charge.webp',
    caption: 'Industrial Growth Boost: Facilitation Center to Open in Meerut',
    title: 'Featured in  NBT',
    excerpt: 'Rising Container Charges Threaten Exports, Industry Calls for Government Intervention',
  },
];

const MediaProofs = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-3 text-center text-black">Media & News</h2>
        <h6 className="text-2xl mb-8 text-center text-black">
          Glimpses of Kulmani Gupta’s recognition in leading newspapers, interviews, and public
          events.
        </h6>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaCards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div
                className="relative w-full h-48 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                {/* <p className="text-sm text-gray-500">{item.outlet} • {item.date}</p> */}
                <p className="mt-2 text-gray-600 text-sm">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="rounded-lg w-full shadow-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-4 text-white text-4xl font-bold"
              >
                &times;
              </button>
              <div className="p-5 bg-white rounded-b-lg">
                <h3 className="text-lg font-semibold text-gray-800">{selectedImage.title}</h3>
                {/* <p className="text-sm text-gray-500">
                  {selectedImage.outlet} • {selectedImage.date}
                </p> */}
                <p className="text-gray-600 mt-2 text-sm">{selectedImage.excerpt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaProofs;
