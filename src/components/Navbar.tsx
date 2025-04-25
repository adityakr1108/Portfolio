
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-200/80 backdrop-blur-lg py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight gradient-heading">
            Aditya Kumar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>About</Link>
            <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'nav-link-active' : ''}`}>Projects</Link>
            <Link to="/certifications" className={`nav-link ${isActive('/certifications') ? 'nav-link-active' : ''}`}>Certifications</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}>Contact</Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link ${isActive('/projects') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/certifications" 
              className={`nav-link ${isActive('/certifications') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
