
import AboutHero from '../components/AboutHero';
import AboutPhilosophy from '../components/AboutPhilosophy';
import AboutSkills from '../components/AboutSkills';
import AboutAwards from '../components/AboutAwards';
import AboutCTA from '../components/AboutCTA';
import FloatingMenu from '../components/FloatingMenu';
import ScrollProgress from '../components/ScrollProgress';

const About = () => {
  return (
    <div className="internal-page bg-background">
      <FloatingMenu />
      <AboutHero />
      <AboutPhilosophy />
      <AboutSkills />
      <AboutAwards />
      <AboutCTA />
      <ScrollProgress />
    </div>
  );
};

export default About;
