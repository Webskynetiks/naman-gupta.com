// components/ImageSlider.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const images = [
  {
    src: '/Images/Grad-2.webp',
    alt: 'Media Photo 2',
    
  },
  {
    src: '/Images/NMIMS-Graduation.webp',
    alt: 'Media Photo 1',
  },
  
];

export default function ImageSlider() {
  return (
    <div className="w-full  ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: false }}
        autoplay={{ delay: 3000 }}
        loop
        className=" shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[200px] md:h-[800px]  overflow-hidden">
              {/* Dark overlay */}
              {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}

              {/* Image */}
              <Image src={img.src} alt={img.alt} fill className="object-cover" />

              {/* Caption on image */}
              {/* <div className="absolute bottom-0 left-0 right-0 z-20 p-4 text-center text-white text-sm md:text-xl font-semibold">
                {img.caption}
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
