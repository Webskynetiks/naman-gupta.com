import {
  FaLinkedin,
  FaTwitter,
  FaFacebookSquare,
  FaPhoneAlt,
  FaArrowCircleRight,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" bg-[#000000] text- pt-14 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4"> Naman Gupta</h4>
          <p className="text-sm leading-relaxed text-white">
        Naman Gupta is a finance professional skilled in investment banking, portfolio management, and analysis. He leverages global education and tools like Bloomberg, Excel VBA, Tableau, and Python.

          </p>
        </div>

       

        {/* Contact Info */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4 pl-6">Contact</h4>
          <ul className="space-y-4 text-sm pl-6">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-white text-base" />
              <a href="tel:9910039395" className="text-white hover:underline">
                +91 9910039395
              </a>
             
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-white text-base" />
              <a href="tel:7392768399" className="text-white hover:underline">
                 +44 7392768399


              </a>
             
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white text-base" />
              <a href="mailto:contact@namangupta.co.in" className="text-white hover:underline">
               contact@namangupta.co.in
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div className='ml-6' >
          <h4 className="text-2xl font-bold text-white mb-4">Connect With Me</h4>
          <div className="flex gap-10 mb-6">
            <a
              href="https://www.linkedin.com/shareArticle?url=namangupta.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-white hover:text-white text-2xl transition-transform hover:-scale-x-105" />
            </a>
            <a href="https://x.com/intent/post?url=namangupta.co.in/" aria-label="Twitter" target="_blank">
              <FaXTwitter className="text-white hover:text-white text-2xl transition-transform hover:-scale-x-105" />
            </a>

            {/* <FaXTwitter/> */}

           
            <a
              href="https://www.instagram.com/naman_38/

"
              aria-label="instagram"
              target="_blank"
            >
              <FaInstagram className="text-white hover:text-white text-2xl transition-transform hover:scale-110 hover:-scale-x-105" />
            </a>
          </div>

          {/* <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-white `hover:bg-blue-700 py-2 rounded text-black font-medium transition-colors duration-200"
            >
              Subscribe
            </button>
          </form> */}
        </div>
      </div>

      <div className="text-center text-white text-md mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Naman Gupta. All rights reserved.
      </div>
    </footer>
  );
}
