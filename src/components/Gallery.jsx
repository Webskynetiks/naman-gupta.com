'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/Images/pankaj-singh.jpg',
    caption: ' Kulmani Gupta With Mla Pankaj Singh  Ji',
  },
  {
    src: '/Images/dr-tripathi.webp',
    caption: 'Office Workspace Setup',
  },
  {
    src: '/Images/delhi-mla.webp',
    caption:
      'Kulmani Guptam with MLA Shri Sahab Singh Chauhan and Samajwadi Party Secretary Dishant Tyagi.',
  },
  {
    src: '/Images/ugand-india.webp',
    caption: 'Uganda India Trade and Investment ',
  },
  {
    src: '/Images/dongmin-yoon.webp',
    caption: 'India Market Exploition Team For IT Industry Business Agreement 2016',
  },
  {
    src: '/Images/akgec-hackathon.webp',
    caption:
      ' Kulmani Gupta, CEO of Skynetiks Technologies, served as a distinguished judge at Ajay Kumar Garg Engineering College’s (AKGEC) annual hackathon.',
    // caption: "Collaborating with Clients",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-black">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative w-full h-60">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-white p-3 text-center border-t border-gray-200">
                <p className="text-sm text-gray-700 font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-4 text-white text-4xl font-bold"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
