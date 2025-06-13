
import { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Work', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const FloatingMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="floating-menu">
      <div className={`floating-menu-trigger ${isMenuOpen ? 'floating-menu-content px-0 py-0' : ''}`}>
        {!isMenuOpen ? (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <Menu size={20} />
          </button>
        ) : (
          <div className="min-w-48">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className="floating-menu-item"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon && <item.icon size={16} />}
                <span>{item.name}</span>
              </Link>
            ))}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="floating-menu-item w-full justify-center border-t border-border"
            >
              <X size={16} />
              <span>Close</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingMenu;
