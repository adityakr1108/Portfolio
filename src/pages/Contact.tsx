import { useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-dark-100">
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-grid"></div>
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(29,78,216,0.15), rgba(147,197,253,0.15))',
            filter: 'blur(3px)',
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Get In Touch</h1>
          <p className="text-gray-300 mb-10 max-w-2xl">
            Have a project in mind or want to discuss potential collaborations? 
            Feel free to reach out through the form below or via social platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="https://github.com/adityakr1108" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-dark-200 p-6 rounded-xl flex flex-col items-center text-center hover:bg-primary/10 transition-colors animate-fade-in"
              style={{ animationDelay: '120ms' }}
            >
              <Github size={32} className="mb-3 text-white" />
              <h3 className="text-lg font-medium mb-1 text-white">GitHub</h3>
              <p className="text-sm text-gray-400">Check out my repositories</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-kumar-11082003-babua/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-dark-200 p-6 rounded-xl flex flex-col items-center text-center hover:bg-primary/10 transition-colors animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              <Linkedin size={32} className="mb-3 text-white" />
              <h3 className="text-lg font-medium mb-1 text-white">LinkedIn</h3>
              <p className="text-sm text-gray-400">Connect with me professionally</p>
            </a>
            <a 
              href="mailto:contact@example.com"
              className="bg-dark-200 p-6 rounded-xl flex flex-col items-center text-center hover:bg-primary/10 transition-colors animate-fade-in"
              style={{ animationDelay: '280ms' }}
            >
              <Mail size={32} className="mb-3 text-white" />
              <h3 className="text-lg font-medium mb-1 text-white">Email</h3>
              <p className="text-sm text-gray-400">aditya.kr.agrawal1108@gmail.com</p>
            </a>
          </div>
          <div className="bg-dark-200 rounded-xl p-6 md:p-8 shadow-xl animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h2>
            <ContactForm />
          </div>
          <div className="mt-12 text-center animate-fade-in">
              <a 
                href="https://drive.google.com/uc?export=download&id=1xsDWW7M5szWUDF0iuAlwCK0GlIk1Uom7" // Replace with the actual download link
                className="inline-flex items-center px-6 py-3 bg-white/5 hover:bg-primary/10 text-white font-medium rounded-lg transition-colors"
                download // Ensures the file is downloaded instead of opened
              >
                <span className="mr-2">Download Resume</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
