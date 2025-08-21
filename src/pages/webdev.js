import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Card from "../components/card";
import Webdev1 from "../assets/webdev1.png";
import Webdev2 from "../assets/webdev2.png";
import Webdev3 from "../assets/webdev3.png";
import Webdev4 from "../assets/webdev4.png";
import Webdev5 from "../assets/webdev5.png";

function Webdev() {
  const baseCards = [
    {
      image: Webdev1,
      title: "Portfolio",
      description:
        "🚀 My very first React project! A fully responsive mockup website inspired by a UI design. This helped me master React fundamentals, props/state, and clean design systems while translating creative UIs into working apps.",
      link: "https://vitrual-r-ivory.vercel.app/",
    },
    {
      image: Webdev2,
      title: "E-commerce Site",
      description:
        "🛒 A full-featured e-commerce site with product listings, category filters, and a working cart system. Focused on component reusability and modern UI/UX design patterns.",
      link: "https://udemy-react-azure-nine.vercel.app/",
    },
    {
      image: Webdev3,
      title: "Blog Platform",
      description:
        "✍️ A modern blogging platform featuring markdown support, user authentication, and a mobile-first responsive layout. Built to practice real-world MERN stack concepts.",
      link: "https://actedo.vercel.app/",
    },
    {
      image: Webdev4,
      title: "Club Showcase",
      description:
        "🎨 A creative collection of UI/UX designs presented as an interactive gallery. Inspired by my design club experiences, this project balances creativity with functionality.",
      link: "https://team-ashvaa.vercel.app/",
    },
    {
      image: Webdev5,
      title: "Weather API",
      description:
        "☁️ A minimal and elegant weather app fetching live data from an API. Focused on API integration, error handling, and styling consistency.",
      link: "https://weather-api-three-pied.vercel.app/",
    },
  ];

  const cards = [...baseCards, ...baseCards, ...baseCards];

  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const animationFrame = useRef(null);
  const scrollWidthRef = useRef(0);
  const scrollSpeed = 1;

  const [hoveredCard, setHoveredCard] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const singleLoopWidth = container.scrollWidth / 3;
      scrollWidthRef.current = singleLoopWidth;
    }
  }, []);

  useEffect(() => {
    const loop = () => {
      if (!isPaused) {
        const currentX = x.get();
        const newX = (currentX - scrollSpeed) % scrollWidthRef.current;
        x.set(newX);
      }
      animationFrame.current = requestAnimationFrame(loop);
    };

    animationFrame.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrame.current);
  }, [isPaused, x]);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setIsPaused(false);
  };

  const handleCardClick = (index) => {
    setSelectedCard(cards[index]);
  };

  const closeCardDetail = () => {
    setSelectedCard(null);
  };

  return (
    <div className="bg-[#2E0E0F] min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[#FFE7D1] p-6 md:p-8 border-8 border-black border-solid">
        <div className="flex px-5 items-center relative">
          <Link to="/project">
            <FaArrowLeft size={24} className="md:size-6" />
          </Link>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-comic font-black hover:shadow-text transition-all duration-300 cursor-pointer">
            Web Dev
          </h1>
        </div>
      </div>

      {/* Scrolling Cards */}
      <div className="overflow-hidden w-full h-full flex items-center justify-center flex-grow relative py-6">
        <motion.div
          ref={containerRef}
          className="flex gap-6 md:gap-10 w-max"
          style={{ x }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(index)}
              animate={{
                scale: hoveredCard === index ? 1.2 : 1,
                zIndex: hoveredCard === index ? 10 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Card image={card.image} title={card.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Overlay */}
      {selectedCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md flex items-center justify-center z-50 px-4"
          onClick={closeCardDetail}
        >
          <motion.div
            className="bg-[#FFE7D1] border-8 border-black text-[#2E0E0F] rounded-xl p-6 w-full max-w-md shadow-2xl relative font-sans"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-48 md:h-64 object-cover rounded-md mb-4 border-4 border-black"
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center font-sans">
              {selectedCard.title}
            </h2>
            <p className="mb-6 text-base md:text-lg font-normal leading-relaxed text-[#461A1C] text-center font-sans">
              {selectedCard.description}
            </p>
            <div className="flex justify-center">
              <a
                href={selectedCard.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2E0E0F] text-[#FFE7D1] px-6 py-2 rounded-lg border-4 border-black font-semibold shadow-md hover:bg-[#461A1C] transition-all font-sans"
              >
                Visit Site →
              </a>
            </div>
            <button
              onClick={closeCardDetail}
              className="absolute top-2 right-4 text-3xl font-bold hover:text-[#2E0E0F]"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Webdev;
