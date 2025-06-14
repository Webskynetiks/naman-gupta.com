export default function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left: About Me */}
      <div className="md:col-span-2">
        <h2 className="text-3xl font-semibold text-sky-600 mb-4">ABOUT ME</h2>
        <p className="text-black mb-4">
          I'm Naman Gupta, a finance professional with a strong academic foundation and a deep interest in investment banking, portfolio management, and financial analysis. I hold a Master’s degree in Finance and Investment from Durham University Business School in the United Kingdom, one of the world’s top-ranked institutions for finance education. Prior to that, I completed my Bachelor of Commerce (Honours) from Narsee Monjee Institute of Management Studies (NMIMS), a premier university in India known for its excellence in business and commerce education.
        </p>
        <p className="text-black mb-4">
          Over the years, I have developed strong analytical and strategic thinking skills that allow me to evaluate financial instruments, assess investment opportunities, and deliver insightful recommendations. I have hands-on experience with a wide range of valuation and forecasting methodologies and am proficient in tools such as Bloomberg Terminal, Microsoft Excel VBA, Python for Finance, and Tableau. These tools not only support my analytical work but also enable me to translate complex financial data into clear, actionable strategies.
        </p>
        <p className="text-black mb-4">
         My interests lie at the intersection of data, finance, and strategic decision-making. I enjoy solving complex problems, building financial models, and staying ahead of market trends. Whether it’s conducting equity research, optimizing portfolio performance, or automating financial processes, I am driven by a desire to deliver impactful solutions in a constantly evolving financial world.
        </p>
        <p className="text-black mb-4">
My interests lie at the intersection of data, finance, and strategic decision-making. I enjoy solving complex problems, building financial models, and staying ahead of market trends. Whether it’s conducting equity research, optimizing portfolio performance, or automating financial processes, I am driven by a desire to deliver impactful solutions in a constantly evolving financial world.        </p>
      </div>

      {/* Right: Sticky Contact Form */}
      <div className="sticky top-10 h-fit">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 min-h-[500px]">
          <h3 className="text-xl font-semibold mb-4 text-black">Contact Me</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
              required
            />
            <button
              type="submit"
              className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
