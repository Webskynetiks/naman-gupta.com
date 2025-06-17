// components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white text-black py-8 md:py-16 px-4 md:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Image - Full width on mobile, fixed width on desktop */}
          <div className="order-1 lg:order-2 w-full flex justify-center">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src="/Images/profile-picture.JPG"
                alt="Naman Gupta Profile Picture"
                className="w-full h-auto shadow-lg rounded object-contain"
              />
            </div>
          </div>

        {/* Text Content */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-2xl font-bold mb-4">About Me </h1>
          <h1 className="text-lg md:text-xl font-semibold  ">Durham University & NMIMS Alumnus | Investment Banking | Wealth Management | Financial Analysis | Finance & Investment </h1>
          <h2 className="text-xl font-semibold text-black mb-6">
            {/* <a className="hover:underline text-2xl" href="https://skynetiks.com/" target="blank">
                      </a> */}
            
          </h2>
          <p className="text-gray-800 mb-4 text-justify">
<strong>Naman Gupta </strong> is an enthusiastic finance professional aiming to specialise in <strong> investment banking, wealth management, and financial analysis. </strong> With a Merit degree MSc in Finance & Investments from Durham University Business School (UK) and a Bachelor of Commerce (Hons) from NMIMS - Narsee Monjee Institute of Management - Mumbai (India), Naman is eager to <strong> develop and implement sophisticated valuation models </strong> that drive informed strategic decisions. His proficiency with <strong> Bloomberg Terminal, PowerBI, and SQL </strong> enables him to extract critical insights and streamline financial processes, directly enhancing efficiency and profitability.     
     </p>
          <p className="text-gray-800  text-justify">
          Committed to contributing to the evolving financial landscape through a combination of analytical rigor, technical proficiency, and a profound comprehension of market mechanisms.
          </p>

          {/* <Link href="/about-me">
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-xl hover:scale-105">
              Read More
            </button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}