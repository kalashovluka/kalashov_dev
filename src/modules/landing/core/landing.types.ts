export type ExperiencesEntry = {
  position: string;
  company: string;
  link: string;
  period: string;
  details: { title?: string; link?: string; bullets: string[] }[];
};
