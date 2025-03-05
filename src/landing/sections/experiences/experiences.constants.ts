export type JobExperience = {
  position: string;
  company: string;
  link: string;
  period: string;
  details: { title?: string; link?: string; bullets: string[] }[];
};

export const EXPERIENCES = [
  {
    position: 'Front End Developer',
    company: 'Team Brilliant',
    link: 'https://www.linkedin.com/company/teambrilliant',
    period: 'Mar 2022 - Jan 2025 · 2 yrs 11 mos',
    details: [
      {
        title: 'Norwex',
        link: 'https://www.linkedin.com/company/norwex/',
        bullets: [
          'Worked on enhancing and modernizing web resources for Norwex - a global direct sales company',
          'Redesigned legacy Backbone.js platform into modern, scalable solution using TypeScript, React and Next.js',
          'Contributed to the development of a monorepo architecture, that improved project structure and developer experience',
        ],
      },
      {
        title: 'Howl',
        link: 'https://www.linkedin.com/company/howldotlink/',
        bullets: [
          'Developed a cross-platform React Native application for Howl, social commerce platform that connects brands with creators',
          'Implemented innovative solutions to optimize performance and enhance user engagement',
          'Collaborated with the business to meet product goals and ensure a seamless user experience',
        ],
      },
    ],
  },
  {
    position: 'Full Stack Developer',
    company: 'Spinom',
    link: 'https://www.linkedin.com/company/spinom',
    period: 'Jul 2020 - Feb 2022 · 1 yr 8 mos',
    details: [
      {
        title: 'VIARO',
        link: 'https://www.linkedin.com/company/viaro/',
        bullets: [
          'Lead development of VIARO, innovative Georgian autoparts marketplace',
          'Created comprehensive B2B and B2C React Native applications',
          'Ensured seamless integration with third-party autoparts catalogs, foreign supplier services and numerous banking and delivery solutions',
        ],
      },
      {
        title: 'Ally',
        link: 'https://www.linkedin.com/company/allyconnect/',
        bullets: [
          'Reworked backend API for Ally, Georgian social networking app',
          'Migrated from AWS Neptune to Neo4j database, reducing operational costs',
          'Implemented caching layer and used Dijkstra&apos;s algorithm to drastically improve performance and reduce pathfinding time from about 10 minutes to 15-30 seconds',
          'Worked closely with product to design and implement enhanced UI',
        ],
      },
      {
        title: 'PalitraL Publishing',
        link: 'https://www.linkedin.com/company/palitra-l-publishing',
        bullets: [
          'Developed backend API for Gudabooks and it&apos;s React Native application, featuring e-book store, library and audiobooks online streaming',
          'Developed backend API for PalitraL Publishing online store',
          'Implemented integrations with banking APIs and delivery services',
        ],
      },
    ],
  },
  {
    position: 'Back End Developer',
    company: 'Lupi AI',
    link: 'https://www.linkedin.com/company/lupiai',
    period: 'Nov 2018 - Jun 2020 · 1 yr 8 mos',
    details: [
      {
        bullets: [
          'Worked on a comprehensive university management backend system based on NestJS and MongoDB',
          'Contributed to the development of modules responsible for financial management, course management and student/personnel administration',
        ],
      },
    ],
  }
]