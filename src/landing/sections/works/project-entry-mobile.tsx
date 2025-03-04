import { ProjectEntryProps } from './project-entry.types';

export function ProjectEntryMobile({
  title,
  skills,
  children,
  imgSrc,
  link,
}: ProjectEntryProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="relative mt-10 lg:hidden"
      rel="noopener noreferrer"
    >
      <img src={imgSrc} loading="lazy" />
      <div className="absolute top-0 text-center left-0 w-full h-full p-5 text-xs bg-black/80 flex flex-col items-center justify-between">
        <p className="font-bold text-xl">{title}</p>
        <p>{skills.join(', ')}</p>
        <p className='text-blue-100'>{children}</p>
      </div>
    </a>
  );
}
