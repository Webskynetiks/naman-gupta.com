'use client';

import { FaLinkedin, FaYoutube, FaTwitter, FaFacebookF, FaEnvelope, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function QueryForm_Content() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      {/* <section className="py-16 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold mb-4">Let’s Connect</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Thank you for your interest in connecting with me. Whether you're reaching out for business collaboration, a speaking engagement, or media coverage — I'm always excited to explore meaningful partnerships that create value.
        </p>
      </section> */}

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h2>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Subject</label>
             <input
                type="Subject"
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              
              
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Details */}
            <div className="max-w-md mx-auto text-center bg-gray-50  p-10 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-black mb-6">Contact Details</h2>

        <div className="space-y-3 text-[16px]">
          <p className="flex items-center justify-center gap-2 text-black">
            <FaEnvelope className="text-black text-lg" />
            <a href="mailto:contact@namangupta.co.in" className="text-blue-600 hover:underline">
              contact@namangupta.co.in
            </a>
          </p>

          <p>
            <a href="tel:+919910039395" className="text-blue-700 hover:underline">
              (+91)9910039395
            </a>
          </p>
          <p>
            <a href="tel:+447392768399" className="text-blue-500 hover:underline">
              (+44)7392768399
            </a>
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border text-black hover:bg-gray-100 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border text-black hover:bg-gray-100 transition"
            aria-label="Twitter/X"
          >
            <SiX />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border text-black hover:bg-gray-100 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border text-black hover:bg-gray-100 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
        </div>
      </section>
    </main>
  );
}
