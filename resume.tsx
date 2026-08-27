import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReactMarkdown from 'react-markdown';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const isPDF = window.location.href.includes('pdf');
console.log(`isPDF: ${isPDF}`);

interface SocialNetwork {
  address: string;
  icon: any;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  techStack?: string;
  responsibilities: string;
}

interface Project {
  name: string;
  description: string;
  link?: string;
}

interface Education {
  degree: string;
  activities: string;
  institution: string;
  location: string;
  years: string;
  projects?: Project[];
}

interface Patent {
  title: string;
  number: string;
  link?: string;
}

interface ResumeData {
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

const RESUME_DATA: ResumeData = {
  name: 'Lucas Doyle',
  title: 'Senior Machine Learning Engineer',
  location: 'San Francisco, CA',
  email: 'lucas.p.doyle@gmail.com',
  website: 'http://stonelinks.org/luke',
  pdfLink: 'http://stonelinks.github.io/resume/lucas_doyle_resume.pdf',
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
      techStack: 'Python, TypeScript (React), Go, C# (.NET), Claude agents',
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
        link: 'http://stonelinks.org/projects/boeing',
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

/**
 * SectionHeader component for consistent section headers
 */
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-3xl font-bold font-serif border-b border-primary pb-1 mb-3">
    {title}
  </h2>
);

/**
 * Section component for consistent section layout
 */
const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className={`mt-6 px-8 mb-6`}>
    {title && <SectionHeader title={title} />}
    {children}
  </section>
);

/**
 * MarkdownContent component for rendering markdown with consistent styles
 */
const MarkdownContent: React.FC<{ content: string }> = ({ content }) => (
  <div className="text-gray-700">
    <ReactMarkdown
      components={{
        p: ({ children }) => <p className="mb-2">{children}</p>,
        ul: ({ children }) => <ul className="mb-2">{children}</ul>,
        li: ({ children }) => <li className="list-disc ml-6">{children}</li>,
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

const Resume: React.FC = () => {
  const websiteButton = (
    <a
      href={RESUME_DATA.website}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white hover:bg-background text-primary font-bold py-2 px-4 rounded"
    >
      {!isPDF ? 'Website' : RESUME_DATA.website?.replace('http://', '')}
    </a>
  );

  const pdfButton = !isPDF && (
    <a
      href={RESUME_DATA.pdfLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white hover:bg-background text-primary font-bold py-2 px-4 rounded"
    >
      PDF
    </a>
  );

  const emailButton = (
    <a
      href={`mailto:${RESUME_DATA.email}`}
      className="hover:bg-background text-white font-bold py-2 md:px-4 md:rounded md:border-2 md:border-white"
    >
      <div className="inline-block md:hidden">
        {!isPDF ? (
          <FontAwesomeIcon size="2x" icon={faEnvelope} />
        ) : (
          RESUME_DATA.email
        )}
      </div>
      <div className="hidden md:inline-block">{RESUME_DATA.email}</div>
    </a>
  );

  return (
    <div className={`min-h-screen ${!isPDF ? 'bg-background' : ''}`}>
      <div className={`${!isPDF ? 'md:py-6' : ''}`}>
        {/* sweet jesus this is a mess */}
        <div
          className={`mx-auto bg-white overflow-hidden ${!isPDF ? 'max-w-3xl md:rounded-lg md:shadow-lg' : ''}`}
        >
          <header className="bg-gradient-to-r from-primary to-secondary text-white py-8 px-8 mb-3 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-serif mb-1">{RESUME_DATA.name}</h1>
              <p className="hidden md:block text-xl font-sans">
                {RESUME_DATA.title} | {RESUME_DATA.location}
              </p>
              <p className="block md:hidden text-xl font-sans">
                {RESUME_DATA.title.replace('Senior', 'Sr.')}
              </p>
              <p className="block md:hidden text-xl font-sans">
                {RESUME_DATA.location}
              </p>
              <div className="hidden md:block">
                <div className="mt-4 flex flex-row items-center">
                  <span className="space-x-4">
                    {emailButton}
                    {websiteButton}
                    {pdfButton}
                  </span>
                </div>
              </div>
            </div>
            <span className="flex items-center space-x-4 mt-4 md:mt-0">
              {RESUME_DATA.socialNetworks.map((social, index) => (
                <div key={`s-${index}`} className="inline-block">
                  <a
                    href={social.address}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="transition-transform transform hover:scale-110"
                      icon={social.icon}
                      size="2x"
                    />
                  </a>
                </div>
              ))}
              <div className="inline-block md:hidden" key="website">
                {emailButton}
              </div>
              <div className="inline-block md:hidden" key="website">
                {websiteButton}
              </div>
              <div className="inline-block md:hidden" key="pdf">
                {pdfButton}
              </div>
            </span>
          </header>

          <Section>
            <MarkdownContent content={RESUME_DATA.introduction} />
          </Section>

          <Section title="Experience">
            {RESUME_DATA.experience.map((job, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-bold font-serif">
                  {job.company} - {job.title}
                </h3>
                <p className="text-sm text-gray-700">
                  {job.location} | {job.duration}
                </p>
                {job.techStack && (
                  <p className="text-sm font-mono text-gray-400 pt-2 pb-2">
                    {job.techStack}
                  </p>
                )}
                <MarkdownContent content={job.responsibilities} />
              </div>
            ))}
          </Section>

          <Section title="Education">
            <h3 className="text-lg font-bold font-serif">
              {RESUME_DATA.education.institution}
            </h3>
            <p className="mb-1 text-gray-700">
              {RESUME_DATA.education.degree} | {RESUME_DATA.education.years}
            </p>
            <p className="mb-3 text-sm text-gray-700">
              {RESUME_DATA.education.activities}
            </p>
            {RESUME_DATA.education.projects?.map((project, index) => (
              <div key={index} className="mb-2">
                <b className="font-sans">{project.name}</b>
                <p className="text-gray-700 mb-2">
                  {project.description}{' '}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-sm hover:text-primary-dark"
                    >
                      (project link)
                    </a>
                  )}
                </p>
              </div>
            ))}
          </Section>

          <Section title="Patents">
            {RESUME_DATA.patents.map((patent, index) => (
              <div key={index} className="mb-2">
                <b className="inline-block text-lg font-sans">{patent.title}</b>
                <a
                  href={patent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-accent text-sm hover:text-primary-dark"
                >
                  ({patent.number})
                </a>
              </div>
            ))}
          </Section>

          <Section title="Miscellaneous">
            <MarkdownContent
              content={`
- Mechanical design / CAD / 3d printing
- Electronics / microcontrollers / remote control / robotics
- Homelab / VPN / LocalLlama / extensive self-hosting experience
- Occasional paid and pro-bono consulting
- Cat lover, marathon runner (BQ 2023), mixologist, climbing
                `}
            />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
