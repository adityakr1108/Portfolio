import { useState, useEffect } from 'react';
import ProjectCard, { ProjectType } from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.category.includes(activeFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  const categories = ['All', 'Data Science', 'Backend', 'Full Stack'];

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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">My Projects</h1>
          <p className="text-gray-300 mb-8 max-w-2xl">
            Explore a selection of my projects spanning data science, backend development, and full-stack applications.
            Each project represents my passion for solving real-world problems.
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`filter-btn ${
                  activeFilter === category 
                    ? 'filter-btn-active' 
                    : 'bg-dark-200 text-gray-300 hover:bg-primary/10'
                } animate-fade-in`}
                style={{ animationDelay: '150ms' }}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
