
import { Github, ExternalLink } from 'lucide-react';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string[];
  github: string;
  demo?: string;
  image: string;
}

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a 
      href={project.demo || project.github} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block card-container group transition-transform hover:-translate-y-1"
    >
      <div className="flex flex-col h-full">
        <div className="overflow-hidden rounded-lg mb-4 aspect-video bg-dark-100">
          <img 
            src={project.image} 
            alt={project.title} 
            className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-green-200/10 text-green-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 mt-auto">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(project.github, '_blank');
            }}
            className="flex items-center px-3 py-2 text-sm rounded-md bg-green-200/20 hover:bg-green-200/30 transition-colors text-white"
            aria-label={`View ${project.title} GitHub repository`}
          >
            <Github size={16} className="mr-2" />
            GitHub
          </button>
          
          {project.demo && (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(project.demo, '_blank');
              }}
              className="flex items-center px-3 py-2 text-sm rounded-md bg-green-200/20 hover:bg-green-200/30 transition-colors text-white"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={16} className="mr-2" />
              Demo
            </button>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
