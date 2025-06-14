// pages/media.js
import { useState } from 'react';
import Image from 'next/image';

const pressItems = [
  {
    source: 'Ten News',
    headline: 'Proposal to Increase Tax Exemption Limit : Kulmani Gupta',
    date: 'Feb 2, 2020',
    link: 'https://tennews.in/noida-gr-noida-firms-to-benefit-kulmani-gupta/',
    logo: '/Images/ten-news-article.png',
  },
  {
    source: ' The Times Of India',
    headline: '20000 Led light up noida surajpur industrial area ',
    date: 'sep 30, 2020',
    link: 'https://timesofindia.indiatimes.com/city/noida/20000-leds-to-light-up-noidas-surajpur-industrial-area/articleshow/78404190.cms',
    logo: '/Images/led-light.webp',
  },
  {
    source: ' The Times Of India',
    headline: 'worforce reduced to half, noida nsez plans job portal to fill  void',
    date: 'june 4, 2021',
    link: 'https://timesofindia.indiatimes.com/city/noida/workforce-reduced-to-half-noida-nsez-plans-job-portal-to-fill-void/articleshow/83218359.cms',
    logo: '/Images/nsez-plans.webp',
  },
  {
    source: ' KNN India',
    headline: 'IIA asks MSMEs to register on Udyam portal',
    date: 'july 6, 2020',
    link: 'https://knnindia.co.in/news/newsdetails/msme/iia-asks-msmes-to-register-on-udyam-portal',
    logo: '/Images/udyam-registration.webp',
  },
  // Add more articles here
];

const galleryImages = [
  '/Images/ten-news-article.png',
  '/images/gallery/speech2.jpg',
  '/images/gallery/media-interview.jpg',
];

export default function MediaPress() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Media </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover how Kulmani Gupta has been featured in newspapers, public events, and media
          platforms.
        </p>

        {/* Press Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pressItems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <img className="w-full h-[40vh] " src={item.logo} alt={item.source} />
              <h3 className="text-lg font-semibold mb-1 text-black">{item.headline}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <a
                href={item.link}
                target="_blank"
                className="text-white rounded hover:underline text-sm p-3 bg-blue-600"
              >
                Read Full Article
              </a>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Media Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="cursor-pointer" onClick={() => setModalImage(src)}>
              <Image
                src={src}
                alt={`Media ${i + 1}`}
                width={400}
                height={300}
                className="rounded-lg shadow-md hover:opacity-80 transition"
              />
            </div>
          ))}
        </div> */}

        {/* Modal */}
        {/* {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
          >
            <img src={modalImage} alt="Modal View" className="max-h-[90vh] rounded-lg" />
          </div>
        )} */}
      </div>
    </div>
  );
}
