// Resume content, kept apart from the layout in resume.tsx: this is the file
// that actually changes.
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface SocialNetwork {
  address: string;
  icon: IconDefinition;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  techStack?: string;
  responsibilities: string;
}

export interface Project {
  name: string;
  description: string;
  link?: string;
}

export interface Education {
  degree: string;
  activities: string;
  institution: string;
  location: string;
  years: string;
  projects?: Project[];
}

export interface Patent {
  title: string;
  number: string;
  link?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  website?: string;
  pdfLink?: string;
  introduction: string;
  socialNetworks: SocialNetwork[];
  experience: Experience[];
  education: Education;
  patents: Patent[];
}

export const RESUME_DATA: ResumeData = {
  name: 'Lucas Doyle',
  title: 'Senior Machine Learning Engineer',
  location: 'San Francisco, CA',
  email: 'lucas.p.doyle@gmail.com',
  website: 'https://stonelinks.org/luke',
  pdfLink: 'https://stonelinks.github.io/resume/lucas_doyle_resume.pdf',
  introduction: `Sounds cliché, but making software do something in the real world is what excites me. I specialize in zero-to-one problem solving, building prototypes that evolve into scalable systems, and shipping robotics and ML products that operate reliably in the field. Experience spans robotic arms, drones, autonomous systems, and embedded ML at scale.`,
  socialNetworks: [
    { address: 'https://github.com/Stonelinks', icon: faGithub },
    { address: 'https://linkedin.com/in/stonelinks/', icon: faLinkedin },
  ],
  experience: [
    {
      title: 'Team Lead, AI Scientist',
      company: 'Medra',
      location: 'San Francisco, CA',
      duration: '2026 - Present',
      techStack: 'Python, TypeScript (React), Go, C# (.NET)',
      responsibilities: `
**Autonomous Robotic Laboratory & AI Agents**

- Lead the AI scientist pod at an AI-run robotic lab startup; DRI for the AI experimentalist on a major pharma customer engagement; co-designed the lab's three-tier software architecture.

- Built Medra OS: fully unattended bare-metal provisioning that scaled the lab from 10 to 100+ robotic workstations; absorbed an overnight pivot to consumer mini PCs, standing up 60 decks in 4 days.

- Integrated lab instruments (thermocycler, qPCR, plate-handoff rail electronics and firmware) in days each, then packaged the process as an agent skill teammates used to bring up more instruments unaided.

- Created a company-wide autonomous SWE agent used by 50+ engineers; most of its work is self-initiated (PR triage, fleet-alarm first response, bug-report dedup) and most automations on it were built by others.

- Own the monorepo developer environment (4 languages) and an internal apps hub hosting 11 apps in regular use across the company.
`,
    },
    {
      title: 'Senior Machine Learning Engineer II',
      company: 'Samsara',
      location: 'San Francisco, CA',
      duration: '2018 - 2026',
      techStack:
        'Python, Golang, Typescript (React, Redux, React Native), Android (Java, Kotlin)',
      responsibilities: `
**Edge ML Infrastructure**

- Led end-to-end design and deployment of embedded video ML pipelines powering Samsara’s AI dashcams (2M+ devices in the field).

- Shipped safety-critical features (e.g. tailgating, rolling stop, lane departure) running on resource-constrained hardware.

- Built QA device farms, shadow testing systems, and firmware infrastructure for rapid iteration of on-device ML.

- Spearheaded offline evaluation pipelines with multimodal inputs (video, IMU, GPS, hardware-in-the-loop simulation / emulation).

- Designed debugging and telemetry tools to improve observability across firmware and cloud systems.
`,
    },
    {
      title: 'Senior Software Engineer',
      company: 'Airware',
      location: 'San Francisco, CA',
      duration: '2014 - 2018',
      techStack:
        'Javascript (React, Redux, Leaflet, React Native), Python, Swift, PHP, Golang',
      responsibilities: `
**Drone Platforms & Aerial Robotics**

- Built core technologies for autonomous drone systems used in insurance and mining industries.
- Developed applications for configuring and flashing avionics on fixed-wing and multirotor drones.
- Built geospatial data processing pipelines and survey-grade mapping workflows for large-scale aerial datasets.
- Contributed to system-level integrations during M&A, driving engineering alignment across platforms.
`,
    },
    {
      title: 'Software Engineer',
      company: 'MUJIN Inc. (株式会社MUJIN)',
      location: 'Tokyo, Japan',
      duration: '2012 - 2014',
      techStack:
        'Python (django, OpenRAVE), Javascript (Backbone/Marionette, WebGL)',
      responsibilities: `
**Industrial Robotics**

- Early engineer at a Japanese robotics startup, developing the MUJIN Controller for robotic arm workcell planning and optimization.
- Built real-time customer UIs with WebGL and WebSockets for bin-picking and industrial automation systems.
- Collaborated with multinational robotics engineers and deployed solutions for clients including Canon and Honda.
`,
    },
  ],
  education: {
    degree: 'B.S. Computer and Systems Engineering',
    activities:
      'Rensselaer Center for Open Source, Red & White Alumni Organization',
    institution: 'Rensselaer Polytechnic Institute',
    location: 'Troy, NY',
    years: '2008 - 2012',
    projects: [
      {
        name: 'Boeing Robotic Wingbox',
        description:
          'Capstone - simulated intra-wing robot for aircraft inspection.',
        link: 'https://stonelinks.org/projects/boeing',
      },
    ],
  },
  patents: [
    {
      title: 'Lane departure monitoring',
      number: 'US12165393B1',
      link: 'https://patents.google.com/patent/US12165393B1/en?inventor=Lucas+Doyle&sort=new',
    },
    {
      title: 'Context based action menu',
      number: 'US12150007B1',
      link: 'https://patents.google.com/patent/US12150007B1/en?inventor=Lucas+Doyle&sort=new',
    },
    {
      title: 'Unmanned aerial vehicle privacy controls',
      number: 'US20220392353A1',
      link: 'https://patents.google.com/patent/US20220392353A1/en?inventor=Lucas+Doyle&sort=new',
    },
  ],
};
