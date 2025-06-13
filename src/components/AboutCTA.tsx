
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (
    <section className="bg-foreground text-background px-6 py-24">
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
  );
};

export default AboutCTA;
