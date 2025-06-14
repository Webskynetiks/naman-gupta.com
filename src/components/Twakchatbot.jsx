'use client';
import { useEffect } from 'react';

const TawkMessenger = () => {
  useEffect(() => {
    // Prevent script from being added multiple times
    if (document.getElementById('tawk-script')) return;

    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const s1 = document.createElement('script');
    s1.id = 'tawk-script';
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67f75b2f09f0b7190b51a67b/1iof3od57';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    const s0 = document.getElementsByTagName('script')[0];
    s0.parentNode.insertBefore(s1, s0);
  }, []);

  return null; // This component only injects the script
};

export default TawkMessenger;
