import React from 'react';

const journeyData = [
  {
    year: '1999 – Present',
    title: 'Software Engineer',
    description:
      'Started his career in the I.T. sector, contributing to enterprise software systems and leading product development teams with a strong focus on scalable digital architecture.',
  },
  {
    year: '2003 – Present',
    title: 'Founder of Divine Store',
    description:
      'Established Divine Store, a unique eCommerce platform focused on spiritual shopping. Built a niche audience and scaled it through digital channels and intuitive UX.',
  },
  {
    year: '2009 – Present',
    title: 'Managing Director at Shrishti Softech Solutions (P) Ltd',
    description:
      'Founded and scaled a full-service digital marketing and software development firm. Shrishti is a Google Apps Reseller specializing in omnichannel marketing, SEO, SEM, eCommerce, and cloud-based solutions.',
  },
];

const ProfessionalJourney = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Professional Journey</h2>
        <div className="relative border-l border-gray-300 pl-6">
          {journeyData.map((item, index) => (
            <div key={index} className="mb-10">
              <div className="absolute w-4 h-4 bg-gray-900 rounded-full left-[-9px] top-2.5"></div>
              <span className="text-sm text-gray-500">{item.year}</span>
              <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
