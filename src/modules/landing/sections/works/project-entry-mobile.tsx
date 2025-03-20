import type { ProjectEntryProps } from "./project-entry.types";

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
      className="relative mt-10 min-h-48 w-full lg:hidden"
      rel="noopener noreferrer"
    >
      <img src={imgSrc} loading="lazy" />
      <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-between bg-black/80 p-5 text-center text-xs">
        <p className="text-xl font-bold">{title}</p>
        <p>{skills.join(', ')}</p>
        <p className="text-blue-100">{children}</p>
      </div>
    </a>
  );
}
