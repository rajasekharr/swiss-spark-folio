
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const awards = [
    {
      title: 'Excellence in UX Design',
      organization: 'Tech Mahindra',
      year: '2023',
      description: 'Recognition for outstanding user experience design across multiple product lines.'
    },
    {
      title: 'Innovation in Design Systems',
      organization: 'Design Leadership Awards',
      year: '2023',
      description: 'Awarded for pioneering scalable design system implementation.'
    },
    {
      title: 'Best Digital Transformation',
      organization: 'Minacs Digital Excellence',
      year: '2022',
      description: 'Leading successful digital transformation initiatives with measurable impact.'
    },
    {
      title: 'UX Research Excellence',
      organization: 'User Research Society',
      year: '2022',
      description: 'Outstanding contribution to user research methodologies and insights.'
    },
    {
      title: 'Team Leadership Award',
      organization: 'Tech Mahindra Leadership Circle',
      year: '2021',
      description: 'Exceptional leadership in building and mentoring high-performing design teams.'
    },
    {
      title: 'Accessibility Champion',
      organization: 'Inclusive Design Institute',
      year: '2021',
      description: 'Advancing accessibility standards in digital product design.'
    }
  ];

  const skills = [
    'User Experience Design',
    'Design Systems',
    'User Research',
    'Information Architecture',
    'Interaction Design',
    'Accessibility Design',
    'Design Leadership',
    'Product Strategy',
    'Usability Testing',
    'Design Thinking',
    'Cross-functional Collaboration',
    'Mentoring & Team Building'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light swiss-heading mb-8">
            About
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A passionate advocate for human-centered design with over a decade of experience 
            leading teams and crafting digital experiences that matter.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light swiss-heading mb-8">Design Philosophy</h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  As a Senior Designer and UX Manager, I believe that exceptional design emerges 
                  from the intersection of deep user empathy, strategic thinking, and meticulous 
                  craftsmanship. My approach is rooted in Swiss design principles—clarity, 
                  functionality, and purposeful simplicity.
                </p>
                
                <p>
                  Throughout my career at organizations like Tech Mahindra and Minacs, I've led 
                  cross-functional teams in delivering digital experiences that not only meet 
                  business objectives but fundamentally improve people's lives. I'm particularly 
                  passionate about accessibility, design systems, and creating inclusive experiences 
                  that work for everyone.
                </p>
                
                <p>
                  My leadership philosophy centers on empowering designers to do their best work 
                  while fostering a culture of continuous learning, experimentation, and 
                  human-centered innovation. I believe that great design happens when diverse 
                  perspectives collaborate toward a shared vision.
                </p>
                
                <p>
                  When I'm not designing or mentoring teams, you'll find me exploring the latest 
                  developments in design technology, contributing to the design community through 
                  speaking and writing, or seeking inspiration in art, architecture, and nature.
                </p>
              </div>
            </div>
            
            <div className="lg:order-first">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
                alt="Designer at work"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light swiss-heading mb-12 text-center">
            Core Competencies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-background p-4 rounded-lg text-center font-medium transition-transform duration-200 hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light swiss-heading mb-12 text-center">
            Recognition & Awards
          </h2>
          
          <div className="space-y-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="border-l-2 border-muted pl-6 py-4 hover:border-foreground transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-medium swiss-heading">
                    {award.title}
                  </h3>
                  <span className="swiss-mono text-sm text-muted-foreground">
                    {award.year}
                  </span>
                </div>
                
                <div className="text-muted-foreground mb-2">
                  {award.organization}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-light swiss-heading mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're looking to transform your digital presence, build a design team, 
            or explore new possibilities in user experience, I'd love to hear from you.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg hover:bg-muted transition-colors duration-200"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
