import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Club() {
  return (
    <div className="bg-[#2E0E0F] min-h-screen flex flex-col text-[#FFE7D1] font-sans">
      {/* Header */}
      <div className="bg-[#FFE7D1] p-6 md:p-8 border-8 border-black border-solid">
        <div className="flex items-center relative px-5">
          <Link to="/experience">
            <FaArrowLeft size={24} className="text-black" />
          </Link>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-comic font-black text-black">
            Clubs
          </h1>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 md:p-16 space-y-12 max-w-4xl mx-auto">
        {/* Sketch Club */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFE7D1]">Sketch Club</h2>
          <p className="italic text-[#FFDAB9]">Graphic Designer</p>
          <p className="text-lg leading-relaxed">
            Part of the <span className="font-semibold">Sketch Club</span>, a design-focused college club. 
            Contributed to enhancing our social media presence and creative outreach.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
            <li><span className="font-semibold">Designed posters and graphics</span> for social media campaigns and events.</li>
            <li><span className="font-semibold">Conducted multiple design workshops</span> using Figma and other tools.</li>
            <li><span className="font-semibold">Hosted events</span> to engage students and teach design principles.</li>
          </ul>
          <p className="text-lg bg-[#FFE7D1] text-black px-4 py-3 rounded-xl shadow-lg border-2 border-black">
            <span className="font-semibold underline">Skills & Technologies:</span> Graphic Design, Figma, Poster Design, Event Hosting, Visual Communication
          </p>
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-[#FFE7D1]/30" />

        {/* TechPro Club */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFE7D1]">TechPro Club</h2>
          <p className="italic text-[#FFDAB9]">Designer</p>
          <p className="text-lg leading-relaxed">
            Member of <span className="font-semibold">TechPro Club</span>, the college’s technical club. 
            Contributed as a designer to tech-related initiatives and events.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
            <li><span className="font-semibold">Designed creative assets</span> for tech events, competitions, and workshops.</li>
            <li><span className="font-semibold">Participated in organizing and conducting technical events</span>, ensuring smooth execution.</li>
            <li><span className="font-semibold">Collaborated with club members</span> to maintain a consistent and professional visual identity.</li>
          </ul>
          <p className="text-lg bg-[#FFE7D1] text-black px-4 py-3 rounded-xl shadow-lg border-2 border-black">
            <span className="font-semibold underline">Skills & Technologies:</span> Graphic Design, Event Design, Visual Communication, Technical Event Support
          </p>
        </div>
      </div>
    </div>
  );
}

export default Club;
