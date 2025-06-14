import React from 'react';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        integrity="sha512-yV1q...replace_with_real_hash"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <Head>
        <title> Naman Gupta</title>
         <link rel="icon" href="/Images/favicon.webp" />
        
      </Head>

      <Navbar />
      {/* Main Content */}
      <main>{children}</main>
      <Footer />
      {/* <Whatsapp/>
        <TawkMessenger/> */}
    </div>
  );
}

export default Layout;
