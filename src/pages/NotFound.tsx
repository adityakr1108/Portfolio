
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CodeRain from '../components/CodeRain';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-100 px-4">
      <CodeRain />
      <div className="text-center relative z-10 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-purple-100 mb-4">404</h1>
        <p className="text-xl md:text-2xl text-white mb-8">Oops! Page not found</p>
        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/80 text-white font-medium rounded-lg transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
