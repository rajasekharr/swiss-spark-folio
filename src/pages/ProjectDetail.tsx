import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useProject } from '@/hooks/useProject';
import { getProjectNavigation } from '@/lib/projects';
import { useQuery } from '@tanstack/react-query';
import FloatingMenu from '../components/FloatingMenu';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: project, isLoading: isProjectLoading } = useProject(id);
  
  // Get navigation data
  const { data: navigation } = useQuery({
    queryKey: ['project-navigation', id],
    queryFn: () => getProjectNavigation(id!),
    enabled: !!id,
  });

  if (isProjectLoading) {
    return (
      <div className="internal-page bg-background">
        <FloatingMenu />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-foreground mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading project...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="internal-page bg-background">
        <FloatingMenu />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light swiss-heading mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-muted-foreground hover:text-foreground">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const prevProject = navigation?.prevProject || null;
  const nextProject = navigation?.nextProject || null;

  return (
    <div className="internal-page bg-background">
      <FloatingMenu />
      
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

      {/* Case Study Content */}
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

          {/* Case Study Details */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-2xl font-light swiss-heading mb-6">Case Study</h2>
            <div className="text-muted-foreground leading-relaxed space-y-6">
              <p>{project.description}</p>
              
              <div>
                <h3 className="text-xl font-light swiss-heading mb-3 text-foreground">Challenge</h3>
                <p>{project.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-light swiss-heading mb-3 text-foreground">Solution</h3>
                <p>{project.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-light swiss-heading mb-3 text-foreground">Outcome</h3>
                <p>{project.outcome}</p>
              </div>
            </div>
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

          {/* Back to Projects Link */}
          <div className="text-center mb-16">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-full transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </div>
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
