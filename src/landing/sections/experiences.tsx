import { ReactElement, useState } from 'react';
import { useActiveSection } from '../context/use-active-section';

type JobExperience = {
  position: string;
  company: string;
  link: string;
  period: string;
  details: ReactElement;
};

const experiences: Record<string, JobExperience> = {
  'Front End Developer @ Team Brilliant': {
    position: 'Front End Developer',
    company: 'Team Brilliant',
    link: 'https://www.linkedin.com/company/teambrilliant',
    period: 'Dec 2022 - Jan 2025 · 2 yrs 2 mos',
    details: (
      <>
        <div className="mt-10 mb-2 text-base lg:text-lg font-bold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-cyan underline"
            href="https://www.linkedin.com/company/norwex/"
          >
            Norwex
          </a>{' '}
          · Contract
        </div>
        <ul className="space-y-4 list-triangle">
          <li>
            Worked on enhancing and modernizing web resources for Norwex - a
            global direct sales company
          </li>
          <li>
            Redesigned legacy Backbone.js platform into modern, scalable
            solution using TypeScript, React and Next.js
          </li>
          <li>
            Contributed to the development of a monorepo architecture, that
            improved project structure and developer experience
          </li>
        </ul>

        <div className="mt-10 mb-2 text-base lg:text-lg font-bold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-cyan underline"
            href="https://www.linkedin.com/company/howldotlink/"
          >
            Howl
          </a>{' '}
          · Contract
        </div>
        <ul className="space-y-4 list-triangle">
          <li>
            Developed a cross-platform React Native application for Howl, social
            commerce platform that connects brands with creators
          </li>
          <li>
            Implemented innovative solutions to optimize performance and enhance
            user engagement
          </li>
          <li>
            Collaborated with the business to meet product goals and ensure a
            seamless user experience
          </li>
        </ul>
      </>
    ),
  },
  'Full Stack Developer @ Spinom': {
    position: 'Full Stack Developer',
    company: 'Spinom',
    link: 'https://www.linkedin.com/company/spinom',
    period: 'Jan 2021 - Aug 2022 · 1 yr 8 mos',
    details: (
      <>
        <div className="mt-10 mb-2 text-base lg:text-lg font-bold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-cyan underline"
            href="https://www.linkedin.com/company/viaro/"
          >
            VIARO
          </a>{' '}
          · Contract
        </div>
        <ul className="space-y-4 list-triangle">
          <li>
            Lead development of VIARO, innovative Georgian autoparts marketplace
          </li>
          <li>Created comprehensive B2B and B2C React Native applications</li>
          <li>
            Ensured seamless integration with third-party autoparts catalogs,
            foreign supplier services and numerous banking and delivery
            solutions
          </li>
        </ul>

        <div className="mt-10 mb-2 text-base lg:text-lg font-bold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-cyan underline"
            href="https://www.linkedin.com/company/allyconnect/"
          >
            Ally
          </a>{' '}
          · Contract
        </div>
        <ul className="space-y-4 list-triangle">
          <li>Reworked backend API for Ally, Georgian social networking app</li>
          <li>
            Migrated from AWS Neptune to Neo4j database, reducing operational
            costs
          </li>
          <li>
            Implemented caching layer and used Dijkstra&apos;s algorithm to
            drastically improve performance and reduce pathfinding time from
            about 10 minutes to 15-30 seconds
          </li>
          <li>
            Worked closely with product to design and implement enhanced UI
          </li>
        </ul>

        <div className="mt-10 mb-2 text-base lg:text-lg font-bold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-cyan underline"
            href="https://www.linkedin.com/company/allyconnect/"
          >
            PalitraL Publishing
          </a>{' '}
          · Contract
        </div>
        <ul className="space-y-4 list-triangle">
          <li>
            Developed backend API for{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-cyan underline"
              href="https://gudabooks.ge/"
            >
              Gudabooks
            </a>{' '}
            and it&apos;s React Native application, featuring e-book store,
            library and audiobooks online streaming
          </li>
          <li>
            Developed backend API for{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-cyan underline"
              href="https://www.palitral.ge/"
            >
              PalitraL Publishing
            </a>{' '}
            online store
          </li>
          <li>
            Implemented integrations with banking APIs and delivery services
          </li>
        </ul>
      </>
    ),
  },
  'Back End Developer @ Lupi AI': {
    position: 'Back End Developer',
    company: 'Lupi AI',
    link: 'https://www.linkedin.com/company/lupiai',
    period: 'Jun 2019 - Jan 2021 · 1 yr 8 mos',
    details: (
      <ul className="space-y-4 list-triangle">
        <li>
          Worked on a comprehensive university management backend system based
          on NestJS and MongoDB
        </li>
        <li>
          Contributed to the development of modules responsible for financial
          management, course management and student/personnel administration
        </li>
      </ul>
    ),
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
      className="min-h-screen w-full text-white flex flex-col items-center pt-5 mt-20"
    >
      <div className="relative">
        <h2 className="text-2xl lg:text-4xl font-bold mb-2">Experiences</h2>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[105%] border-dashed-large" />
      </div>

      <div className="w-full max-w-6xl mt-10 lg:mt-20 flex flex-col lg:flex-row gap-8 lg:text-base text-xs">
        <div className="w-full lg:w-60 overflow-x-auto">
          <div className="flex lg:flex-col border-b lg:border-b-0 lg:border-l border-cyan">
            {Object.entries(experiences).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveJob(key)}
                className={`block shrink-0 cursor-pointer text-left px-4 py-3 transition-colors hover:text-cyan whitespace-nowrap ${
                  activeJob === key
                    ? 'text-cyan border-b-2 lg:border-b-0 lg:border-l-2 border-cyan lg:-ml-[1px]'
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
            <h3 className="text-base lg:text-2xl font-bold text-cyan mb-1">
              <span className="text-white">{selectedJob.position} </span>
              <br className="lg:hidden" /> 
              <a
                href={selectedJob.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative after:absolute after:bg-cyan after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                @ {selectedJob.company}
              </a>
            </h3>
            <p className="text-white/60 mb-6">{selectedJob.period}</p>
            {selectedJob.details}
          </div>
        )}
      </div>
    </section>
  );
}
