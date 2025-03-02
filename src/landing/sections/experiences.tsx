import { useState } from 'react';
import { useActiveSection } from '../context/use-active-section';

type JobExperience = {
  position: string;
  company: string;
  link: string;
  period: string;
  details: string[];
};

const experiences: Record<string, JobExperience> = {
  'Front End Developer @ Team Brilliant': {
    position: 'Front End Developer',
    company: 'Team Brilliant',
    link: 'https://www.linkedin.com/company/teambrilliant',
    period: 'Dec 2022 - Jan 2025 · 2 yrs 2 mos',
    details: [
      "Develop and maintenance of the company's software products, utilizing Web3 React and Next.js to build cutting-edge web applications.",
      'Leveraged Web3 technologies to integrate blockchain functionality and create decentralized applications (dApps) with enhanced security and transparency.',
      'Collaborated closely with cross-functional teams, including product managers, designers, and other developers, to translate project requirements into functional and intuitive web solutions.',
      'Utilized Next.js framework to develop server-side rendered (SSR) applications, optimizing performance and search engine visibility.',
      'Expertise in working with CMS like Strapi, handling content creation, and managing dynamic data to provide seamless user experiences across platforms.',
      'Occasionally involved in back-end development using Express.js to create RESTful APIs, enabling smooth communication between front-end and back-end systems.',
      'Actively participated in Agile development methodologies, attending daily standups, sprint planning, and retrospectives to ensure efficient project execution.',
    ],
  },
  'Full Stack Developer @ Spinom': {
    position: 'Full Stack Developer',
    company: 'Spinom',
    link: 'https://www.linkedin.com/company/spinom',
    period: 'Jan 2021 - Aug 2022 · 1 yr 8 mos',
    details: [
      'Led development of multiple web applications using React and Node.js',
      'Implemented responsive designs and optimized application performance',
      'Worked closely with clients to gather requirements and deliver solutions',
    ],
  },
  'Back End Developer @ Lupi AI': {
    position: 'Back End Developer',
    company: 'Lupi AI',
    link: 'https://www.linkedin.com/company/lupiai',
    period: 'Jun 2019 - Jan 2021 · 1 yr 8 mos',
    details: [
      'Developed and maintained e-commerce platform features',
      'Implemented responsive UI components using React',
      'Collaborated with backend team to integrate APIs',
    ],
  },
};

export function Experiences() {
  const [activeJob, setActiveJob] = useState<string>(
    Object.keys(experiences)[0],
  );
  useActiveSection('Experiences');

  const selectedJob = experiences[activeJob];

  return (
    <section
      id="Experiences"
      className="min-h-screen w-full text-white flex flex-col items-center px-5"
    >
      <div className="relative">
        <h2 className="text-6xl font-bold mb-2">Experiences</h2>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[105%] border-dashed-large" />
      </div>

      <div className="w-full max-w-6xl mt-20 flex gap-8">
        <div className="w-60">
          <div className="flex flex-col border-l border-cyan">
            {Object.entries(experiences).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveJob(key)}
                className={`block w-full text-left pl-4 py-3 transition-colors hover:text-cyan ${
                  activeJob === key
                    ? 'text-cyan border-l-2 border-cyan -ml-[1px]'
                    : 'text-white/60'
                }`}
              >
                {value.position}
                <br />@ {value.company}
              </button>
            ))}
          </div>
        </div>

        {selectedJob && (
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-cyan mb-1">
              <span className="text-white">{selectedJob.position}</span> @{' '}
              <a 
                href={selectedJob.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="relative after:absolute after:bg-cyan after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {selectedJob.company}
              </a>
            </h3>
            <p className="text-white/60 mb-6">{selectedJob.period}</p>
            <ul className="space-y-4">
              {selectedJob.details.map((detail, index) => (
                <li key={index} className="flex gap-3 text-white/80">
                  <span className="text-cyan">▹</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
