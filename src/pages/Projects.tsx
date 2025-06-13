
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, getAllCategories } from '@/data/projects';
import FloatingMenu from '../components/FloatingMenu';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...getAllCategories()];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="internal-page bg-background">
      <FloatingMenu />
      
      {/* Header */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-light swiss-heading mb-8">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            A comprehensive collection of design projects spanning multiple industries, 
            platforms, and user experience challenges.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-foreground text-background'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.category}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-3 group-hover:text-muted-foreground transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.brief}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.techniques.slice(0, 3).map((technique, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded font-mono"
                        >
                          {technique}
                        </span>
                      ))}
                      {project.techniques.length > 3 && (
                        <span className="text-xs text-muted-foreground px-2 py-1 font-mono">
                          +{project.techniques.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No projects found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
