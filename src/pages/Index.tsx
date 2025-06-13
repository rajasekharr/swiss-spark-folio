
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const portfolioImages = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center parallax-element"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-light swiss-heading mb-6 animate-fade-in">
            Swiss Design
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in delay-300">
            Senior Designer & UX Manager
          </p>
          <div className="swiss-mono text-sm tracking-wider opacity-80 animate-fade-in delay-500">
            Crafting digital experiences with precision and elegance
          </div>
        </div>
      </section>

      {/* Horizontal Image Slider */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light swiss-heading mb-6">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase the intersection of design thinking and technical excellence.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {portfolioImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={image}
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-foreground' : 'bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about-preview" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`${isVisible['about-preview'] ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-light swiss-heading mb-6">
                Design Philosophy
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over a decade of experience in both UX management and senior design roles, 
                I believe in creating digital experiences that are not just visually compelling, 
                but fundamentally human-centered.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My approach combines Swiss design principles with modern digital innovation, 
                resulting in solutions that are both timeless and cutting-edge.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors duration-200"
              >
                Learn more about my journey
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className={`${isVisible['about-preview'] ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt="Design Process"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects-preview" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light swiss-heading mb-6">
              Selected Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore a curated collection of projects spanning UX research, 
              interface design, and digital strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className={`perspective-card bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible['projects-preview'] ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1649972904349-6e44c42644a7' : i === 2 ? '1488590528505-98d2b5aba04b' : '1581091226825-a6a2a5aee158'}?auto=format&fit=crop&w=400&q=80`}
                  alt={`Project ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium swiss-heading mb-2">
                    Project Title {i}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Brief description of the project and its impact on user experience.
                  </p>
                  <div className="swiss-mono text-xs text-muted-foreground">
                    UX Design • Research • Strategy
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-lg hover:bg-muted-foreground transition-colors duration-200"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact-cta" className="py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-light swiss-heading mb-6">
            Let's Create Something Exceptional
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss how we can 
            bring your vision to life with thoughtful design and strategic thinking.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg hover:bg-muted transition-colors duration-200"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
