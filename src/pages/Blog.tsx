
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 'design-systems-at-scale',
      title: 'Building Design Systems at Scale',
      excerpt: 'Lessons learned from implementing design systems across multiple product teams and the challenges of maintaining consistency.',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80',
      category: 'Design Systems'
    },
    {
      id: 'accessibility-first-design',
      title: 'Accessibility-First Design Approach',
      excerpt: 'Why starting with accessibility constraints leads to better design decisions and more inclusive user experiences.',
      date: '2023-12-20',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
      category: 'Accessibility'
    },
    {
      id: 'ux-research-methods',
      title: 'Modern UX Research Methods',
      excerpt: 'Exploring new approaches to user research in remote-first environments and how to maintain research quality.',
      date: '2023-11-30',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      category: 'Research'
    },
    {
      id: 'leading-design-teams',
      title: 'Leading Remote Design Teams',
      excerpt: 'Strategies for building culture, fostering creativity, and maintaining design quality in distributed teams.',
      date: '2023-10-25',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
      category: 'Leadership'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-light swiss-heading mb-8">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Thoughts on design, leadership, and building better digital experiences. 
            Sharing insights from over a decade in the field.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length > 0 && (
            <Link
              to={`/blog/${posts[0].id}`}
              className="block group mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-80 object-cover rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                </div>
                
                <div className="lg:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="swiss-mono text-sm text-muted-foreground">
                      Featured Post
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="swiss-mono text-sm text-muted-foreground">
                      {posts[0].category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-light swiss-heading mb-4 group-hover:text-muted-foreground transition-colors duration-200">
                    {posts[0].title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{new Date(posts[0].date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span>•</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light swiss-heading mb-12 text-center">
            Recent Posts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="swiss-mono text-xs text-muted-foreground">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="swiss-mono text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium swiss-heading mb-3 group-hover:text-muted-foreground transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="swiss-mono text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
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

export default Blog;
