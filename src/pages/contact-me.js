"use client"
import QueryForm_Content from '@/components/contact-page/Formcontent';
import Layout from '@/layout/Layout';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Layout>
      <Head>
            <title>Contact Naman Gupta</title>

      </Head>
   <section className="w-full bg-gradient-to-r from-purple-400 to-indigo-400 text-white flex items-center px-4 md:py-0">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10  py-12">
    {/* Profile Image */}
    <div className="order-1 md:order-1 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0">
      <img
        src="/Images/crop.jpeg"
        alt="Naman Gupta's Profile Picture"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text Content */}
    <div className="order-2 md:order-1 text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
      Get in Touch 
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-4 max-w-md md:max-w-xl mx-auto md:mx-0">
       Let's connect and explore how my expertise can benefit your team or project.
      </p>
       <p class=" mt-2 mb-6">
                I look forward to hearing from you
            </p>
      {/* <a
        href="#contact-form"
        className="inline-block bg-white text-indigo-400 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Contact Me
      </a> */}
    </div>
  </div>
</section>



        <QueryForm_Content />
      </Layout>
    </>
  );
}
