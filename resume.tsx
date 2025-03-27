import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReactMarkdown from 'react-markdown';

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
        'Python, Golang, Typescript, React, React Native, Android, Java, Kotlin',
      responsibilities: `
- Defined and implemented core workflows for edge deployment of ML models to fleet.
- Prototyped new products and features for Samsara's fleet management platform.
- Developed React Native framework for publishing multiple apps from monorepo.
`,
    },
    {
      title: 'Senior Software Engineer',
      company: 'Airware',
      location: 'San Francisco, CA',
      duration: '2014 - 2018',
      techStack:
        'Javascript (React, Redux, Webpack, Leaflet, THREE.js, React Native), Python, Swift, PHP, Golang',
      responsibilities: `
Developed core technologies for a drone analytics platform, converting drone imagery into survey-grade data for insurance and mining industries.
- Built cloud workflows for survey processing and analysis with a GIS-focused UI using React, Redux, and Leaflet.
- Developed a mobile app for drone operators using React Native and iOS, enabling geofence editing and on-device photogrammetry.
- Created a desktop app for configuring autopilot hardware for fixed-wing and multirotor drones.
- Led feature development, large-scale refactors, product mergers / acquisitions; contributed to hiring, planning, and mentoring engineers.
`,
    },
    {
      title: 'Software Engineer',
      company: 'MUJIN Inc. (株式会社MUJIN)',
      location: 'Bunkyō-ku, Tokyo, Japan',
      duration: '2012 - 2014',
      techStack: 'Python (django, OpenRAVE), Javascript (Backbone / WebGL)',
      responsibilities: `
Early employee at a Japanese industrial robotics startup, developing a web interface for an arm / workcell planning system used by Canon, Honda, and other integrators.
- Built customer-facing UI with a WebGL viewer and real-time state streamer for a binpicking system.
- Collaborated with an international team while living in Japan for two years.`,
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

const Resume: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="bg-gray-800 text-white py-8 px-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold font-serif mb-2 font-['Merriweather']">
              {resumeData.name}
            </h1>
            <p className="text-xl font-semibold font-['Merriweather']">
              {resumeData.title} | {resumeData.location}
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <a
                href={resumeData.website}
                className="text-gray-300 hover:text-white mr-4"
              >
                Website
              </a>
              <a
                href={resumeData.pdfLink}
                className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
              >
                Download PDF
              </a>
            </div>
          </div>
          <ul className="flex items-center space-x-4">
            {resumeData.socialNetworks.map((social, index) => (
              <li key={index} className="cursor-pointer">
                <a
                  href={social.address}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FontAwesomeIcon className="" icon={social.icon} size="2x" />
                </a>
              </li>
            ))}
          </ul>
        </header>

        <section className="p-6">
          <h2 className="text-2xl font-bold font-serif border-b pb-2 mb-4 font-['Merriweather']">
            Experience
          </h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold font-['Merriweather']">
                {job.company} - {job.title}
              </h3>
              <p className="text-sm text-gray-500">
                {job.location} | {job.duration}
              </p>
              {job.techStack && (
                <p className="text-xs text-gray-600 mt-1">
                  Tech Stack: {job.techStack}
                </p>
              )}
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="text-gray-700">{children}</p>
                  ),
                  li: ({ children }) => (
                    <li className="list-disc list-inside">{children}</li>
                  ),
                }}
              >
                {job.responsibilities}
              </ReactMarkdown>
            </div>
          ))}
        </section>

        <section className="p-6">
          <h2 className="text-2xl font-bold font-serif border-b pb-2 mb-4 font-['Merriweather']">
            Education
          </h2>
          <p className="text-gray-700">
            <strong>{resumeData.education.degree}</strong>,{' '}
            {resumeData.education.institution} ({resumeData.education.years})
          </p>
          {resumeData.education.projects?.map((project, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold font-['Merriweather']">
                {project.name}
              </h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Project Link
                </a>
              )}
            </div>
          ))}
        </section>

        <section className="p-6">
          <h2 className="text-2xl font-bold font-serif border-b pb-2 mb-4 font-['Merriweather']">
            Patents
          </h2>
          {resumeData.patents.map((patent, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold font-['Merriweather']">
                {patent.title}
              </h3>
              <p className="text-gray-700 mb-2">{patent.number}</p>
              {patent.link && (
                <a
                  href={patent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Patent Link
                </a>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Resume;
