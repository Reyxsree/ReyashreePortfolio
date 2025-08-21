import { Link } from "react-router-dom";
import Navbar from "../components/navbar.js";

function Home() {
  return (
    <div className="bg-[#461A1C] min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="text-center space-y-8 max-w-3xl">
          
          {/* Title */}
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFE7D1] leading-tight drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Hi, I’m Reya 👋
          </h1>

          {/* Subtitle */}
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-[#FFE7D1]/90">
            Frontend Developer | UI/UX Enthusiast
          </h2>

          {/* Short description */}
          <p className="text-lg sm:text-xl text-[#FFE7D1]/80 max-w-2xl mx-auto leading-relaxed">
            I design and build modern, responsive, and user-friendly web
            applications. Passionate about creating seamless digital
            experiences by blending design and technology.
          </p>

          {/* Call to Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              to="/project"
              className="px-6 py-3 bg-[#FFE7D1] text-[#461A1C] font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300"
            >
              View My Work
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border-2 border-[#FFE7D1] text-[#FFE7D1] font-semibold rounded-lg shadow-md hover:bg-[#FFE7D1] hover:text-[#461A1C] hover:scale-105 transition transform duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
