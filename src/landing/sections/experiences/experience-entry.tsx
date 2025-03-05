import { JobExperience } from './experiences.constants';

type Props = {
  experience: JobExperience;
};

export function ExperienceEntry({ experience }: Props) {
  return (
    <div className="flex-1">
      <h3 className="text-base lg:text-2xl font-bold text-cyan mb-1">
        <span className="text-white">{experience.position} </span>
        <br className="lg:hidden" />
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative after:absolute after:bg-cyan after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
        >
          @ {experience.company}
        </a>
      </h3>
      <p className="text-white/60 mb-6">{experience.period}</p>
      {experience.details.map(({ title, link, bullets }) => {
        return (
          <>
            {title && (
              <div className="mt-4 lg:mt-10 mb-2 text-sm lg:text-lg font-bold">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-cyan underline"
                  href={link}
                >
                  {title}
                </a>{' '}
                · Contract
              </div>
            )}
            <ul className="space-y-4 list-triangle-sm lg:list-triangle">
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </>
        );
      })}
    </div>
  );
}
