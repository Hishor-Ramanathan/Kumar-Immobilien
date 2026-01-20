import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop",
    alt: "Einfamilienhaus im Grünen"
  },
  {
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop",
    alt: "Modernes Architektur-Design"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    alt: "Modernes Luxushaus Pool"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide for a more relaxed feel
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[800px] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Slideshow Container */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.url} 
              alt={slide.alt} 
              className="w-full h-full object-cover transform scale-100 animate-slow-zoom"
            />
            {/* Darker left side for text readability */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-[-60px]">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold mb-8 leading-[1.1] drop-shadow-2xl">
            Ihr Zuhause.<br />
            <span className="text-brand-light italic">Unsere</span> Leidenschaft.
          </h1>
          
          <p className="text-gray-100 text-lg md:text-xl mb-12 max-w-2xl font-light leading-relaxed drop-shadow-lg">
            Seit Jahren Ihr vertrauensvoller Partner für exzellente Immobilienberatung 
            in <span className="font-semibold text-white">Niederlenz</span> und der gesamten Region.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a 
              href="#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="bg-brand-dark text-white px-10 py-4 rounded-full font-bold hover:bg-brand-light transition-all transform hover:-translate-y-1 shadow-2xl text-center group flex items-center justify-center gap-2"
            >
              Unsere Leistungen
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-brand-dark transition-all transform hover:-translate-y-1 text-center shadow-lg"
            >
              Termin vereinbaren
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide 
                ? 'bg-brand-light w-12 h-1.5' 
                : 'bg-white/40 w-3 h-1.5 hover:bg-white/60'
            }`}
            aria-label={`Gehe zu Bild ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Smooth Fade to Next Section (Fade to white) */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 40s linear infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;