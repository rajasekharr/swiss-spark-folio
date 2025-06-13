
import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);

  const portfolioImages = [
    {
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80',
      title: 'Emily Chen',
      subtitle: 'Senior UX Designer & Creative Director',
      description: 'Crafting Digital Experiences'
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80',
      title: 'Design Innovation',
      subtitle: 'User Experience Research',
      description: 'Human-Centered Solutions'
    },
    {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
      title: 'Digital Strategy',
      subtitle: 'Creative Leadership',
      description: 'Strategic Design Thinking'
    },
    {
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80',
      title: 'Visual Design',
      subtitle: 'Interface Innovation',
      description: 'Pixel Perfect Execution'
    },
    {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
      title: 'Brand Experience',
      subtitle: 'Product Design',
      description: 'End-to-End Solutions'
    },
  ];

  const nextSlide = useCallback(() => {
    setScrollDirection(1);
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
  }, [portfolioImages.length]);

  const prevSlide = useCallback(() => {
    setScrollDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  }, [portfolioImages.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Handle scroll navigation
  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (event) => {
      if (isScrolling) return;
      
      isScrolling = true;
      
      if (event.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextSlide, prevSlide]);

  const currentImage = portfolioImages[currentSlide];

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Background Images */}
      <div className="absolute inset-0">
        {portfolioImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: index === currentSlide ? 
                `scale(1) translateY(${scrollDirection * -20}px)` : 
                `scale(1.1) translateY(${scrollDirection * 20}px)`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-8">
          <h1 
            key={`title-${currentSlide}`}
            className="text-6xl md:text-8xl font-thin mb-6 tracking-tight animate-fade-in"
          >
            {currentImage.title}
          </h1>
          <p 
            key={`subtitle-${currentSlide}`}
            className="text-xl md:text-2xl font-light mb-4 tracking-wide opacity-90 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            {currentImage.subtitle}
          </p>
          <div 
            key={`description-${currentSlide}`}
            className="text-sm md:text-base font-light tracking-widest opacity-80 uppercase animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {currentImage.description}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full transition-all duration-200 z-20 group"
      >
        <ChevronLeft size={24} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full transition-all duration-200 z-20 group"
      >
        <ChevronRight size={24} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {portfolioImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-1000 ease-in-out"
          style={{ width: `${((currentSlide + 1) / portfolioImages.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Index;
