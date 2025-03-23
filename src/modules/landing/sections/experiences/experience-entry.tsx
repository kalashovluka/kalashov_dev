import type { ExperiencesEntry } from "../../core/landing.types";

type Props = {
  experience: ExperiencesEntry;
};

export function ExperienceEntry({ experience }: Props) {
  return (
    <div className="flex-1">
      <h3 className="text-cyan mb-1 text-base font-bold lg:text-2xl">
        <span className="text-white">{experience.position} </span>
        <br className="lg:hidden" />
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="after:bg-cyan relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          @ {experience.company}
        </a>
      </h3>
      <p className="mb-6 text-white/60">{experience.period}</p>
      {experience.details.map(({ title, link, bullets }) => {
        return (
          <>
            {title && (
              <div className="mt-4 mb-2 text-sm font-bold lg:mt-10 lg:text-lg">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan relative underline"
                  href={link}
                >
                  {title}
                </a>
              </div>
            )}
            <ul className="list-triangle-sm lg:list-triangle space-y-4">
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
