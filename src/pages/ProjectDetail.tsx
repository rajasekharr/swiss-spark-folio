
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getProjectById, projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : null;

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light swiss-heading mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-muted-foreground hover:text-foreground">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="swiss-mono text-sm text-muted-foreground">
                {project.category}
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="swiss-mono text-sm text-muted-foreground">
                {project.year}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light swiss-heading mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.brief}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[600px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Techniques */}
            <div>
              <h3 className="text-lg font-medium swiss-heading mb-4">Techniques</h3>
              <ul className="space-y-2">
                {project.techniques.map((technique, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {technique}
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-lg font-medium swiss-heading mb-4">Responsibilities</h3>
              <ul className="space-y-2">
                {project.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-lg font-medium swiss-heading mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="swiss-mono text-xs bg-muted text-muted-foreground px-3 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-2xl font-light swiss-heading mb-6">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {project.description}
            </p>

            <h3 className="text-xl font-light swiss-heading mb-4">Challenge</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {project.challenge}
            </p>

            <h3 className="text-xl font-light swiss-heading mb-4">Solution</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {project.solution}
            </p>

            <h3 className="text-xl font-light swiss-heading mb-4">Outcome</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.outcome}
            </p>
          </div>

          {/* Additional Images */}
          {project.images && project.images.length > 1 && (
            <div className="mb-16">
              <h2 className="text-2xl font-light swiss-heading mb-8">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {project.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <ArrowLeft size={20} />
                <div>
                  <div className="swiss-mono text-xs mb-1">Previous</div>
                  <div className="font-medium">{prevProject.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-200 text-right"
              >
                <div>
                  <div className="swiss-mono text-xs mb-1">Next</div>
                  <div className="font-medium">{nextProject.title}</div>
                </div>
                <ArrowRight size={20} />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
