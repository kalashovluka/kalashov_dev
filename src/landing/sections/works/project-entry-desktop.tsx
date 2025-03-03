import { LinkIcon } from '../../icons/link.icon';
import { ProjectEntryProps } from './project-entry.types';

export function ProjectEntryDesktop({
  align,
  title,
  skills,
  children,
  imgSrc,
}: ProjectEntryProps) {
  const imgBaseStyles =
    'absolute right-10 top-10 w-xl h-80 rounded-lg z-1 cursor-pointer transition-all duration-300 hover:brightness-100 brightness-[0.2]';
  const imgStyles = `${imgBaseStyles} ${align === 'left' ? 'left-10' : 'right-10'}`;

  const contentBaseStyles = 'flex flex-col justify-center relative w-full z-1';
  const contentStyles = `${contentBaseStyles} ${align === 'right' ? 'items-start' : 'items-end'}`;

  return (
    <div className="w-full mt-10 min-h-96 relative hidden lg:flex">
      <a
        href="https://www.howl.link/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={imgStyles} src={imgSrc} loading="lazy" />
      </a>
      <div className={contentStyles}>
        <div className="text-2xl font-bold">{title}</div>
        <div className="bg-[#132438b6] rounded-md p-4 w-lg mt-5">
          {children}
        </div>
        <div className="flex gap-5 text-sm text-[#d5ddf6] mt-5">
          {skills.map((skill) => (
            <div key={skill}>{skill}</div>
          ))}
        </div>
        <a
          className="relative -left-1 w-6 h-6 mt-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.howl.link/"
        >
          <LinkIcon />
        </a>
      </div>
    </div>
  );
}
