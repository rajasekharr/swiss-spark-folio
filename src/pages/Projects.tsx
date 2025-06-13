
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, getAllCategories } from '@/data/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...getAllCategories()];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light swiss-heading mb-6">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive collection of design projects spanning multiple industries, 
              platforms, and user experience challenges.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
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
                className="group perspective-card"
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
                      <span className="swiss-mono text-xs text-muted-foreground">
                        {project.category}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="swiss-mono text-xs text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-medium swiss-heading mb-3 group-hover:text-muted-foreground transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.brief}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.techniques.slice(0, 3).map((technique, techIndex) => (
                        <span
                          key={techIndex}
                          className="swiss-mono text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                        >
                          {technique}
                        </span>
                      ))}
                      {project.techniques.length > 3 && (
                        <span className="swiss-mono text-xs text-muted-foreground px-2 py-1">
                          +{project.techniques.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
