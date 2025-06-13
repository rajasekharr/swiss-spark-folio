
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

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

  // Handle scroll percentage calculation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background">
      {/* Intro Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-thin mb-8 tracking-tight animate-fade-in">
            About
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A passionate advocate for human-centered design with over a decade of experience 
            leading teams and crafting digital experiences that matter.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-thin mb-8 tracking-tight">Design Philosophy</h2>
              
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
                  business objectives but fundamentally improve people's lives.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
                alt="Designer at work"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-thin mb-12 text-center tracking-tight animate-fade-in">
            Core Competencies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-muted/30 p-4 rounded-lg text-center font-medium transition-transform duration-200 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-thin mb-12 text-center tracking-tight animate-fade-in">
            Recognition & Awards
          </h2>
          
          <div className="space-y-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="border-l-2 border-muted pl-6 py-4 hover:border-foreground transition-colors duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-medium">
                    {award.title}
                  </h3>
                  <span className="text-sm text-muted-foreground font-mono">
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
      <section className="min-h-screen flex items-center justify-center bg-foreground text-background px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-thin mb-6 tracking-tight animate-fade-in">
            Let's Work Together
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Whether you're looking to transform your digital presence, build a design team, 
            or explore new possibilities in user experience, I'd love to hear from you.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg hover:bg-muted transition-colors duration-200 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Scroll Percentage Indicator */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-foreground/20 z-20">
        <div 
          className="h-full bg-foreground transition-all duration-100 ease-out"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default About;
