
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const posts = [
    {
      id: 'design-systems-at-scale',
      title: 'Building Design Systems at Scale',
      excerpt: 'Lessons learned from implementing design systems across multiple product teams and the challenges of maintaining consistency.',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80',
      category: 'Design Systems'
    },
    {
      id: 'accessibility-first-design',
      title: 'Accessibility-First Design Approach',
      excerpt: 'Why starting with accessibility constraints leads to better design decisions and more inclusive user experiences.',
      date: '2023-12-20',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
      category: 'Accessibility'
    },
    {
      id: 'ux-research-methods',
      title: 'Modern UX Research Methods',
      excerpt: 'Exploring new approaches to user research in remote-first environments and how to maintain research quality.',
      date: '2023-11-30',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      category: 'Research'
    },
    {
      id: 'leading-design-teams',
      title: 'Leading Remote Design Teams',
      excerpt: 'Strategies for building culture, fostering creativity, and maintaining design quality in distributed teams.',
      date: '2023-10-25',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
      category: 'Leadership'
    }
  ];

  // Create sections: header, featured, and posts
  const sections = ['header', 'featured', 'posts'];

  const nextSection = useCallback(() => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  }, [sections.length]);

  const prevSection = useCallback(() => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  }, [sections.length]);

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
    switch (sections[currentSection]) {
      case 'header':
        return (
          <section className="h-screen flex items-center justify-center bg-background px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-8xl font-thin mb-8 tracking-tight animate-fade-in">
                Blog
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Thoughts on design, leadership, and building better digital experiences. 
                Sharing insights from over a decade in the field.
              </p>
            </div>
          </section>
        );

      case 'featured':
        return (
          <section className="h-screen flex items-center justify-center bg-background px-6">
            <div className="max-w-7xl mx-auto">
              {posts.length > 0 && (
                <Link
                  to={`/blog/${posts[0].id}`}
                  className="block group"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:order-2 animate-fade-in">
                      <img
                        src={posts[0].image}
                        alt={posts[0].title}
                        className="w-full h-80 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                      />
                    </div>
                    
                    <div className="lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm text-muted-foreground font-mono">
                          Featured Post
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground font-mono">
                          {posts[0].category}
                        </span>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-thin mb-4 tracking-tight group-hover:text-muted-foreground transition-colors duration-200">
                        {posts[0].title}
                      </h2>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {posts[0].excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                        <span>{new Date(posts[0].date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span>•</span>
                        <span>{posts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </section>
        );

      case 'posts':
        return (
          <section className="h-screen flex items-center justify-center bg-background px-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-thin mb-12 text-center tracking-tight animate-fade-in">
                Recent Posts
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-muted-foreground font-mono">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-medium mb-3 group-hover:text-muted-foreground transition-colors duration-200">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="text-xs text-muted-foreground font-mono">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen overflow-hidden relative">
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
        {sections.map((_, index) => (
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
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Blog;
