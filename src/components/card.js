function Card({ image, title }) {
  return (
    <div className="relative w-72 h-80 bg-[#5E2325] border-[4px] border-[#FFE7D1] rounded-2xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.4)] hover:scale-105 hover:shadow-[0px_15px_40px_rgba(255,231,209,0.4)] transition-all duration-300">
      
      {/* Card Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#461A1C] via-transparent to-transparent opacity-80"></div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 w-full py-4 bg-gradient-to-t from-[#461A1C] to-transparent flex items-center justify-center">
        <p className="font-serif font-bold text-xl text-[#FFE7D1] text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
          {title}
        </p>
      </div>
    </div>
  );
}

export default Card;
