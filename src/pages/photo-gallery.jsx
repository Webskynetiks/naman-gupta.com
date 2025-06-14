// pages/gallery.js
import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/layout/Layout';

const galleryItems = [
  {
    src: '/Images/gallery/confederation-of-indian-industry.webp',
    caption: 'Confederation of Indian Industry Event',
  },

  {
    src: '/Images/gallery/pankaj-singh.webp',
    caption: 'With Mla Shri Pankaj Singh at Industry Meet',
  },
  {
    src: '/Images/gallery/pankaj-tirpathi.webp',
    caption: 'Interaction with Actor Pankaj Tripathi',
  },
  {
    src: '/Images/gallery/Shri-Siddharth-Nath-Singh.webp',
    caption: 'Meeting with Mla Shri Siddharth Nath Singh',
  },
  {
    src: '/Images/gallery/union-minister-piyush-goel-and-chier-minister-karnartka-shri-b.s.-yediyurappa.webp',
    caption:
      ' MLA  Shri Siddarth Nath Singh Ji and Prasar Bharati chairperson Shri Navneet Sehgal Ji',
  },
  {
    src: '/Images/gallery/zee-news.webp',
    caption: 'Featured on Zee News for Industry Leadership',
  },
  {
    src: '/Images/gallery/pankaj-singh-two.webp',
    caption: 'With Mla  Shri Pankaj Singh Ji',
  },
  {
    src: '/Images/Award/award.jpg',
    caption: 'Kulmani Gupta with Mla Udaybhan Singh',
  },
   {
    src: '/Images/gallery/kulmani-gupta-appoints-hackathon-judge.jpg',
    caption:"Kulmani Gupta Appointed as Judge at Annual Hackathon Organized by Ajay Kumar Garg Engineering College (AKGEC) "
  },
  {
    src: '/Images/Award/award-for-textile-ion-tcs.webp',
  },
  {
    src: '/Images/speech/speech-two.webp',
  },
  {
    src: '/Images/speech/speech.webp',
  },
  {
    src: '/Images/gallery/uganda-event.webp',
  },
  {
    src: '/Images/gallery/dainik-jagran-event.webp',
  },
  {
    src: '/Images/gallery/iia-national-convention-metting.webp',
  },
 
];

export default function GalleryPage() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <Layout>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Photo Gallery</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Explore special moments, leadership events, and memorable media appearances of Kulmani
            Gupta.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="cursor-pointer group" onClick={() => setModalImage(item)}>
                <div className="overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={item.src}
                    alt={`Gallery image ${idx + 1}`}
                    width={400}
                    height={250}
                    className="object-cover w-full h-[250px] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-2 text-sm text-center text-gray-700">{item.caption}</p>
              </div>
            ))}
          </div>

          {/* Modal */}
          {modalImage && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
              onClick={() => setModalImage(null)}
            >
              <div className="bg-white rounded-lg p-4 max-w-3xl w-full">
                <img
                  src={modalImage.src}
                  alt="Zoomed image"
                  className="w-full max-h-[80vh] object-contain rounded"
                />
                <p className="mt-2 text-center text-white text-sm">{modalImage.caption}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
