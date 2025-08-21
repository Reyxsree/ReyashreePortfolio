import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Intern() {
  return (
    <div className="bg-[#2E0E0F] min-h-screen flex flex-col text-[#FFE7D1] font-sans">
      {/* Header */}
      <div className="bg-[#FFE7D1] p-6 md:p-8 border-8 border-black border-solid">
        <div className="flex items-center relative px-5">
          <Link to="/experience">
            <FaArrowLeft size={24} className="text-black cursor-pointer hover:scale-110 transition-transform" />
          </Link>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-bold text-black drop-shadow">
            Internship
          </h1>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 md:p-16 space-y-12 max-w-4xl mx-auto">
        {/* Company & Role */}
        <div className="space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFE7D1] drop-shadow">
            Agnikul Cosmos
          </h2>
          <p className="text-md md:text-lg italic text-[#FFDAB9]">
            React Developer | Sep 2024 – Dec 2024
          </p>
        </div>

        {/* Overview */}
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            During my internship at <span className="font-semibold">Agnikul Cosmos</span>, I worked as a <span className="font-semibold">React Developer</span> on a custom <span className="font-semibold">Frappe ERP system</span>. This experience allowed me to gain hands-on exposure to{" "}
            <span className="underline decoration-dotted">frontend development</span>,{" "}
            <span className="underline decoration-dotted">component-driven design</span>,{" "}
            <span className="underline decoration-dotted">system optimization</span>, and{" "}
            <span className="underline decoration-dotted">live deployment</span>.
          </p>
        </div>

        {/* Key Contributions */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold underline decoration-2 decoration-[#FFDAB9]">
            Key Contributions
          </h3>
          <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed pl-4">
            <li>
              <span className="font-semibold text-[#FFDAB9]">Model Optimization:</span> Optimized 5 ERP models, improving system efficiency and performance.
            </li>
            <li>
              <span className="font-semibold text-[#FFDAB9]">Dashboard Development:</span> Created 3 interactive dashboards for different modules, enhancing data visualization and usability.
            </li>
            <li>
              <span className="font-semibold text-[#FFDAB9]">Component Development:</span> Built reusable React components using <span className="font-semibold">Storybook</span>, improving UI consistency and maintainability.
            </li>
            <li>
              <span className="font-semibold text-[#FFDAB9]">Deployment:</span> Pushed dashboards to the live system, ensuring smooth integration with existing ERP workflows.
            </li>
          </ul>
        </div>

        {/* Skills & Outcome */}
        <div className="space-y-6">
          <div className="bg-[#3D1315] border-l-8 border-[#FFDAB9] p-6 rounded-lg shadow-lg">
            <p className="text-lg leading-relaxed">
              <span className="font-bold text-[#FFDAB9]">Skills & Technologies:</span>{" "}
              React, Frappe ERP, Storybook, Frontend Optimization, Dashboard Development, Component-driven UI, Real-world Product Deployment.
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            <span className="font-bold text-[#FFDAB9]">Outcome:</span> Improved system responsiveness and user experience, strengthened React and ERP customization skills, and gained experience in real-world product development in a collaborative environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intern;
