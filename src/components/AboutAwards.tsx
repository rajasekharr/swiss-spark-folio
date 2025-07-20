
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
    title: 'Best Employee Award',
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

const AboutAwards = () => {
  return (
    <section className="px-6 py-24">
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
  );
};

export default AboutAwards;
