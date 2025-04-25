import { useEffect } from 'react';
import { Award, Badge, Scroll } from 'lucide-react';

const Certifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    {
      id: 1,
      title: "Data Analysis with Tableau",
      issuer: "Coursera",
      date: "2024",
      icon: Scroll,
      link: "https://drive.google.com/file/d/1AGxybew4JDGINbSwNzgk1ZO4TdRN1V8T/view?usp=sharing" // Replace with your actual certification link
    },
    {
      id: 2,
      title: "Cloud Computing",
      issuer: "Nptel",
      date: "2024",
      icon: Scroll,
      link: "https://drive.google.com/file/d/1qIgqPTwzoyPUp6Q0nHI7-vfUCsGA9RQA/view?usp=sharing" // Replace with your actual certification link
    },
    {
      id: 3,
      title: "Programming in C++: Hands-on Introduction",
      issuer: "Coursera",
      date: "2024",
      icon: Scroll,
      link: "https://drive.google.com/file/d/1Z7seHCbdRKjOnSQde5UDHac1iyGpvcNq/view?usp=sharing" // Replace with your actual certification link
    },
    {
      id: 3,
      title: "Competitive Programming Training",
      issuer: "CipherSchools",
      date: "Jan’25 – Feb’25",
      icon: Scroll,
      link: "https://drive.google.com/file/d/1lBS0Nzra0J2DAXnxtAQtoJpNUiP8AtwT/view?usp=sharing"
    },
    {
      id: 4,
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google (Coursera)",
      date: "Dec 1, 2023",
      icon: Scroll,
      link: "https://drive.google.com/file/d/1ke3_s1guyWEfN4TsmFSV-9Jrd7HDqALg/view?usp=sharing" // Replace with your actual certificate link
    },
    {
      id: 5,
      title: "Mastering Data Structures & Algorithms using C and C++",
      issuer: "Abdul Bari",
      date: "Nov 29, 2023",
      length: "58.5 total hours",
      icon: Scroll,
      link: "https://drive.google.com/file/d/12ns3zvbIxe8d-pZ-4fk7NYVaxf_3Quyi/view?usp=sharing" // Replace with your actual certificate link
    },
    {
      id: 6,
      title: "iGEM 2024 Competition Participation",
      issuer: "iGEM Foundation",
      date: "23–26 October, 2024",
      team: "IISER-Kolkata",
      award: "Gold Medal",
      nomination: "Best Fashion & Cosmetics Project, Undergrad & Overgrad",
      location: "Paris Convention Center, Paris",
      icon: Badge,
      link: "https://drive.google.com/file/d/16RUOMmB8IXykUb_eOrPtNABtxUpg-XrP/view?usp=sharing" // Verification link for the certificate
    }
    
    
    
    
  ];

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
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading animate-fade-in">
            Certifications
          </h1>
          <p className="text-gray-300 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '100ms' }}>
            Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning.
          </p>
          
          <div className="grid gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-dark-200/50 backdrop-blur-lg rounded-xl p-6 border border-green-200/20 
                    hover:border-green-200/40 transition-all duration-300 group animate-fade-in hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-200/10 rounded-lg group-hover:bg-green-200/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-green-200" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                      <p className="text-gray-400">Issued by {cert.issuer}</p>
                      <p className="text-gray-500 text-sm mt-1">Achieved in {cert.date}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
