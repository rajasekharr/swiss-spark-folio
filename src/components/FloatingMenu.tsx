
import { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Work', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const FloatingMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
  );
};

export default FloatingMenu;
