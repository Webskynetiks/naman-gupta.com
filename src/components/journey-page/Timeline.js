import { useState } from "react";
import {
  FaFileInvoiceDollar,
  FaChartLine,
  FaLaptopCode,
  FaUniversity,
  FaPlaneDeparture,
  FaGraduationCap,
} from "react-icons/fa";

const timelineData = [
  {
    year: "2025",
    title: "CFA - Chartered Financial Analyst",
    description: "Currently appearing for the CFA designation",
    icon: <FaFileInvoiceDollar />,
    category: "Education",
    color: "from-slate-400 to-slate-500"
  },
  {
    year: "2023-2025",
    title: "MSc - Finance and Investments",
    description: "Durham University, United Kingdom",
    icon: <FaChartLine />,
    category: "Education",
    color: "from-stone-400 to-stone-500"
  },
  {
    year: "2022-2023",
    title: "Analyst - Skynetiks Technologies (P) Ltd",
    description: "Software company with offices in India, USA, and UAE",
    icon: <FaLaptopCode />,
    category: "Experience",
    color: "from-zinc-400 to-zinc-500"
  },
  {
    year: "2022",
    title: "B.Com (Hons) - NMIMS",
    description: "Narsee Monjee Institute of Management Studies - Achieved Distinction",
    icon: <FaUniversity />,
    category: "Education",
    color: "from-gray-400 to-gray-500"
  },
  {
    year: "2020",
    title: "Internship - Cargo Service Centre (CSC)",
    description: "Cargo handling company at Delhi Airport Terminal 2",
    icon: <FaPlaneDeparture />,
    category: "Experience",
    color: "from-neutral-400 to-neutral-500"
  },
  {
    year: "2019",
    title: "SSC (CBSE)",
    description: "Achieved High Distinction",
    icon: <FaGraduationCap />,
    category: "Education",
    color: "from-stone-500 to-slate-600"
  },
];

export default function GridTimeline() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-300 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-300 rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-stone-300 rounded-full opacity-5 blur-3xl" />
      </div>
      
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-600 via-gray-700 to-stone-600 bg-clip-text text-transparent mb-6">
              Professional Journey
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Discover my path through education and experience
            </p>
          </div>
          
          {/* Grid Cards Timeline */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {timelineData.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/70 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl"
                
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                 <div className="flex justify-center mb-6">
  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl transform group-hover:rotate-12 transition-transform duration-300 shadow-md`}>
    {item.icon}
  </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1  text-black text-xs font-bold rounded-full shadow-sm`}>
                      {item.year}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}