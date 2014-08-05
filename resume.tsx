import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReactMarkdown from 'react-markdown';

const isPDF = window.location.href.includes('pdf');

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

const resumeData: ResumeData = {
  name: 'Lucas Doyle',
  title: 'Senior Machine Learning Engineer',
  location: 'San Francisco, CA',
  email: 'lucas.p.doyle@gmail.com',
  website: 'http://stonelinks.org/luke/',
  pdfLink: 'http://stonelinks.github.io/resume/lucas_doyle_resume.pdf',
  introduction: `My superpower is solving hard zero-to-one problems, delivering prototypes that seem impossible and giving last second live demos. I've shipped major features across firmware, mobile, cloud backend, frontend, and ML infrastructure, but I like it best when I can see the real, physical impact of my work (e.g. robotics, smart hardware, autonomous systems, etc.).`,
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

Led the infrastructure and product features behind Samsara's core safety product (e.g. tailgating, rolling stop sign detection, etc.) that run on the edge across 2M+ of Samsara's AI dashcams, improving the safety of our roads and drivers.

- Led end-to-end development and deployment of multiple edge pipelines, including device farm QA automation, shadow testing, and firmware infrastructure/feature development.
- Built internal tools for debugging, continuous evaluation, and telemetry replay; enabled scalable model iteration and observability across firmware and cloud.
- Spearheaded offline evaluation pipelines for quantized models and integrated support for multimodal data (video, IMU, GPS, hardware emulation, etc.).
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
- Developed customer-facing UIs featuring a real-time, WebSocket-based WebGL viewer for a bin-picking system.
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
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="py-4 px-8">
    <SectionHeader title={title} />
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
        p: ({ children }) => <p className="mt-2">{children}</p>,
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
      href={resumeData.website}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white hover:bg-background text-primary font-bold py-2 px-4 rounded"
    >
      {!isPDF ? 'Website' : resumeData.website?.replace('http://', '')}
    </a>
  );

  const pdfButton = !isPDF && (
    <a
      href={resumeData.pdfLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white hover:bg-background text-primary font-bold py-2 px-4 rounded"
    >
      PDF
    </a>
  );

  return (
    <div
      className={`min-h-screen md:py-${!isPDF ? '1' : '8'} ${!isPDF ? 'bg-background' : ''}`}
    >
      <div
        className={`max-w-3xl mx-auto bg-white ${!isPDF ? 'md:rounded-lg md:shadow-lg' : ''} overflow-hidden`}
      >
        <header className="bg-primary text-white py-6 px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-serif mb-1">{resumeData.name}</h1>
            <p className="hidden md:block text-xl font-sans">
              {resumeData.title} | {resumeData.location}
            </p>
            <p className="block md:hidden text-xl font-sans">
              {resumeData.title}
            </p>
            <p className="block md:hidden text-xl font-sans">
              {resumeData.location}
            </p>

            <div className="hidden md:block">
              <div className="mt-4 flex flex-row items-center">
                <span className="space-x-4">
                  {websiteButton}
                  {pdfButton}
                </span>
              </div>
            </div>
          </div>
          <span className="flex items-center space-x-4 mt-4 md:mt-0">
            {resumeData.socialNetworks.map((social, index) => (
              <div key={`s-${index}`} className="inline-block">
                <a
                  href={social.address}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
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
              {websiteButton}
            </div>
            <div className="inline-block md:hidden" key="pdf">
              {pdfButton}
            </div>
          </span>
        </header>

        <section className="py-4 px-8">
          <MarkdownContent content={resumeData.introduction} />
        </section>

        <Section title="Experience">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-bold font-serif">
                {job.company} - {job.title}
              </h3>
              <p className="text-sm text-gray-700">
                {job.location} | {job.duration}
              </p>
              {job.techStack && (
                <p className="text-sm font-mono text-gray-400 mt-1">
                  {job.techStack}
                </p>
              )}
              <MarkdownContent content={job.responsibilities} />
            </div>
          ))}
        </Section>

        <Section title="Education">
          <h3 className="text-lg font-bold font-serif">
            {resumeData.education.institution}
          </h3>
          <p className="mb-3 text-gray-700">
            {resumeData.education.degree} | {resumeData.education.years}
          </p>
          {resumeData.education.projects?.map((project, index) => (
            <div key={index} className="mb-6">
              <b className="font-sans">{project.name}</b>
              <p className="text-gray-700 mb-2">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark"
                >
                  Project Link
                </a>
              )}
            </div>
          ))}
        </Section>

        <Section title="Patents">
          {resumeData.patents.map((patent, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-bold font-serif">{patent.title}</h3>
              <a
                href={patent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark"
              >
                {patent.number}
              </a>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
};

export default Resume;
