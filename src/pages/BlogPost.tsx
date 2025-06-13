
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  // Mock blog post data
  const post = {
    id: id || '',
    title: 'Building Design Systems at Scale',
    content: `
      <p>Design systems have become the backbone of modern digital product development. As organizations grow and their product portfolios expand, the need for consistent, scalable design solutions becomes paramount.</p>

      <p>Over the past three years at Tech Mahindra, I've had the privilege of leading the development and implementation of design systems across 15+ product teams. This journey has taught me valuable lessons about the technical, organizational, and cultural challenges of scaling design systems.</p>

      <h2>The Foundation: Design Tokens</h2>

      <p>The most critical decision we made early on was investing heavily in design tokens. These atomic units of design became the single source of truth for our visual language, ensuring consistency across platforms and teams.</p>

      <p>We implemented a token hierarchy that included:</p>
      <ul>
        <li>Global tokens (brand colors, typography scales)</li>
        <li>Semantic tokens (primary, secondary, error states)</li>
        <li>Component-specific tokens (button variants, input states)</li>
      </ul>

      <h2>Governance and Adoption</h2>

      <p>Technical excellence alone wasn't enough. We learned that successful design system adoption requires:</p>

      <h3>Clear Documentation</h3>
      <p>Every component needed comprehensive documentation including usage guidelines, accessibility considerations, and code examples. We created interactive documentation that allowed teams to experiment with components in real-time.</p>

      <h3>Regular Training and Support</h3>
      <p>We established office hours, created onboarding materials, and maintained active communication channels for support and feedback.</p>

      <h3>Metrics and Iteration</h3>
      <p>We tracked adoption metrics, component usage, and gathered regular feedback to inform our roadmap and prioritize improvements.</p>

      <h2>Challenges and Solutions</h2>

      <p>One of our biggest challenges was balancing consistency with flexibility. Teams needed to maintain brand coherence while having enough flexibility to solve unique user problems.</p>

      <p>Our solution was to create a system of constraints rather than rigid rules. We provided flexible components with clear boundaries, allowing teams to customize within defined parameters.</p>

      <h2>Results and Impact</h2>

      <p>After 18 months of implementation:</p>
      <ul>
        <li>60% reduction in design-to-development handoff time</li>
        <li>40% decrease in design debt across products</li>
        <li>Improved accessibility compliance from 70% to 95%</li>
        <li>Higher designer satisfaction and productivity</li>
      </ul>

      <h2>Key Takeaways</h2>

      <p>Building design systems at scale is as much about people and process as it is about technology. Success requires executive support, clear governance, and a culture that values consistency and collaboration.</p>

      <p>The most important lesson? Start small, iterate frequently, and always keep the end user in mind. A design system is only as good as the experiences it enables.</p>
    `,
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80',
    category: 'Design Systems'
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="swiss-mono text-sm text-muted-foreground">
                {post.category}
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="swiss-mono text-sm text-muted-foreground">
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light swiss-heading mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div 
            className="prose prose-lg max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </div>
      </section>

      {/* Related Posts CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light swiss-heading mb-4">
            Enjoyed this article?
          </h2>
          <p className="text-muted-foreground mb-6">
            Explore more insights on design, leadership, and building better digital experiences.
          </p>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg hover:bg-muted-foreground transition-colors duration-200"
          >
            Read More Articles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
