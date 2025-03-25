import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Define TypeScript types for resume data (same as before)
interface SocialNetwork {
  address: string;
  icon: any; // Change the type to any for now, or import specific icons
}

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  techStack?: string;
  responsibilities: string[];
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
}

const resumeData: ResumeData = {
  name: 'Lucas Doyle',
  title: 'Senior Software Engineer',
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
      title: 'Senior Engineer II',
      company: 'Samsara',
      location: 'San Francisco, CA',
      duration: '2018 - Present',
      techStack:
        'Python, Golang, Typescript, React, React Native, Android, Java, Kotlin',
      responsibilities: [
        'Developed RN framework for publishing multiple apps from monorepo.',
        'Worked internationally, including two years in Japan.',
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Airware',
      location: 'San Francisco, CA',
      duration: '2014 - 2018',
      techStack:
        'Javascript (React, Redux, Webpack, Leaflet, THREE.js, React Native), Python, Swift, PHP, Golang',
      responsibilities: [
        'Developed drone analytics platform for insurance and mining industries.',
        'Built mapping UI and enterprise-focused features like authentication and permissions.',
        'Bootstrapped first mobile app for drone operations with React Native.',
        'Led engineering initiatives, managed teams, and executed product integrations.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Uber',
      location: 'San Francisco, CA',
      duration: '2012 - 2014',
      techStack: 'Python, Django, PostgreSQL, JavaScript, React',
      responsibilities: [
        'Developed and maintained backend services for ride-hailing platform.',
        'Implemented real-time tracking and dispatching features.',
        'Collaborated with cross-functional teams to improve user experience.',
      ],
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
};

const Resume: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <header className="bg-gray-800 text-white py-8 px-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold font-serif mb-2">
              {resumeData.name}
            </h1>
            <p className="text-xl font-semibold">
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
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              </li>
            ))}
          </ul>
        </header>

        <section className="p-6">
          <h2 className="text-2xl font-bold font-serif border-b pb-2 mb-4">
            Experience
          </h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold">
                {job.title} - {job.company}
              </h3>
              <p className="text-sm text-gray-500">
                {job.location} | {job.duration}
              </p>
              {job.techStack && (
                <p className="text-xs text-gray-600 mt-1">
                  Tech Stack: {job.techStack}
                </p>
              )}
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="mb-1">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="p-6">
          <h2 className="text-2xl font-bold font-serif border-b pb-2 mb-4">
            Education
          </h2>
          <p className="text-gray-700">
            <strong>{resumeData.education.degree}</strong>,{' '}
            {resumeData.education.institution} ({resumeData.education.years})
          </p>
          {resumeData.education.projects?.map((project, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold">{project.name}</h3>
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
      </div>
    </div>
  );
};

export default Resume;
