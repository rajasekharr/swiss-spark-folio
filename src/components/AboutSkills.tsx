
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

const AboutSkills = () => {
  return (
    <section className="px-6 py-24">
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
  );
};

export default AboutSkills;
