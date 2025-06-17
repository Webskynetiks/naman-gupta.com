import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // X (formerly Twitter)
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function TopContactBar() {
  return (
    <>
      <div className="hidden md:flex bg-gray-200 text-white px-4 md:px-10 py-2 flex-col md:flex-row justify-between items-center text-sm ">
        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start text-md">
          <a
            href="mailto:contact@namangupta.co.in
"
            className="flex items-center gap-1 hover:underline"
          >
            <MdEmail className="text-black" />
            <span className="text-black" >contact@namangupta.co.in</span>
          </a>
          <span className="hidden md:inline text-black">/</span>
          <a href="tel:+91 9910039395" className="flex items-center gap-1 hover:underline">
            <MdPhone className="text-black" />
            <span className="text-black" >9910039395</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-2 mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/in/naman-g-b99654165/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center  text-[#0077B5]  hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin size={20} />
          </a>
          
          <a
            href="https://x.com/namang03?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center  text-black hover:scale-110 transition-transform duration-200"
          >
            <SiX size={20} />
          </a>
          <a
            href="https://www.instagram.com/naman_38/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center  text-[#E1306C]  hover:scale-110 transition-transform duration-200"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </>
  );
}
