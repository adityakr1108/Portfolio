import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, Download, Briefcase, Code } from 'lucide-react';
import CodeRain from '../components/CodeRain';
import DataFlow from '../components/DataFlow';
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DataFlow />

        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-0 animate-float-slow">
          <div className="w-32 h-32 bg-gradient-to-br from-green-200/40 via-green-100/60 to-blue-400/40 rounded-full blur-2xl opacity-30 filter" />
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center mb-4 animate-fade-in">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <Avatar className="w-60 h-50 mb-3 ring-4 ring-green-200/40 shadow-xl animate-float">
                  <AvatarImage
                    src="/profile-photo.jpg"
                    alt="Aditya Kumar"
                  />
                </Avatar>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-heading animate-pulse-glow mb-2 ">
                  Aditya Kumar
                </h1>
              </div>
            </div>

            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
              <span className="text-white">Turning Data Into Insight</span> &amp; <span className="text-white">Code Into Impact</span>
            </p>

            <p className="text-md md:text-lg mb-10 text-gray-400 max-w-2xl mx-auto animate-fade-in">
              Data Scientist & Java Backend Developer passionate about building scalable solutions and 
              extracting valuable insights from complex datasets.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to="/projects"
                className="px-6 py-3 bg-gradient-to-br from-green-300 via-green-400 to-green-300 text-black font-medium rounded-lg 
                transition-all flex items-center shadow-lg shadow-green-200/20 animate-scale-in hover:scale-105"
                style={{ boxShadow: "0 0 15px #22ffbf44" }}
              >
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/10 
                text-white font-medium rounded-lg transition-colors animate-fade-in"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-6 animate-fade-in">
              <a 
                href="https://github.com/adityakr1108" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/aditya-kumar-11082003-babua/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:aditya.kr.agrawal1108@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://drive.google.com/uc?export=download&id=1xsDWW7M5szWUDF0iuAlwCK0GlIk1Uom7" 
                className="text-gray-400 hover:text-white transition-colors flex items-center"
                aria-label="Download Resume"
              >
                <Download size={24} />
                <span className="ml-2 text-sm font-medium">Resume</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ArrowRight size={24} className="rotate-90 text-gray-400" />
        </div>
      </section>

      {/* Page Summaries Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Summary */}
            <Link
              to="/about"
              className="card-container group animate-fade-in cursor-pointer transition-transform hover:scale-105"
              style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
              aria-label="Go to About Page"
            >
              <div className="mb-4">
                <Code className="w-8 h-8 text-green-200" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">My Journey</h3>
              <p className="text-gray-400 mb-4">
                Passionate Data Scientist & Java Backend Developer with expertise in building scalable solutions
                and extracting insights from complex datasets.
              </p>
              <span className="text-green-200 hover:text-green-300 inline-flex items-center story-link">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
            {/* Projects Summary */}
            <Link
              to="/projects"
              className="card-container group animate-fade-in cursor-pointer transition-transform hover:scale-105"
              style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}
              aria-label="Go to Projects Page"
            >
              <div className="mb-4">
                <Briefcase className="w-8 h-8 text-green-200" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Projects</h3>
              <p className="text-gray-400 mb-4">
                Explore my portfolio of data science and backend development projects,
                from AI applications to scalable systems.
              </p>
              <span className="text-green-200 hover:text-green-300 inline-flex items-center story-link">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
            {/* Contact Summary */}
            <Link
              to="/contact"
              className="card-container group animate-fade-in cursor-pointer transition-transform hover:scale-105"
              style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
              aria-label="Go to Contact Page"
            >
              <div className="mb-4">
                <Mail className="w-8 h-8 text-green-200" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Get in Touch</h3>
              <p className="text-gray-400 mb-4">
                Have a project in mind? Let's collaborate and bring your ideas to life.
                Reach out for opportunities and discussions.
              </p>
              <span className="text-green-200 hover:text-green-300 inline-flex items-center story-link">
                Contact Me <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 relative z-10 bg-dark-200/50 animate-fade-in" style={{ animationDelay: '450ms', animationFillMode: 'backwards' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-heading">
            Technologies & Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "Python", "Java", "Spring Boot", "Machine Learning",
              "Data Science", "SQL", "React", "Node.js","C++","Html","Css"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-green-200/10 rounded-full text-green-200 hover:bg-green-200/20 
                transition-colors animate-pulse-soft"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
