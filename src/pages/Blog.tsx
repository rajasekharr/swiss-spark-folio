
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

const Blog = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Work', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll percentage calculation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercentage(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calculate initial scroll percentage
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background overflow-y-auto">
      {/* Floating Navigation Menu */}
      <div className="fixed top-6 right-6 z-50">
        <div className={`bg-background/80 backdrop-blur-md border border-border rounded-full transition-all duration-300 ${isMenuOpen ? 'px-4 py-2' : 'p-3'}`}>
          {!isMenuOpen ? (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <Menu size={20} />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-full transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon size={16} />}
                  <span>{item.name}</span>
                </Link>
              ))}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors ml-2"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Header Section */}
      <section className="px-6 py-24 pt-32">
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

      {/* Featured Post Section */}
      <section className="px-6 py-24">
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

      {/* Recent Posts Section */}
      <section className="px-6 py-24">
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

      {/* Scroll Percentage Indicator */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-foreground/20 z-20">
        <div 
          className="h-full bg-foreground transition-all duration-100 ease-out"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default Blog;
