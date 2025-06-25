import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReactMarkdown from 'react-markdown';

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
  website: 'http://stonelinks.org/luke/',
  pdfLink: 'http://stonelinks.github.io/resume/lucas_doyle_resume.pdf',
  introduction: `Sounds cliché, but making code do something in the real world is what excites me. My superpowers are zero-to-one problem-solving, prototypes and last second demos that seem impossible. I've shipped at-scale across firmware, mobile, backend, frontend and ML infrastructure.`,
  socialNetworks: [
    { address: 'https://github.com/Stonelinks', icon: faGithub },
    { address: 'https://linkedin.com/in/stonelinks/', icon: faLinkedin },
  ],
  experience: [
    {
      title: 'Senior Machine Learning Engineer II',
      company: 'Samsara',
      location: 'San Francisco, CA',
      duration: '2018 - Present',
      techStack:
        'Python, Golang, Typescript (React, Redux, React Native), Android (Java, Kotlin)',
      responsibilities: `
**ML Infrastructure**

Led edge infrastructure / end-to-end implementation and deployment of video pipelines for Samsara's video-based safety products. These run on 2M+ of Samsara's AI dashcams, improving driver safety, engagement, and trust at scale.

- Developed and deployed pipelines (e.g. tailgating, rolling stop sign detection, lane departure), including device farm QA automation, shadow testing, and firmware infrastructure / feature development.
- Built internal tools for debugging, evaluation, and telemetry replay; enabled scalable model iteration and observability across firmware and cloud.
- Spearheaded offline evaluation pipelines for quantized models and integrated support for multimodal data (e.g. video, IMU, GPS, hardware emulation).
- Mentored interns and collaborated cross-functionally with product, firmware, science and data teams to streamline ML deployment and validation processes.

**Mobile**

- Led performance and infrastructure efforts for mobile applications with 500k+ DAU, driving major improvements in responsiveness, reliability, and developer velocity.
- Helped bootstrap new apps, products and the company’s first native Android systems and mobile device management (MDM) stack.
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
Developed core technologies for a drone platform to capture, upload and process large-scale imagery into survey-grade data for insurance and mining industries.

- Created a desktop app for flashing and configuring fixed-wing and multirotor drone avionics hardware.
- Built cloud workflows for large-scale survey processing and analysis with a GIS/geospatial-focused UI.
- Developed a mobile app for drone operators using React Native and iOS, enabling geofence editing and on-device photogrammetry processing.

- Led feature development, large-scale refactors, product mergers / acquisitions; contributed to hiring, planning, and mentoring engineers.
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
Fourth employee at a Japanese industrial robotics startup:

- Designed and implemented the web interface for the MUJIN Controller, a robotic arm workcell planning system used by Canon, Honda, and other system integrators.
- Developed customer-facing UIs featuring a real-time WebSocket-based WebGL viewer for a bin-picking system.
- Collaborated with an international team while living in Japan for two years.
`,
    },
  ],
  education: {
    degree: 'B.S. Computer and Systems Engineering',
    institution: 'Rensselaer Polytechnic Institute',
    location: 'Troy, NY',
    years: '2008 - 2012',
    projects: [
      {
        name: 'Boeing Robotic Wingbox',
        description: 'Simulated intra-wing robot for aircraft inspection.',
        link: 'http://stonelinks.org/projects/boeing',
      },
      {
        name: 'DaBuzz Market Sentiment Analyzer',
        description: 'Web crawler for financial news sentiment analysis.',
        link: 'http://stonelinks.org/projects/dabuzz',
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
      className="hover:bg-background text-white font-bold py-2 px-4 rounded border-2 border-white"
    >
      <div className="inline-block md:hidden ">
        {!isPDF ? 'Email' : RESUME_DATA.email}
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
                {RESUME_DATA.title}
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
            <p className="mb-3 text-gray-700">
              {RESUME_DATA.education.degree} | {RESUME_DATA.education.years}
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

          {!isPDF && (
            <Section title="Miscellany">
              <MarkdownContent
                content={`
- Mechanical design / CAD / 3d printing
- Electronics / microcontrollers / remote control / robotics
- Homelab / VPN / extensive self-hosting experience
- Cat lover, marathon runner (Boston 2023), climbing
- Occasional paid and pro-bono consulting
                `}
              />
            </Section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
