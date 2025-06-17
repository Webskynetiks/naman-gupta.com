'use client';
import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FaEnvelope, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function QueryForm_Content() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  // Load SMTP.js script once on mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await window.Email.send({
        Host: 'smtp.elasticemail.com',
        Port: 2525,
        Username: 'contact@namangupta.co.in',
        Password: '1A9E9C407D6CB2E0B5A090C89386F80C09A2',
        To: 'contact@namangupta.co.in',
        From: 'contact@namangupta.co.in',
        Subject: `Query from ${formData.name} - ${formData.subject}`,
        Body: `
          <strong>Name:</strong> ${formData.name}<br/>
          <strong>Email:</strong> ${formData.email}<br/>
          <strong>Subject:</strong> ${formData.subject}<br/>
          <strong>Message:</strong> ${formData.message}<br/>
          <strong>Page URL:</strong> ${window.location.href}
        `,
      });

      toast.success('Thank You for contacting me. I will revert to you as soon as possible. Please call me on +91 9910039395 for a quick connect.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Failed to send message.');
    }

    setLoading(false);
  };

  return (
    <main className="bg-white text-gray-800">
      <Toaster />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send me a message and I will revert</h2>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="max-w-md mx-auto text-center bg-gray-50 p-10 rounded-2xl shadow-md">
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
              <a href="https://www.linkedin.com/in/naman-g-b99654165/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full border text-[#0077B5] hover:bg-gray-100 transition" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/namang03?s=21" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full border text-black hover:bg-gray-100 transition" aria-label="Twitter/X">
                <SiX />
              </a>
              <a href="https://www.instagram.com/naman_38/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full border text-[#E1306C] hover:bg-gray-100 transition" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
