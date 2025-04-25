import { useEffect } from 'react';
import { skills } from '../data/skills';
import CodeRain from '../components/CodeRain';
import { Link } from 'react-router-dom';

const About = () => {
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
      <CodeRain />
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-heading animate-float">About Me</h1>
          
          <div className="bg-dark-200/50 backdrop-blur-lg rounded-xl p-6 md:p-8 mb-12 shadow-xl border border-green-200/20 animate-slide-up hover:border-green-200/40 transition-all duration-300">
            <p className="text-gray-300 leading-relaxed mb-6">
              Hello, I'm Aditya Kumar, a passionate Data Scientist and Java Backend Developer with a drive for creating impactful solutions that leverage the power of data and robust engineering.
            </p>
            <h2 className="text-xl font-bold mb-4 text-green-200 animate-pulse-soft">My Journey</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              My coding journey began during my undergraduate studies when I first discovered the power of algorithms to solve complex problems. What started as curiosity quickly evolved into passion as I delved deeper into the world of software development and data analysis.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
            Currently in my third year pursuing a degree in Computer Science, I’ve spent the past few years honing my skills in backend development, particularly with Java and Spring Boot, by working on various academic and personal projects. Through these experiences, I’ve learned to build scalable and maintainable systems that support critical functionality. My growing fascination with data pushed me to explore data science, where I discovered an exciting intersection between analytical thinking and programming that continues to fuel my curiosity and growth.
            </p>
            <h2 className="text-xl font-bold mb-4 text-green-200 animate-pulse-soft">What Drives Me</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm particularly passionate about solving real-world problems that have tangible impacts on people's lives. Whether it's optimizing backend systems to handle millions of requests efficiently or developing machine learning models that extract meaningful insights from complex datasets, I thrive on challenges that require both technical expertise and creative thinking.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest advancements in AI and machine learning, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and pushing the boundaries of what technology can achieve.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 gradient-heading animate-float">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skills.map((category, index) => (
              <div 
                key={index} 
                className="bg-dark-200/50 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-green-200/20 hover:shadow-2xl hover:border-green-200/40 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-4 text-green-200">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-green-200/10 rounded-full text-sm text-gray-300 hover:bg-green-200/20 transition-all duration-300 hover:scale-105 animate-pulse-soft"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-green-200/10 to-green-300/10 rounded-xl p-6 md:p-8 text-center animate-float backdrop-blur-lg">
            <h2 className="text-xl font-bold mb-4 text-green-200">Let's Connect</h2>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects, opportunities, or partnerships.
            </p>
            <Link
                to="/contact"
                className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/10 
                text-white font-medium rounded-lg transition-colors animate-fade-in"
              >
                Contact Me
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
