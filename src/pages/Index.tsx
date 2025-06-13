
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const portfolioImages = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [portfolioImages.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-8">
            <h1 
              className="text-7xl md:text-9xl font-thin mb-8 tracking-tight"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
              Emily Chen
            </h1>
            <p 
              className="text-xl md:text-2xl font-light mb-4 tracking-wide opacity-90"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
              Senior UX Designer & Creative Director
            </p>
            <div 
              className="text-sm md:text-base font-light tracking-widest opacity-80 uppercase"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              Crafting Digital Experiences
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-thin mb-12 tracking-tight text-gray-900">
              Design is not just what it looks like
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With over a decade of experience in both UX management and senior design roles, 
              I create digital experiences that are not just visually compelling, but fundamentally human-centered.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Image Slider */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-none">
          <div className="text-center mb-16 px-8">
            <h2 className="text-4xl md:text-6xl font-thin mb-8 tracking-tight text-gray-900">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              A curated selection of projects that showcase the intersection of design thinking and technical excellence.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {portfolioImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-5xl mx-auto">
                    <img
                      src={image}
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-[70vh] object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all duration-200 z-10"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all duration-200 z-10"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>

            <div className="flex justify-center mt-8 space-x-3">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-gray-800 scale-125' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-thin mb-8 tracking-tight text-gray-900">
              Selected Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Explore a curated collection of projects spanning UX research, interface design, and digital strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Link 
                key={i}
                to="/projects"
                className="group block"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${i === 1 ? '1649972904349-6e44c42644a7' : i === 2 ? '1488590528505-98d2b5aba04b' : i === 3 ? '1581091226825-a6a2a5aee158' : i === 4 ? '1486312338219-ce68d2c6f44d' : i === 5 ? '1518770660439-4636190af475' : '1551650975-87deedd45748'}?auto=format&fit=crop&w=600&q=80`}
                      alt={`Project ${i}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-light mb-3 text-gray-900 tracking-wide">
                      Project Title {i}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-4">
                      Brief description of the project and its impact on user experience and business goals.
                    </p>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">
                      UX Design • Research • Strategy
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-3 text-lg font-light tracking-wide text-gray-900 hover:text-gray-600 transition-colors duration-200 group"
            >
              View All Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl md:text-6xl font-thin mb-8 tracking-tight">
            Let's Create Something Exceptional
          </h2>
          <p className="text-lg font-light opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's discuss how we can 
            bring your vision to life with thoughtful design and strategic thinking.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-4 text-lg font-light tracking-wide hover:bg-gray-100 transition-colors duration-200 group"
          >
            Start a Conversation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
