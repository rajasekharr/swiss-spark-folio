
export interface Project {
  id: string;
  title: string;
  brief: string;
  image: string;
  category: string;
  year: string;
  techniques: string[];
  responsibilities: string[];
  tools: string[];
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'figma-plugin-ecosystem',
    title: 'Figma Plugin Ecosystem',
    brief: 'Comprehensive design system and plugin architecture for enhanced workflow efficiency.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
    category: 'Product Design',
    year: '2024',
    techniques: ['Design Systems', 'Plugin Architecture', 'User Research', 'Prototyping'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'User Research Lead', 'Design System Architect'],
    tools: ['Figma', 'JavaScript', 'React', 'Design Tokens'],
    description: 'Led the development of a comprehensive plugin ecosystem that streamlined design workflows across multiple teams.',
    challenge: 'Design teams were struggling with inconsistent workflows and fragmented tools.',
    solution: 'Created a unified plugin ecosystem with standardized components and automated workflows.',
    outcome: '40% reduction in design-to-development handoff time and improved design consistency.',
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'mobile-banking-redesign',
    title: 'Mobile Banking Redesign',
    brief: 'Complete overhaul of mobile banking experience focusing on accessibility and user trust.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    category: 'UX Design',
    year: '2023',
    techniques: ['User Journey Mapping', 'Accessibility Design', 'Security UX', 'A/B Testing'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'Accessibility Lead'],
    tools: ['Sketch', 'InVision', 'Principle', 'UserTesting'],
    description: 'Redesigned the complete mobile banking experience with focus on security and accessibility.',
    challenge: 'Users reported low trust and difficulty navigating financial features.',
    solution: 'Implemented progressive disclosure and enhanced security feedback systems.',
    outcome: '60% increase in user satisfaction and 25% reduction in support calls.',
    images: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'ai-dashboard-interface',
    title: 'AI Dashboard Interface',
    brief: 'Intelligent dashboard design for complex data visualization and machine learning insights.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    category: 'Data Visualization',
    year: '2023',
    techniques: ['Data Visualization', 'Information Architecture', 'Interactive Design'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'Data Design Lead'],
    tools: ['Figma', 'D3.js', 'Observable', 'Tableau'],
    description: 'Created an intuitive interface for complex AI and machine learning data visualization.',
    challenge: 'Users needed to understand complex AI outputs without technical expertise.',
    solution: 'Designed progressive disclosure with contextual explanations and smart defaults.',
    outcome: '50% faster data insight discovery and improved user confidence in AI recommendations.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'e-commerce-personalization',
    title: 'E-commerce Personalization',
    brief: 'Advanced personalization engine with seamless user experience integration.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    category: 'E-commerce',
    year: '2022',
    techniques: ['Personalization', 'Conversion Optimization', 'User Behavior Analysis'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'Conversion Specialist'],
    tools: ['Adobe XD', 'Hotjar', 'Google Analytics', 'Optimizely'],
    description: 'Implemented advanced personalization features that adapted to user behavior and preferences.',
    challenge: 'Low conversion rates and high cart abandonment across different user segments.',
    solution: 'Created dynamic personalization system with behavioral triggers and smart recommendations.',
    outcome: '35% increase in conversion rate and 20% reduction in cart abandonment.',
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'healthcare-patient-portal',
    title: 'Healthcare Patient Portal',
    brief: 'Comprehensive patient portal focusing on accessibility and health data management.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    category: 'Healthcare',
    year: '2022',
    techniques: ['Healthcare UX', 'Data Privacy', 'Accessibility', 'Information Design'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'Healthcare UX Specialist'],
    tools: ['Figma', 'Axure', 'UsabilityHub', 'NVDA'],
    description: 'Designed a comprehensive patient portal that prioritizes privacy, accessibility, and health data clarity.',
    challenge: 'Patients struggled to understand and manage their health information digitally.',
    solution: 'Created clear information hierarchy with progressive disclosure and accessibility-first design.',
    outcome: '70% improvement in patient engagement and 99% accessibility compliance.',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'saas-onboarding-flow',
    title: 'SaaS Onboarding Flow',
    brief: 'Streamlined onboarding experience reducing time-to-value for B2B software users.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
    category: 'SaaS',
    year: '2021',
    techniques: ['Onboarding Design', 'User Activation', 'Progressive Onboarding'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'Onboarding Specialist'],
    tools: ['Figma', 'Mixpanel', 'Fullstory', 'Intercom'],
    description: 'Redesigned the complete onboarding flow to reduce friction and improve user activation.',
    challenge: 'High drop-off rates during onboarding and low feature adoption.',
    solution: 'Implemented progressive onboarding with contextual guidance and achievement mechanics.',
    outcome: '45% increase in user activation and 30% improvement in feature adoption.',
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'enterprise-design-system',
    title: 'Enterprise Design System',
    brief: 'Scalable design system implementation across multiple product teams and platforms.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    category: 'Design Systems',
    year: '2021',
    techniques: ['Design Systems', 'Component Libraries', 'Design Tokens', 'Documentation'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'Design System Lead'],
    tools: ['Figma', 'Storybook', 'GitHub', 'Notion'],
    description: 'Built and implemented a comprehensive design system serving 15+ product teams.',
    challenge: 'Inconsistent design patterns across products and slow development cycles.',
    solution: 'Created modular design system with comprehensive documentation and automation.',
    outcome: '60% faster design-to-development workflow and improved brand consistency.',
    images: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'iot-device-dashboard',
    title: 'IoT Device Dashboard',
    brief: 'Real-time monitoring dashboard for complex IoT device networks and data streams.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    category: 'IoT',
    year: '2020',
    techniques: ['Real-time Data', 'Dashboard Design', 'Information Architecture'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'IoT UX Specialist'],
    tools: ['Sketch', 'Principle', 'D3.js', 'MQTT'],
    description: 'Designed real-time dashboard for monitoring and controlling IoT device networks.',
    challenge: 'Users needed to monitor hundreds of devices with complex data relationships.',
    solution: 'Created hierarchical dashboard with smart filtering and alert systems.',
    outcome: '40% faster issue detection and resolution for device management teams.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'fintech-trading-platform',
    title: 'FinTech Trading Platform',
    brief: 'Professional trading interface balancing complexity with usability for financial professionals.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    category: 'FinTech',
    year: '2020',
    techniques: ['Trading UX', 'Real-time Data', 'Risk Management UX'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'FinTech UX Lead'],
    tools: ['Figma', 'TradingView', 'React', 'WebSockets'],
    description: 'Created professional trading platform balancing information density with usability.',
    challenge: 'Traders needed quick access to complex data without overwhelming the interface.',
    solution: 'Designed customizable workspaces with smart data prioritization and risk indicators.',
    outcome: '25% faster trade execution and 15% reduction in trading errors.',
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'social-learning-platform',
    title: 'Social Learning Platform',
    brief: 'Collaborative learning environment combining social features with structured education.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    category: 'EdTech',
    year: '2019',
    techniques: ['Social UX', 'Learning Experience', 'Gamification'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'EdTech Specialist'],
    tools: ['Sketch', 'InVision', 'Miro', 'Amplitude'],
    description: 'Built social learning platform that combined structured education with peer collaboration.',
    challenge: 'Students lacked engagement and motivation in traditional online learning.',
    solution: 'Integrated social features with achievement systems and peer learning mechanics.',
    outcome: '80% increase in course completion and 65% improvement in student engagement.',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'smart-city-dashboard',
    title: 'Smart City Dashboard',
    brief: 'Municipal dashboard for city officials to monitor and manage urban infrastructure data.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
    category: 'GovTech',
    year: '2019',
    techniques: ['Data Visualization', 'Geographic Information Systems', 'Public Sector UX'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'GovTech UX Lead'],
    tools: ['Adobe XD', 'MapBox', 'Tableau', 'ArcGIS'],
    description: 'Designed comprehensive dashboard for city officials to monitor urban infrastructure and services.',
    challenge: 'City officials struggled to make data-driven decisions with fragmented information systems.',
    solution: 'Created unified dashboard with real-time data integration and predictive analytics.',
    outcome: '50% faster decision-making process and improved public service delivery.',
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'ar-shopping-experience',
    title: 'AR Shopping Experience',
    brief: 'Augmented reality shopping interface for virtual product try-on and visualization.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    category: 'AR/VR',
    year: '2018',
    techniques: ['AR/VR Design', 'Spatial UX', '3D Interface Design'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'AR/VR UX Specialist'],
    tools: ['Unity', 'ARCore', 'Blender', 'Principle'],
    description: 'Pioneered AR shopping experience allowing customers to visualize products in their space.',
    challenge: 'Customers hesitated to purchase without physically experiencing products.',
    solution: 'Created AR visualization system with accurate scale and lighting for realistic previews.',
    outcome: '30% reduction in returns and 45% increase in purchase confidence.',
    images: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(projects.map(project => project.category))];
};
