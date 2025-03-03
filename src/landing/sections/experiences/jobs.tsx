import { ReactElement } from "react";

export type JobExperience = {
  position: string;
  company: string;
  link: string;
  period: string;
  details: ReactElement;
};

export const JOBS: Record<string, JobExperience> = {
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
