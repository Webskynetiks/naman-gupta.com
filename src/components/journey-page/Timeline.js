// components/Timeline.js
import { FaFileInvoiceDollar, FaChartLine, FaLaptopCode, FaUniversity, FaPlaneDeparture, FaGraduationCap } from "react-icons/fa";

const timelineData = [
  {
    year: "2025",
    title: "CFA - Chartered Financial Analyst",
    description: "Currently appearing for the CFA designation",
    icon: <FaFileInvoiceDollar />,
    position: "right",
  },
  {
    year: "2023-2025",
    title: "MSc - Finance and Investments",
    description: "Durham University, United Kingdom",
    icon: <FaChartLine />,
    position: "left",
  },
  {
    year: "2022-2023",
    title: "Analyst - Skynetiks Technologies (P) Ltd",
    description: "Software company with offices in India, USA, and UAE",
    icon: <FaLaptopCode />,
    position: "right",
  },
  {
    year: "2022",
    title: "B.Com (Hons) - NMIMS",
    description: "Narsee Monjee Institute of Management Studies - Achieved Distinction",
    icon: <FaUniversity />,
    position: "left",
  },
  {
    year: "2020",
    title: "Internship - Cargo Service Centre (CSC)",
    description: "Cargo handling company at Delhi Airport Terminal 2",
    icon: <FaPlaneDeparture />,
    position: "right",
  },
  {
    year: "2019",
    title: "SSC (CBSE)",
    description: "Achieved High Distinction",
    icon: <FaGraduationCap />,
    position: "left",
  },
];

export default function Timeline() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-5">
      <div className="relative w-full max-w-6xl bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10 border-b-2 border-indigo-300 pb-4">
          Naman Gupta's Professional Journey
        </h2>
        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-indigo-600 h-full rounded"></div>
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`w-full md:w-1/2 px-4 py-6 relative ${item.position === "left" ? "md:pr-12 text-right md:left-0" : "md:pl-12 text-left md:left-1/2"}`}
            >
              <div
                className={`absolute top-8 ${
                  item.position === "left" ? "right-0 md:right-[-12px]" : "left-0 md:left-[-12px]"
                } z-10 w-6 h-6 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center text-indigo-600 text-lg`}
              >
                {item.icon}
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-indigo-500 text-sm font-medium mb-1">{item.year}</p>
                <h3 className="text-indigo-800 font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
