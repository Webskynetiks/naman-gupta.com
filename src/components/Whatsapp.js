import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function Whatsapp() {
  return (
    <>
      <div className="fixed bottom-5 left-5 md:right-10 z-50">
        <a
          href="https://wa.me/919212378780"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full inline-flex  items-center space-x-2 cursor-pointer"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </>
  );
}

export default Whatsapp;
