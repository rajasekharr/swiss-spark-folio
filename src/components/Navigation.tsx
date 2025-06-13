
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Work', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="flex justify-between items-center h-24 px-8 lg:px-12">
          {/* Logo - Left Side */}
          <Link to="/" className="relative">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <span className="text-white text-xl font-light">E</span>
            </div>
          </Link>

          {/* Menu Button - Right Side */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 p-3"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`}></span>
              <span className={`absolute top-2 left-0 w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-4 left-0 w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <nav className="space-y-8">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-4xl md:text-6xl font-thin text-white hover:text-gray-300 transition-colors duration-300"
                  style={{
                    animationDelay: isMenuOpen ? `${index * 0.1}s` : '0s',
                    animation: isMenuOpen ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
