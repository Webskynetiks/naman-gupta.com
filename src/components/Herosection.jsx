// components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Image - Full width on mobile */}
        <div className="order-1 md:order-2 w-full">
          <div className="w-full">
            <img
              src="/Images/profile-picture.JPG"
              
              width={800}
              height={500}
              className="w-full h-[20rem] lg:h-[32rem] object-cover  shadow-lg rounded"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-2xl font-bold mb-4">Naman Gupta  </h1>
          <h1 className="text-4xl md:text-xl  "> MSc Finance | Durham University United Kingdom </h1>
          <h2 className="text-xl font-semibold text-black mb-6">
            {/* <a className="hover:underline text-2xl" href="https://skynetiks.com/" target="blank">
                      </a> */}
            
          </h2>
          <p className="text-gray-800 mb-4 text-justify">
With a Master’s degree in Finance and Investment from Durham University Business School, one of the United Kingdom’s leading institutions, and a Bachelor of Commerce (Hons) from Narsee Monjee Institute of Management Studies (NMIMS), Naman Gupta is a finance professional with a strong emphasis on investment banking, wealth management, and financial analysis. With an experience in valuation models, Naman Gupta is proficient in utilizing tools such as Bloomberg Terminal, PowerBi, Tally ERP, and SQL.           </p>
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
