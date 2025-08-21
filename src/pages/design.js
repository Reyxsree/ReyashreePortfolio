import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Card from "../components/card";
import CS1 from "../assets/cs1.jpg";
import CS2 from "../assets/cs2.jpg";
import CS3 from "../assets/cs3.jpg";

function DesignPage() {
  const baseCards = [
    {
      image: CS1,
      title: "Fairness-Aware Cervical Cancer Risk Prediction",
      description: "Bias-mitigated ML model for cervical cancer risk.",
      details: `🔹 Built and evaluated 5 ML models (Random Forest, SVM, ANN, AdaBoost, XGBoost) on real-world data.
🔹 Used AIF360 with reweighing to mitigate bias.
🔹 Measured fairness with SPD, EOD, and AOD metrics.`,
    },
    {
      image: CS2,
      title: "Animal Vocalization Classification Using CNN",
      description: "Deep learning model for animal sound analysis.",
      details: `🔹 Trained a CNN model on animal audio recordings for bioacoustics analysis.
🔹 Achieved 80% accuracy by using spectrogram-based preprocessing.
🔹 Applied data augmentation techniques for robustness.`,
    },
    {
      image: CS3,
      title: "Facial Recognition Attendance System",
      description: "Automated AI-based attendance solution.",
      details: `🔹 Created an AI-based attendance system with time constraints (≥70% class duration).
🔹 Automated Excel data entry for efficiency.
🔹 Minimized proxy attendance using facial recognition technology.`,
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
    <div className="bg-[#461A1C] min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[#FFE7D1] p-6 md:p-8 border-8 border-black border-solid">
        <div className="flex px-5 items-center relative">
          <Link to="/project">
            <FaArrowLeft size={24} className="md:size-6" />
          </Link>
          {/* Keep comic font for heading */}
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl font-comic font-black hover:shadow-text transition-all duration-300 cursor-pointer">
            AI/ML
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
              {/* Card titles already use professional font from Card.js */}
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
            className="bg-[#FFE7D1] border-8 border-black text-[#461A1C] rounded-xl p-6 w-full max-w-md shadow-xl relative font-sans"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title */}
            <h2 className="text-lg md:text-xl font-bold mb-4">
              {selectedCard.title}
            </h2>

            {/* Detailed Explanation */}
            <p className="mb-4 text-sm md:text-base font-medium whitespace-pre-line leading-relaxed">
              {selectedCard.details}
            </p>

            {/* Close Button */}
            <button
              onClick={closeCardDetail}
              className="absolute top-2 right-4 text-2xl font-bold hover:text-black"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default DesignPage;
