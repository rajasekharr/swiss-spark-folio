
const AboutPhilosophy = () => {
  return (
    <section className="px-6 py-24">
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
  );
};

export default AboutPhilosophy;
