import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // X (formerly Twitter)
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function TopContactBar() {
  return (
    <>
      <div className="hidden md:flex bg-black/80 text-white px-4 md:px-10 py-2 flex-col md:flex-row justify-between items-center text-sm ">
        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start text-md">
          <a
            href="mailto:contact@namangupta.co.in
"
            className="flex items-center gap-1 hover:underline"
          >
            <MdEmail className="text-white" />
            <span>contact@namangupta.co.in</span>
          </a>
          <span className="hidden md:inline">/</span>
          <a href="tel:+91 9910039395" className="flex items-center gap-1 hover:underline">
            <MdPhone className="text-white" />
            <span>9910039395</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/in/naman-g-b99654165/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin size={16} />
          </a>
          
          <a
            href="https://x.com/intent/post?url=namangupta.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition-transform duration-200"
          >
            <SiX size={16} />
          </a>
          <a
            href="https://www.instagram.com/naman_38/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition-transform duration-200"
          >
            <FaInstagram size={16} />
          </a>
        </div>
      </div>
    </>
  );
}
