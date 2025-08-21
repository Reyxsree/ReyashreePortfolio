import { Link } from "react-router-dom";
import Navbar from "../components/navbar.js";
import Design from "../assets/aiml.jpg";
import Web from "../assets/webdev.jpg";
import Card from "../components/card.js";
import "../index.js";

function Project() {
  return (
    <div className="bg-[#461A1C] min-h-screen">
      <Navbar />

      {/* Heading */}
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#FFE7D1] font-bold drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-center pt-10 pb-16 px-4">
        Projects
      </h1>

      {/* Project Cards */}
      <div className="flex flex-col md:flex-row gap-10 px-6 pb-20 justify-center items-center">
        {/* Link to Design Page */}
        <Link to="/design">
          <Card image={Design} title="AI/ML" />
        </Link>

        {/* Link to WebDev Page */}
        <Link to="/webdev">
          <Card image={Web} title="Webdev" />
        </Link>
      </div>
    </div>
  );
}

export default Project;
