
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
    id: 'wearable-adoption-research',
    title: 'Wearable Adoption Research',
    brief: 'Investigated low adoption of elder-care wearables through behavior-driven design.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    category: 'Healthcare',
    year: '2024',
    techniques: ['User Research', 'Ethnographic Studies', 'Heuristic Evaluation', 'Accessibility Design'],
    responsibilities: ['UX Researcher', 'Lead Designer', 'User Research Lead'],
    tools: ['Figma', 'UserTesting', 'NVDA', 'Survey Tools'],
    description: 'Investigated low engagement in elder-care wearable tech through ethnographic research and heuristic audits. Identified issues in accessibility, onboarding, and complexity. Recommended voice-guided onboarding, caregiver dashboards, and simplified flows. Post-redesign testing confirmed increased sustained usage and satisfaction.',
    challenge: 'Elder-care wearables showed consistently low adoption rates despite clear health benefits.',
    solution: 'Conducted ethnographic research and accessibility audits to identify barriers, then designed voice-guided onboarding and caregiver dashboards.',
    outcome: 'Post-redesign testing confirmed increased sustained usage and satisfaction among elderly users.',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'non-wearable-fall-detection',
    title: 'Non-Wearable Fall Detection',
    brief: 'Explored passive sensor solutions like Wi-Fi and thermal for fall detection.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    category: 'Healthcare',
    year: '2024',
    techniques: ['IoT Design', 'Dashboard Design', 'Sensor UX', 'Alert Systems'],
    responsibilities: ['UX Manager', 'IoT UX Specialist', 'Product Strategist'],
    tools: ['Figma', 'Principle', 'IoT Sensors', 'Data Analytics'],
    description: 'Explored ambient sensor tech such as Wi-Fi, radar, and thermal for fall detection without wearable reliance. Designed dashboards for caregivers with alert tuning and summaries. Wi-Fi emerged as the optimal tech. Solution reduced false alerts and improved user trust.',
    challenge: 'Traditional wearable fall detection had low compliance rates and frequent false alarms.',
    solution: 'Designed ambient sensor solutions using Wi-Fi, radar, and thermal technology with intelligent alert systems.',
    outcome: 'Wi-Fi emerged as optimal solution, reducing false alerts and improving user trust significantly.',
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'voice-of-customer-analytics',
    title: 'Voice of Customer Analytics',
    brief: 'Transformed raw customer feedback into an actionable UX roadmap using NLP.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    category: 'Data Analytics',
    year: '2023',
    techniques: ['NLP Analysis', 'Data Visualization', 'Workshop Facilitation', 'Usability Testing'],
    responsibilities: ['UX Manager', 'Data UX Lead', 'Research Lead'],
    tools: ['Python', 'Tableau', 'Miro', 'Figma'],
    description: 'Processed multi-channel feedback using NLP and clustering to extract key UX pain points. Identified 5 focus modules. Used workshops to align product teams, built prototypes, and validated redesigns through usability testing. Resulted in phased rollout plan based on user feedback.',
    challenge: 'Raw customer feedback across multiple channels was overwhelming and difficult to act upon.',
    solution: 'Implemented NLP processing and clustering to identify key pain points, then facilitated workshops to align teams.',
    outcome: 'Successfully identified 5 focus modules and created a phased rollout plan based on validated user feedback.',
    images: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'enterprise-portal-ux-audit',
    title: 'Enterprise Portal UX Audit',
    brief: 'Redesigned a legacy enterprise portal with personalized dashboards and improved navigation.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    category: 'Enterprise',
    year: '2023',
    techniques: ['UX Audit', 'Information Architecture', 'Dashboard Design', 'Enterprise UX'],
    responsibilities: ['UX Manager', 'Sr. Designer', 'Enterprise UX Lead'],
    tools: ['Figma', 'Miro', 'UserTesting', 'Analytics'],
    description: 'Mapped workflows, interviewed key personas, and benchmarked enterprise dashboards. Identified inefficiencies in search, roles, and entitlements. Proposed a modular UX redesign with contextual cards and search-first IA. Achieved higher task success and reduced friction.',
    challenge: 'Legacy enterprise portal had inefficient workflows and poor user experience for key personas.',
    solution: 'Conducted comprehensive workflow mapping and persona interviews, then redesigned with modular UX and search-first architecture.',
    outcome: 'Achieved significantly higher task success rates and reduced user friction across all workflows.',
    images: [
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'user-onboarding-redesign',
    title: 'User Onboarding Redesign',
    brief: 'Boosted onboarding conversion by streamlining multi-step user flows.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
    category: 'SaaS',
    year: '2023',
    techniques: ['Onboarding Design', 'A/B Testing', 'User Flow Optimization', 'Conversion Analytics'],
    responsibilities: ['UX Manager', 'Conversion Specialist', 'User Research Lead'],
    tools: ['Figma', 'Hotjar', 'Optimizely', 'Google Analytics'],
    description: 'Analyzed drop-offs and user rage-click data. Redesign focused on contextual help, smart defaults, and social login options. A/B tested prototypes and achieved a 60% increase in successful onboarding. Support tickets dropped significantly.',
    challenge: 'High drop-off rates during user onboarding with evidence of user frustration and rage-clicks.',
    solution: 'Redesigned with contextual help, smart defaults, and social login options, then A/B tested all changes.',
    outcome: '60% increase in successful onboarding completion and significant reduction in support tickets.',
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'access-management-dashboard',
    title: 'Access Management Dashboard',
    brief: 'Simplified complex entitlement workflows through role-based dashboard UX.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
    category: 'Enterprise',
    year: '2022',
    techniques: ['Dashboard Design', 'Role-Based UX', 'Tree Testing', 'Enterprise Workflows'],
    responsibilities: ['UX Manager', 'Enterprise UX Lead', 'Information Architect'],
    tools: ['Figma', 'OptimalSort', 'UserTesting', 'Miro'],
    description: 'UX review revealed overwhelming permissions layout. Introduced grouped roles, batch actions, and search filter logic. Tree testing confirmed ease of use. Stakeholders adopted the system with improved confidence and fewer support requests.',
    challenge: 'Complex permission management system was overwhelming users and generating support requests.',
    solution: 'Redesigned with grouped roles, batch actions, and improved search filter logic validated through tree testing.',
    outcome: 'Stakeholders gained confidence in the system and support requests decreased significantly.',
    images: [
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'ai-powered-assistant',
    title: 'AI-Powered Assistant for Call Agents',
    brief: 'Designed real-time suggestion engine using live call context and nudges.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    category: 'AI/ML',
    year: '2022',
    techniques: ['AI UX Design', 'Real-time Systems', 'Wizard-of-Oz Testing', 'Cognitive Load Design'],
    responsibilities: ['UX Manager', 'AI UX Specialist', 'User Research Lead'],
    tools: ['Figma', 'Principle', 'Voice Analytics', 'A/B Testing'],
    description: 'Built a contextual suggestion interface that listens to live calls and proposes next actions. Used Wizard-of-Oz studies and mapped mental models. Focused on minimal cognitive load and non-intrusive prompts. Reduced call handling time measurably.',
    challenge: 'Call agents needed real-time assistance without adding cognitive load during live conversations.',
    solution: 'Designed contextual AI assistant with non-intrusive prompts, validated through Wizard-of-Oz studies.',
    outcome: 'Measurably reduced call handling time while maintaining call quality and agent satisfaction.',
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'chatbot-ui-modernization',
    title: 'Chatbot UI Modernization',
    brief: 'Refreshed chatbot UX with improved readability, hierarchy, and natural interaction flows.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    category: 'Conversational UX',
    year: '2022',
    techniques: ['Conversational Design', 'Accessibility Audit', 'Visual Design', 'Interaction Flow'],
    responsibilities: ['UX Manager', 'Conversation Designer', 'Accessibility Lead'],
    tools: ['Figma', 'Voiceflow', 'Accessibility Tools', 'User Testing'],
    description: 'Evaluated a legacy chatbot for accessibility, tone, and continuity. Redesigned UI with collapsible conversation threads, persona avatars, and dynamic replies. Refreshed visual system increased chat completion and re-engagement rates.',
    challenge: 'Legacy chatbot had poor accessibility, unclear tone, and low completion rates.',
    solution: 'Complete UI redesign with collapsible threads, persona avatars, and improved visual hierarchy.',
    outcome: 'Increased chat completion and re-engagement rates significantly after visual system refresh.',
    images: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'multi-site-ordering',
    title: 'Multi-Site Ordering for Franchisees',
    brief: 'Built one-click ordering across locations with smart filtering and tracking.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    category: 'E-commerce',
    year: '2021',
    techniques: ['Multi-location UX', 'Dashboard Design', 'Order Management', 'Bulk Operations'],
    responsibilities: ['UX Manager', 'E-commerce UX Lead', 'Product Designer'],
    tools: ['Figma', 'UserTesting', 'Analytics', 'Prototyping'],
    description: 'Pain points in multi-location bulk ordering led to confusion and tracking errors. Designed a one-click dashboard with visual summaries, search filters, and order tracking widgets. Operational clarity improved dramatically.',
    challenge: 'Multi-location bulk ordering caused confusion and tracking errors for franchisees.',
    solution: 'Designed unified dashboard with visual summaries, smart filters, and comprehensive order tracking.',
    outcome: 'Operational clarity improved dramatically with reduced errors and faster order processing.',
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'device-setup-companion',
    title: 'Device Setup Companion (OPTG)',
    brief: 'Created guided assistant to simplify first-time hardware setup.',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80',
    category: 'Hardware UX',
    year: '2021',
    techniques: ['Setup Flows', 'Guided Assistance', 'Animation Design', 'Hardware UX'],
    responsibilities: ['UX Manager', 'Hardware UX Lead', 'Interaction Designer'],
    tools: ['Figma', 'After Effects', 'Principle', 'User Testing'],
    description: 'Analyzed onboarding pain for hardware setup. Introduced modular setup assistant, inline help, and animated guidance. Task completion times dropped significantly and first-time success rates increased post-deployment.',
    challenge: 'Hardware setup process was complex and led to high support call volumes.',
    solution: 'Created modular setup assistant with inline help and animated step-by-step guidance.',
    outcome: 'Task completion times dropped significantly with increased first-time success rates.',
    images: [
      'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'smart-setup-optimization',
    title: 'Smart Setup Optimization',
    brief: 'Reduced setup drop-offs by optimizing transfer flow and adding predictive UX elements.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    category: 'Hardware UX',
    year: '2020',
    techniques: ['Predictive UX', 'Recovery Flows', 'Progress Indicators', 'Smart Defaults'],
    responsibilities: ['UX Manager', 'Product Designer', 'User Research Lead'],
    tools: ['Figma', 'Hotjar', 'User Testing', 'Analytics'],
    description: 'Users often abandoned during device transfers. Improved recovery checkpoints, introduced predictive feedback, and allowed progress saving. User satisfaction scores and completion rates showed major uptick.',
    challenge: 'High abandonment rates during device transfer processes with poor recovery options.',
    solution: 'Added recovery checkpoints, predictive feedback, and progress saving capabilities.',
    outcome: 'Major improvement in user satisfaction scores and completion rates.',
    images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'universal-shopping-cart',
    title: 'Universal Shopping Cart',
    brief: 'Enabled persistent cross-device cart with real-time SKU logic and checkout syncing.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    category: 'E-commerce',
    year: '2020',
    techniques: ['Cross-device UX', 'Real-time Sync', 'SKU Management', 'Progressive Enhancement'],
    responsibilities: ['UX Manager', 'E-commerce Lead', 'Technical UX Designer'],
    tools: ['Figma', 'Real-time APIs', 'A/B Testing', 'Analytics'],
    description: 'Persistent cart and stock sync issues were frequent. Enabled real-time SKU substitutions, cross-device session continuity, and alert messaging. Checkout rates improved across all channels.',
    challenge: 'Cart persistence and stock synchronization issues across devices caused checkout abandonment.',
    solution: 'Implemented real-time SKU substitutions, cross-device continuity, and proactive alert messaging.',
    outcome: 'Checkout rates improved significantly across all channels and devices.',
    images: [
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
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
