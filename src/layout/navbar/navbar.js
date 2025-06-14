'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import TopContactBar from '@/layout/navbar/Uppernav';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="mb-[11vh]  md:mb-[15vh] xl:mb-[13vh] ">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md ">
        <TopContactBar />
        <header className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="text-2xl ffont-normal text-black ">
                Naman <span className="font-normal text-black">Gupta</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6 text-lg  font-normal text-black">
                <Link href="/" className="hover:text-blue-600 transition">
                  Home <span className='text-gray-900'>|</span>
                </Link>
                {/* <Link href="/about-me" className="hover:text-blue-600 transition">
                  About Me
                </Link> */}
                


                <Link href="/projects" className="hover:text-blue-600 transition">
                  Projects <span className='text-gray-900'>|</span>
                </Link>
                <Link href="/contact-me" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </nav>

              {/* Hamburger Icon */}
              <button onClick={toggleMenu} className="md:hidden text-gray-800 focus:outline-none">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Overlay Background */}
          {menuOpen && (
            <div
              className="fixed inset-0  bg-opacity-50 z-40 transition-opacity md:hidden"
              onClick={toggleMenu}
            />
          )}

          {/* Off-Canvas Mobile Menu */}
          <div
            className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-4 flex justify-between items-center border-b">
              <span className="text-lg font-semibold text-gray-900">Naman Gupta</span>
              <button onClick={toggleMenu} className="text-gray-800">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4 text-sm font-medium text-gray-800">
              <Link href="/" className="hover:text-blue-600" onClick={toggleMenu}>
                Home
              </Link>
              {/* <Link href="/about-me" className="hover:text-blue-600" onClick={toggleMenu}>
                About Me
              </Link> */}
              <Link href="/projects" className="hover:text-blue-600" onClick={toggleMenu}>
                Projects
              </Link>
             
              <Link href="/contact-me" className="hover:text-blue-600" onClick={toggleMenu}>
                Contact Me
              </Link>
              
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
