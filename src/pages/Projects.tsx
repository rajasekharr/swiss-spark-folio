import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, getAllCategories } from '@/data/projects';
import FloatingMenu from '../components/FloatingMenu';

const Projects = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...getAllCategories()];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Create sections: header, categories, and project chunks
  const projectChunks = [];
  for (let i = 0; i < filteredProjects.length; i += 6) {
    projectChunks.push(filteredProjects.slice(i, i + 6));
  }
  
  const totalSections = 2 + projectChunks.length; // header + categories + project chunks

  const nextSection = useCallback(() => {
    setCurrentSection((prev) => (prev + 1) % totalSections);
  }, [totalSections]);

  const prevSection = useCallback(() => {
    setCurrentSection((prev) => (prev - 1 + totalSections) % totalSections);
  }, [totalSections]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        nextSection();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        prevSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSection, prevSection]);

  // Handle scroll navigation
  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (event) => {
      if (isScrolling) return;
      
      isScrolling = true;
      
      if (event.deltaY > 0) {
        nextSection();
      } else {
        prevSection();
      }

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextSection, prevSection]);

  const renderSection = () => {
    if (currentSection === 0) {
      // Header section
      return (
        <section className="h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-thin mb-6 tracking-tight animate-fade-in">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A comprehensive collection of design projects spanning multiple industries, 
              platforms, and user experience challenges.
            </p>
          </div>
        </section>
      );
    }

    if (currentSection === 1) {
      // Category filter section
      return (
        <section className="h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h2 className="text-4xl font-thin mb-12 animate-fade-in">Select Category</h2>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-foreground text-background'
                      : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      );
    }

    // Project sections
    const chunkIndex = currentSection - 2;
    const currentChunk = projectChunks[chunkIndex];

    return (
      <section className="h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentChunk?.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group perspective-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.category}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-3 group-hover:text-muted-foreground transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.brief}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.techniques.slice(0, 3).map((technique, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded font-mono"
                        >
                          {technique}
                        </span>
                      ))}
                      {project.techniques.length > 3 && (
                        <span className="text-xs text-muted-foreground px-2 py-1 font-mono">
                          +{project.techniques.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="h-screen overflow-hidden relative">
      <FloatingMenu />
      
      {renderSection()}

      {/* Navigation Arrows */}
      <button
        onClick={prevSection}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full transition-all duration-200 z-20 group"
      >
        <ChevronLeft size={24} className="text-foreground group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSection}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full transition-all duration-200 z-20 group"
      >
        <ChevronRight size={24} className="text-foreground group-hover:scale-110 transition-transform" />
      </button>

      {/* Section Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection ? 'bg-foreground scale-125' : 'bg-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-foreground/20 z-20">
        <div 
          className="h-full bg-foreground transition-all duration-1000 ease-in-out"
          style={{ width: `${((currentSection + 1) / totalSections) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Projects;
