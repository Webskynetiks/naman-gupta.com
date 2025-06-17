import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const images = [
  
  {
    src: '/Images/Grad-2.webp',
    alt: 'Media Photo 1',
    caption: "Graduation Ceremony for MSc - Investment & Finance at Durham University - Durham _ United Kingdom",
    location: "Durham, United Kingdom", 
    year: "2024"
  },
  {
    src: '/Images/convocation-2.jpeg',
    alt: 'Media Photo 1',
    caption: "Graduation Ceremony for MSc - Investment & Finance at Durham University - Durham _ United Kingdom",
    location: "Durham, United Kingdom", 
    year: "2024"
  },
  {
    src: '/Images/canva.png',
    alt: 'Media Photo 2',
    caption: "Graduation Ceremony for B.Com (H) at NMIMS - Narsee Monjee Institute of Management - Mumbai India",
    location: "Mumbai, India",
    year: "2023"
  },
];

export default function ImageSlider() {
  return (
    <div className="w-full max-w-7xl mx-auto my-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination-custom',
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom'
        }}
        autoplay={{ 
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        className="rounded-2xl overflow-hidden shadow-2xl relative group"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] md:h-[700px] bg-gradient-to-br from-slate-900 to-slate-700">
              {/* Background blur effect */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover blur-sm scale-110 opacity-40" 
                />
              </div>
              
              {/* Main image */}
              <div className="absolute inset-0 z-10 flex items-center justify-center p-4 md:p-8">
                <div className="relative w-full max-w-4xl h-full">
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill 
                    className="object-contain drop-shadow-2xl" 
                  />
                </div>
              </div>

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-20" />

              {/* Content overlay */}
              <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 md:p-12">
                <div className="transform translate-y-0 transition-all duration-700 ease-out">
                  {/* Year badge */}
                  <div className="inline-block mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {img.year}
                    </span>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center mb-3 text-blue-200">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{img.location}</span>
                  </div>
                  
                  {/* Caption */}
                  <h3 className="text-white text-lg md:text-3xl font-bold leading-tight mb-4 max-w-4xl">
                    {img.caption}
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30 hover:scale-110 group-hover:opacity-100 opacity-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30 hover:scale-110 group-hover:opacity-100 opacity-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
      
      {/* Custom Pagination */}
      <div className="swiper-pagination-custom flex justify-center mt-6 space-x-3"></div>
      
      {/* Custom Pagination Styles */}
      <style jsx>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(148, 163, 184, 0.5);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-custom:hover {
          background: rgba(148, 163, 184, 0.8);
          transform: scale(1.2);
        }
        
        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          transform: scale(1.3);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
}