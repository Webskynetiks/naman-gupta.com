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
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
            <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-6">
              Durham University & NMIMS Alumnus | Investment Banking | Wealth Management | Financial Analysis | Finance & Investment
            </h2>
            
            <div className="space-y-4 text-sm md:text-base text-gray-800">
              <p className="text-justify">
                <strong>Naman Gupta</strong> is an enthusiastic finance professional aiming to specialise in{' '}
                <strong>investment banking, wealth management, and financial analysis.</strong> With a Merit degree MSc in Finance & Investments from Durham University Business School (UK) and a Bachelor of Commerce (Hons) from NMIMS - Narsee Monjee Institute of Management - Mumbai (India), Naman is eager to{' '}
                <strong>develop and implement sophisticated valuation models</strong> that drive informed strategic decisions. His proficiency with{' '}
                <strong>Bloomberg Terminal, PowerBI, and SQL</strong> enables him to extract critical insights and streamline financial processes, directly enhancing efficiency and profitability.
              </p>
              <p className="text-justify">
Ready to leverage strong analytical capabilities, technical proficiency, and a profound understanding of market mechanisms to drive significant success for your team in the dynamic financial landscape.              </p>
            </div>

            {/* Uncomment if you want the Read More button */}
            {/* <Link href="/about-me">
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-xl hover:scale-105">
                Read More
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}