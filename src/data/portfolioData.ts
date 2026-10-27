import {
  PersonalInfo,
  Project,
  SkillCategory,
  ServiceItem,
  WorkStep,
  AchievementItem
} from '../types/portfolio';

// FireSmart project proof assets
import fireSmartCert from '../assets/images/FireSmart1.jpg';
import fireSmartAward from '../assets/images/FireSmart2.jpg';
import fireSmartDemo1 from '../assets/images/FireSmart3.mp4';
import fireSmartDemo2 from '../assets/images/FireSmart4.mp4';
import fireSmartDemo3 from '../assets/images/FireSmart5.mp4';
import fireSmartSchematic from '../assets/images/project_firesmart_iot_1793122427775.jpg';

export const personalInfo: PersonalInfo = {
  name: 'Jaspher Arota',
  title: 'Web Developer | Full-Stack Developer | UI/UX Enthusiast',
  headline: 'Building functional, modern, and user-friendly digital systems & IoT solutions.',
  intro:
    'I specialize in engineering full-stack web applications, intuitive user interfaces, and hardware-integrated IoT prototypes. Passionate about turning complex real-world requirements into clean, resilient, and performant digital products.',
  aboutParagraphs: [
    'I am a full-stack web developer and IoT prototyping enthusiast dedicated to building practical, reliable digital solutions. My work bridges intuitive front-end interfaces with robust backend logic and embedded hardware systems.',
    'Whether developing multi-role management dashboards, real-time IoT monitoring alerts, or responsive modern client portals, I focus on pragmatic software architecture, clean code standards, and seamless user experiences.',
    'I continuously experiment with modern web frameworks, sensor-driven microcontroller integrations (ESP32/IoT), and data systems. I am open to freelance contracts, client web solutions, and collaborative software projects.'
  ],
  location: 'Philippines (Available for Remote Work Globally)',
  availability: 'Available for Freelance & Contract Projects',
  avatarUrl: '/src/assets/images/jaspher_hero_avatar_1793122427057.jpg',
  socials: {
    email: 'jaspheraruta@gmail.com',
    facebook: 'https://www.facebook.com/jaspher.aruta',
    github: 'https://github.com/jaspherarota',
    linkedin: 'https://linkedin.com/in/jaspher-arota'
  }
};

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Developing high-performance, mobile-first, and responsive web interfaces.',
    skills: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript (ES6+)',
      'HTML5 & Modern CSS',
      'Responsive Web Design',
      'Vite & Build Tooling'
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Architecting RESTful endpoints, data handling routines, and server logic.',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Server-Side Logic',
      'Authentication Flows',
      'JSON Data Pipelines'
    ]
  },
  {
    id: 'database',
    title: 'Database Management',
    description: 'Data schema modeling, persistence layer design, and query optimization.',
    skills: [
      'MySQL',
      'PostgreSQL',
      'Firebase Firestore',
      'Relational Schema Design',
      'CRUD Operations'
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX and Design',
    description: 'Translating product concepts into user journeys, wireframes, and dark-mode designs.',
    skills: [
      'Figma & UI Wireframing',
      'User Journey Mapping',
      'Glassmorphism & Dark Themes',
      'Component Design Systems',
      'Accessibility Standards'
    ]
  },
  {
    id: 'tools',
    title: 'Tools and Deployment',
    description: 'Modern developer workflow, version control, and production hosting.',
    skills: [
      'Git & GitHub',
      'Vercel Deployment',
      'npm / Package Management',
      'VS Code Environment',
      'Browser DevTools'
    ]
  },
  {
    id: 'iot',
    title: 'IoT and Embedded Systems',
    description: 'Interfacing microcontrollers with physical sensors, actuators, and alert systems.',
    skills: [
      'ESP32 Microcontroller',
      'C / C++ Embedded Basics',
      'Ultrasonic & Flame Sensors',
      'OLED & LCD Displays',
      'Hardware Prototyping',
      'Telemetry Data Transmission'
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'fire-smart',
    title: 'FIRE-SMART',
    subtitle: 'IoT-Based Fire Detection & Emergency Alert System',
    category: 'IoT & Embedded',
    status: 'Completed Prototype',
    description:
      'A hardware-integrated fire detection platform utilizing flame and environmental sensors with instant emergency notification triggers.',
    longDescription:
      'FIRE-SMART is an IoT fire prevention and early alert solution designed to minimize response times during emergency events. It combines physical sensor modules (IR flame sensors, smoke and thermal detectors) with microcontroller logic that continuously probes environmental metrics. When threshold anomalies are detected, the system triggers local audiovisual buzzer alarms and broadcasts instant emergency status notifications to a centralized monitoring interface.',
    problemSolved:
      'Early fire detection is critical in residential and commercial settings where delays in alerting cause catastrophic loss. FIRE-SMART eliminates detection lag through continuous sensor probing and automatic alert dispatch.',
    keyFeatures: [
      'Multi-sensor continuous monitoring (flame, thermal spikes, smoke)',
      'Sub-second threshold alert triggering with local buzzer alarm',
      'Telemetry transmission to central web/mobile dashboard',
      'Fail-safe armed status indicator and power state monitoring'
    ],
    techStack: [
      'ESP32',
      'IoT Sensors (Flame & Smoke)',
      'C/C++',
      'Web Dashboard',
      'REST Protocol'
    ],
    image: '/src/assets/images/project_firesmart_iot_1793122427775.jpg',
    githubUrl: 'https://github.com/jaspherarota/fire-smart',
    isFeatured: true,
    role: 'Lead System Developer & Hardware Prototyper',
    timeline: 'Completed Prototype',
    architectureHighlights: [
      'Modular sensor node architecture for multi-room deployment',
      'Low-latency event dispatch upon analog threshold trigger',
      'Decoupled web client for real-time sensor status visualization'
    ],
    proofMedia: [
      {
        id: 'proof-cert',
        title: 'Official Certificate of Participation',
        type: 'image',
        url: fireSmartCert,
        category: 'Award & Certificate',
        badge: 'ICT EXPO 2026',
        filename: 'FireSmart1.jpg',
        fileSize: '3.0 MB',
        caption: 'Official Certificate of Participation awarded to Jaspher S. Arota for active participation and project presentation at the ICT EXPO: Capstone Project Showcase (Valencia Goes Digital event, June 10-11, 2026, Robinsons Valencia).'
      },
      {
        id: 'proof-award',
        title: '2nd Place Plaque of Appreciation & Medal',
        type: 'image',
        url: fireSmartAward,
        category: 'Award & Certificate',
        badge: '2nd Place Capstone Award',
        filename: 'FireSmart2.jpg',
        fileSize: '234 KB',
        caption: '2nd Place Capstone Showcase Plaque of Appreciation & Medal presented by IBACM-College of Information Technology during the National ICT Month celebration.'
      },
      {
        id: 'proof-demo-1',
        title: 'Live Hardware Demo - Sensor Testing & Alarm Trigger',
        type: 'video',
        url: fireSmartDemo1,
        category: 'Live Demonstration',
        badge: 'Prototype Video 1',
        filename: 'FireSmart3.mp4',
        fileSize: '7.4 MB',
        caption: 'Live breadboard hardware recording testing IR flame sensor sensitivity, threshold activation, and instant buzzer audible alarm.'
      },
      {
        id: 'proof-demo-2',
        title: 'Continuous Probing & Alert Feedback Walkthrough',
        type: 'video',
        url: fireSmartDemo2,
        category: 'Live Demonstration',
        badge: 'Prototype Video 2',
        filename: 'FireSmart4.mp4',
        fileSize: '18.9 MB',
        caption: 'Microcontroller loop demonstration showing ESP32 continuous environmental monitoring, status indicators, and alarm clearing.'
      },
      {
        id: 'proof-demo-3',
        title: 'Full Prototype Circuit & Operational Walkthrough',
        type: 'video',
        url: fireSmartDemo3,
        category: 'Live Demonstration',
        badge: 'Prototype Video 3',
        filename: 'FireSmart5.mp4',
        fileSize: '48.3 MB',
        caption: 'Complete physical system demonstration illustrating component integration, wiring, power distribution, and fail-safe operation.'
      },
      {
        id: 'proof-schematic',
        title: 'System Schematics & Dashboard Integration',
        type: 'image',
        url: fireSmartSchematic,
        category: 'Hardware Setup',
        badge: 'System Architecture',
        filename: 'project_firesmart_iot_1793122427775.jpg',
        fileSize: '763 KB',
        caption: 'IoT sensor node architecture, pinout schematic, and real-time client monitoring dashboard connection concept.'
      }
    ]
  },
  {
    id: 'nasa-space-apps',
    title: 'NASA Space Apps Project',
    subtitle: 'Earth Observation & Weather Visualization Dashboard',
    category: 'Full-Stack',
    status: 'Concept',
    description:
      'Interactive satellite data visualization dashboard presenting Earth observation metrics, atmospheric layers, and weather trends.',
    longDescription:
      'Engineered for the NASA International Space Apps Challenge, this Earth observation portal transforms complex satellite telemetry into intuitive, visual layers. Users can inspect atmospheric moisture gradients, precipitation zones, and global sea surface temperature variations through an interactive dark-mode planetary dashboard.',
    problemSolved:
      'Raw satellite datasets are inaccessible to non-specialists. This project synthesizes multifaceted atmospheric and weather feeds into responsive, exploratory visual dashboards.',
    keyFeatures: [
      'Interactive geospatial and topographic weather map overlays',
      'Time-series telemetry visualization for atmospheric variables',
      'Satellite tracking status monitors and sensor health metrics',
      'Responsive dark-mode UI with ice-blue data visualization accents'
    ],
    techStack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Data Visualization',
      'NASA Open APIs'
    ],
    image: '/src/assets/images/project_nasa_spaceapps_1793122428807.jpg',
    githubUrl: 'https://github.com/jaspherarota/nasa-space-apps-dashboard',
    isFeatured: true,
    role: 'Frontend Developer & UI/UX Designer',
    timeline: 'Hackathon Submission Concept',
    architectureHighlights: [
      'Client-side geospatial layer rendering with optimized frame rates',
      'Normalized JSON data ingestion from Earth observation archives',
      'Accessible tabular data readouts paired with visual graphs'
    ]
  },
  {
    id: 'hotel-management-system',
    title: 'Hotel Management System',
    subtitle: 'Full-Stack Reservation, Rooms & Billing Solution',
    category: 'Full-Stack',
    status: 'In Progress',
    description:
      'Comprehensive administrative platform managing guest bookings, room status workflows, billing generation, and housekeeping tasks.',
    longDescription:
      'A structured web application engineered to streamline hospitality workflows. It unifies the front-desk reservation desk, room occupancy calendar, guest records, housekeeping assignments, and automated invoice calculation into a single, cohesive administrative dashboard.',
    problemSolved:
      'Independent hotels often struggle with fragmented booking spreadsheets and miscommunicated room availability. This system provides a unified operational command center.',
    keyFeatures: [
      'Visual room occupancy grid and multi-day reservation calendar',
      'Automated invoice generation and payment status tracking',
      'Housekeeping status board (Clean, Occupied, Maintenance)',
      'Guest profiles with past reservation history and contact records'
    ],
    techStack: [
      'React',
      'Node.js',
      'Express',
      'MySQL / PostgreSQL',
      'Tailwind CSS'
    ],
    image: '/src/assets/images/project_hotel_mgmt_1793122429303.jpg',
    githubUrl: 'https://github.com/jaspherarota/hotel-management-system',
    isFeatured: true,
    role: 'Full-Stack Developer',
    timeline: 'Active In-Progress Development',
    architectureHighlights: [
      'Relational database schema enforcing booking conflict prevention',
      'Role-based view access for front desk staff vs managers',
      'Instant financial summary aggregation'
    ]
  },
  {
    id: 'dorm-utility-monitoring',
    title: 'Smart Dormitory Utility Monitoring',
    subtitle: 'Automated Electricity & Water Tracking Concept',
    category: 'Systems & Concepts',
    status: 'Concept',
    description:
      'System design for IoT sub-metering of electricity and water consumption with automated tenant billing calculations.',
    longDescription:
      'A smart utility metering concept designed for dormitories, boarding houses, and multi-tenant rental properties. The architecture pairs digital sub-meter pulse counters with an automated calculation engine that computes monthly tenant balances based on actual consumption, eliminating manual meter reading errors.',
    problemSolved:
      'Manual sub-meter recording in student housing causes disputes, billing delays, and unnoticed utility leaks. This automated concept delivers transparency for both landlords and tenants.',
    keyFeatures: [
      'Per-room sub-meter data capture concept for water and power',
      'Tiered tariff rate calculation algorithm for billing statements',
      'Tenant self-service view to monitor daily utility consumption',
      'Abnormal consumption spike detection to alert on leaks'
    ],
    techStack: [
      'IoT Concept',
      'System Architecture',
      'React Dashboard',
      'Database Modeling'
    ],
    image: '/src/assets/images/project_firesmart_iot_1793122427775.jpg',
    githubUrl: 'https://github.com/jaspherarota/smart-dorm-utility-concept',
    isFeatured: false,
    role: 'System Architect & Concept Designer',
    timeline: 'Concept & System Design',
    architectureHighlights: [
      'Calculated tenant ledger data model with audit trails',
      'Predictive budget estimation based on historical averages'
    ]
  },
  {
    id: 'esp32-obstacle-detection',
    title: 'ESP32 Obstacle Detection System',
    subtitle: 'Embedded Hardware Proximity Sensing & Display',
    category: 'IoT & Embedded',
    status: 'Hardware Prototype',
    description:
      'Hardware-based obstacle detection module featuring ultrasonic distance sensing, OLED telemetry, and audible proximity alerts.',
    longDescription:
      'A physical embedded hardware project built with the ESP32 microcontroller and ultrasonic time-of-flight transducers. The system measures real-time distance to oncoming obstacles with high sampling frequency, visualizes exact distance measurements on an I2C OLED display, and sounds graduated frequency buzzer warnings as targets approach danger zones.',
    problemSolved:
      'Provides hands-on proof of embedded sensor timing, I2C bus communication, hardware interrupt handling, and immediate physical feedback loops.',
    keyFeatures: [
      'High-frequency ultrasonic echo timing distance measurement',
      'Real-time distance numerical readout on 0.96-inch OLED screen',
      'Variable-pitch audio alarm corresponding to proximity zones',
      'Compact breadboard and prototype enclosure assembly'
    ],
    techStack: [
      'ESP32 MCU',
      'HC-SR04 Ultrasonic Sensor',
      'I2C OLED Display',
      'Buzzer Actuator',
      'C++'
    ],
    image: '/src/assets/images/project_firesmart_iot_1793122427775.jpg',
    githubUrl: 'https://github.com/jaspherarota/esp32-obstacle-detection',
    isFeatured: false,
    role: 'Embedded Hardware Developer',
    timeline: 'Functional Hardware Prototype',
    architectureHighlights: [
      'Microsecond precision pulse duration calculation in firmware',
      'Non-blocking display refresh cycle',
      'Threshold debounce logic to prevent false buzzer alarms'
    ]
  },
  {
    id: 'freelancer-marketplace',
    title: 'Freelancer Marketplace Platform',
    subtitle: 'Job Posting, Proposal Submission & Management',
    category: 'Full-Stack',
    status: 'In Progress',
    description:
      'Web application platform connecting clients seeking custom development with freelancers submitting bids and managing project milestones.',
    longDescription:
      'A multi-sided marketplace platform tailored for freelance developers and clients. It features authenticated client job listings with budget criteria, proposal bid submissions with portfolios, and a progress tracker for accepted project agreements.',
    problemSolved:
      'Streamlines the proposal, agreement, and deliverable exchange between independent creators and hiring clients through a clear, transparent interface.',
    keyFeatures: [
      'Client job creation portal with budget, tech stack, and scope fields',
      'Freelancer proposal submission with bid pricing and delivery timeframe',
      'Project status tracking (Open, Bidding, In Progress, Delivered)',
      'Responsive dark-theme layout with searchable project catalogs'
    ],
    techStack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js / Express',
      'Database Schema'
    ],
    image: '/src/assets/images/project_hotel_mgmt_1793122429303.jpg',
    githubUrl: 'https://github.com/jaspherarota/freelancer-marketplace',
    isFeatured: false,
    role: 'Full-Stack Developer',
    timeline: 'Active In-Progress Development',
    architectureHighlights: [
      'Multi-role state modeling (client vs freelancer accounts)',
      'Indexed search filtering by technology and budget tier',
      'Modular component design ready for payment gateway hooks'
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'responsive-web',
    title: 'Responsive Website Development',
    description:
      'Modern, lightning-fast websites engineered to look sharp and function effortlessly across smartphones, tablets, laptops, and ultra-wide desktop screens.',
    deliverables: [
      'Mobile-first responsive layout',
      'Cross-browser compatibility testing',
      'Clean semantic HTML & modern CSS',
      'Performance & fast loading optimization'
    ],
    icon: 'Layout'
  },
  {
    id: 'business-web',
    title: 'Business Website Development',
    description:
      'Professional web presences for local businesses, services, and independent brands looking to showcase credibility and convert visitors into clients.',
    deliverables: [
      'Structured brand landing pages',
      'Contact inquiry forms with direct email alerts',
      'Clear service showcases & portfolio catalogs',
      'SEO metadata setup & social sharing preview cards'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'webapp-dev',
    title: 'Web Application Development',
    description:
      'Dynamic single-page applications (SPAs) built with React and TypeScript, incorporating state management, filtering, and structured data handling.',
    deliverables: [
      'Component-driven architecture in React + TypeScript',
      'State management & responsive client flows',
      'REST API client integration',
      'Clean error boundaries & loading states'
    ],
    icon: 'Code2'
  },
  {
    id: 'db-integration',
    title: 'Database Integration',
    description:
      'Reliable data storage, schema design, and persistence setup connecting your application frontend with relational SQL or Firebase databases.',
    deliverables: [
      'Relational schema design (MySQL / PostgreSQL)',
      'Firebase Firestore database configuration',
      'CRUD endpoint integration and query efficiency',
      'Safe environment variable management'
    ],
    icon: 'Database'
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard Development',
    description:
      'Clean internal operational panels and management consoles to oversee business records, reservations, inventory, and analytics.',
    deliverables: [
      'Intuitive data tables with sorting and filtering',
      'Key metric summaries and status badges',
      'Modal detail views and record editing forms',
      'Dark mode UI with ice-blue accent aesthetics'
    ],
    icon: 'Gauge'
  },
  {
    id: 'ui-implementation',
    title: 'UI Implementation & Prototyping',
    description:
      'Precise translation of Figma wireframes or design concepts into pixel-accurate, accessible React code styled with Tailwind CSS.',
    deliverables: [
      'Figma to clean React/Tailwind conversion',
      'Strict typographic hierarchy and color discipline',
      'Micro-interactions and hover states',
      'Accessible keyboard navigation & focus states'
    ],
    icon: 'Palette'
  },
  {
    id: 'iot-prototyping',
    title: 'IoT System Prototyping',
    description:
      'Hands-on microcontroller programming and hardware-to-cloud integration using ESP32, environmental sensors, and telemetry dashboards.',
    deliverables: [
      'ESP32 firmware coding (C/C++)',
      'Sensor interfacing (ultrasonic, flame, temperature)',
      'Audible buzzer & OLED display status alerts',
      'IoT proof-of-concept testing and demonstration'
    ],
    icon: 'Cpu'
  }
];

export const workProcessData: WorkStep[] = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    description:
      'We start by discussing your exact goals, target users, technical constraints, and specific deliverables to ensure complete alignment before writing any code.',
    deliverables: [
      'Goal identification & scope definition',
      'Feature list & technical requirements breakdown',
      'Project timeline & milestone agreement'
    ]
  },
  {
    number: '02',
    title: 'Planning & UI Design',
    description:
      'I structure the system architecture, plan data models or component trees, and establish the visual theme and wireframes.',
    deliverables: [
      'UI/UX wireframes & layout mockups',
      'Database schema & API endpoint blueprints',
      'Design system & responsive breakpoints'
    ]
  },
  {
    number: '03',
    title: 'Development & Integration',
    description:
      'Writing clean, maintainable TypeScript/React code and connecting backend services, database operations, or hardware modules.',
    deliverables: [
      'Modular, typed component development',
      'State management & API endpoint connection',
      'Regular milestone updates & staging previews'
    ]
  },
  {
    number: '04',
    title: 'Testing & Refinement',
    description:
      'Thorough verification across different devices, screen resolutions, and edge cases to ensure optimal performance, accessibility, and zero bugs.',
    deliverables: [
      'Cross-device mobile & desktop testing',
      'Form validation, error handling, and performance checks',
      'Client feedback iteration & polish'
    ]
  },
  {
    number: '05',
    title: 'Deployment & Handover',
    description:
      'Launching the application to production hosting (such as Vercel) with custom domain support and providing clear documentation for future updates.',
    deliverables: [
      'Production deployment on Vercel',
      'Clean Git repository transfer & documentation',
      'Post-launch check & transition guide'
    ]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-nasa',
    title: 'NASA International Space Apps Challenge',
    category: 'Hackathon',
    organization: 'NASA Space Apps',
    date: 'Hackathon Milestone',
    description:
      'Collaborated on creating an Earth observation dashboard visualizing open satellite telemetry and atmospheric data within an intense global hackathon setting.'
  },
  {
    id: 'ach-firesmart',
    title: '2nd Place - ICT EXPO Capstone Project Showcase (FIRE-SMART)',
    category: 'IoT Prototype',
    organization: 'IBACM-College of Information Technology & DICT / LGU Valencia',
    date: 'June 2026',
    description:
      'Awarded 2nd Place and Plaque of Appreciation for presenting the FIRE-SMART IoT fire detection and alert system at the ICT EXPO (Valencia Goes Digital, Robinsons Valencia).'
  },
  {
    id: 'ach-hotel-sys',
    title: 'Hotel Management System Architecture',
    category: 'Academic & Systems',
    organization: 'Web Development Project',
    date: 'System Implementation',
    description:
      'Engineered a multi-module administrative system coordinating guest bookings, billing statements, and room occupancy grids with relational database integrity.'
  },
  {
    id: 'ach-placeholder-edu',
    title: '[Editable Placeholder: Academic Degree / University]',
    category: 'Custom Placeholder',
    organization: '[Add your University / Institution name in portfolioData.ts]',
    date: '[Year / Expected Graduation]',
    description:
      'This slot is reserved for your formal degree (e.g., BS Information Technology / Computer Science). Simply edit `src/data/portfolioData.ts` to update.',
    isPlaceholder: true
  },
  {
    id: 'ach-placeholder-cert',
    title: '[Editable Placeholder: Technical Certification or Workshop]',
    category: 'Custom Placeholder',
    organization: '[Add Certifying Organization / Academy]',
    date: '[Certification Date]',
    description:
      'Keep this card ready for relevant certifications (e.g., FreeCodeCamp, Coursera, AWS, or Cisco IoT workshops). Update anytime in the data file.',
    isPlaceholder: true
  }
];
