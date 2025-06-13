import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import FloatingMenu from '../components/FloatingMenu';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="internal-page bg-background">
      <FloatingMenu />
      
      {/* Header */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-light swiss-heading mb-8">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to start a conversation? Whether you're looking to collaborate, 
            need design consultation, or just want to say hello—I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-light swiss-heading mb-8">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-foreground focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-foreground focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company <span className="text-muted-foreground text-xs">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-foreground focus:border-transparent transition-all duration-200"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-foreground focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell me about your project, challenge, or idea..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background py-4 px-6 rounded-lg hover:bg-muted-foreground transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="text-3xl font-light swiss-heading mb-8">
                Let's Connect
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-3">Response Time</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I typically respond to messages within 24 hours. For urgent 
                    matters, please mention it in your message.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Collaboration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always interested in meaningful projects that challenge 
                    conventional thinking and create positive impact. Whether 
                    you're a startup, agency, or enterprise, let's explore how 
                    we can work together.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Speaking & Mentoring</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Available for design leadership talks, UX workshops, and 
                    mentoring sessions. I'm passionate about sharing knowledge 
                    and helping the next generation of designers grow.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Social</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      Twitter
                    </a>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label="Dribbble"
                    >
                      Dribbble
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light swiss-heading mb-12 text-center">
            What Colleagues Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Exceptional design leadership with a rare combination of strategic thinking and hands-on execution. A true advocate for user-centered design.",
                author: "Sarah Chen",
                title: "Product Director",
                company: "Tech Mahindra"
              },
              {
                quote: "Transformed our design culture and processes. The design system they built became the foundation for all our digital products.",
                author: "Michael Rodriguez",
                title: "Engineering Manager",
                company: "Minacs"
              },
              {
                quote: "Incredible mentorship and guidance. Their approach to accessibility and inclusive design has influenced our entire organization.",
                author: "Amanda Foster",
                title: "Senior Designer",
                company: "Design Team"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-lg">
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="swiss-mono text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
