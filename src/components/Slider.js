// components/ImageSlider.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const images = [
  {
    src: '/Images/canva.png',
    alt: 'Media Photo 2',
    caption:" Graduation Ceremony for B.Com (H) at NMIMS - Narsee Monjee Institute of Management - Mumbai India"
    
  },
  {
    src: '/Images/Grad-2.webp',
    alt: 'Media Photo 1',
        caption:"Graduation Ceremony for MSc - Investment & Finance at Durham University - Durham _ United Kingdom"

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
            <div className="relative w-full h-[200px] md:h-[600px]  overflow-hidden">
              {/* Dark overlay */}
              {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}

              {/* Image */}
              <Image src={img.src} alt={img.alt} fill className="object-cover" />

              {/* Caption on image */}
              <div className="absolute inset-0 flex justify-center items-center z-20">
  <div className="bg-black/60 text-white text-center px-6 py-5  text-sm md:text-2xl font-semibold shadow-lg max-w-[90%]  translate-y-5 md:translate-y-40">
    {img.caption}
  </div>
</div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
