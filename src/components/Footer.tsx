
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-200 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold gradient-heading">
              Aditya Kumar
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Turning Data Into Insight & Code Into Impact
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4">
              <a href="https://github.com/adityakr1108" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-100 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/aditya-kumar-11082003-babua/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-100 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:contact@example.com" 
                className="text-gray-400 hover:text-purple-100 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              © {new Date().getFullYear()} Aditya Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
