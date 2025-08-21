import { FaPhone, FaLinkedin, FaEnvelope, FaGithub, FaDownload } from "react-icons/fa";
import Navbar from "../components/navbar.js";
import Reya from "../assets/reya.jpeg";
import Resume from "../assets/Reyashreeresume.pdf"; // <-- Add your resume file here

function About() {
  return (
    <div className="bg-[#461A1C] min-h-screen flex flex-col">
      <Navbar />

      {/* About Me Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-8 py-20">
        {/* Profile Image */}
        <img
          src={Reya}
          className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-[#FFE7D1]"
          alt="Reya Shree"
        />

        {/* Text */}
        <div className="text-[#FFE7D1] max-w-2xl text-center lg:text-left space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold font-serif drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            About Me
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed drop-shadow-[0_4px_4px_rgba(0,0,0,0.58)]">
            Hello! I’m <span className="font-bold">Reya Shree</span>, a Computer
            Science Engineering graduate with a strong passion for{" "}
            <span className="font-semibold">frontend development</span>,{" "}
            <span className="font-semibold">UI/UX design</span>, and building
            seamless digital experiences.  
            I enjoy transforming ideas into responsive, user-friendly, and
            visually appealing applications. This portfolio reflects my journey
            as I continue learning, experimenting, and creating.
          </p>

          {/* Download Resume Button */}
          <a
            href={Resume}
            download="ReyaShree_Resume.pdf"
            className="inline-flex items-center gap-3 bg-[#FCE8D5] text-[#461A1C] px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </section>

      {/* Skills / What I Do Section */}
      <section className="bg-[#FCE8D5] py-16 px-6 rounded-t-3xl shadow-inner">
        <h2 className="text-4xl font-bold text-[#461A1C] text-center mb-10 font-serif">
          What I Do
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#461A1C] text-[#FFE7D1] p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3">Frontend Development</h3>
            <p>
              I create responsive and modern web apps with clean code using React, 
              Tailwind, and JavaScript.
            </p>
          </div>
          <div className="bg-[#461A1C] text-[#FFE7D1] p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
            <p>
              Designing intuitive, user-friendly, and visually stunning
              interfaces with a focus on accessibility.
            </p>
          </div>
          <div className="bg-[#461A1C] text-[#FFE7D1] p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3">Full-Stack Learning</h3>
            <p>
              Expanding my skills into backend technologies like Node.js,
              Express, and MongoDB for complete solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-[#FFE7D1] mb-12 font-serif drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          Contact Me
        </h2>

        <div className="bg-[#FCE8D5] p-10 rounded-2xl shadow-lg w-[90vw] max-w-[600px] mx-auto space-y-8">
          {/* Phone & LinkedIn */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <a
              href="tel:+919176516438"
              className="flex items-center gap-3 text-[#4A1C1C] hover:underline"
            >
              <FaPhone className="text-2xl" />
              <span className="font-semibold">+91 91765 16438</span>
            </a>
            <a
              href="https://www.linkedin.com/in/reya-shree-3ba195260/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[#4A1C1C] hover:underline"
            >
              <FaLinkedin className="text-2xl" />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>

          {/* Email & GitHub */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <a
              href="mailto:Reyashree0404@gmail.com"
              className="flex items-center gap-3 text-[#4A1C1C] hover:underline"
            >
              <FaEnvelope className="text-2xl" />
              <span className="font-semibold">Reyashree0404@gmail.com</span>
            </a>
            <a
              href="https://github.com/Reyxsree"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[#4A1C1C] hover:underline"
            >
              <FaGithub className="text-2xl" />
              <span className="font-semibold">Reyxsree</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
