import { LinkIcon } from "../../../icons/link.icon";
import type { ProjectEntryProps } from "./project-entry.types";

export function ProjectEntryDesktop({
  align,
  title,
  skills,
  children,
  imgSrc,
}: ProjectEntryProps) {
  const imgBaseStyles =
    "absolute right-10 top-10 w-xl h-80 rounded-lg z-1 cursor-pointer transition-all duration-300 hover:brightness-100 brightness-[0.2]";
  const imgStyles = `${imgBaseStyles} ${
    align === "left" ? "left-10" : "right-10"
  }`;

  const contentBaseStyles =
    "flex flex-col justify-center absolute z-1 top-1/2 -translate-y-1/2 w-md";
  const contentStyles = `${contentBaseStyles} ${
    align === "right" ? "left-0 items-start" : "right-0 items-end"
  }`;

  const textAlign = align === "right" ? "text-left" : "text-right";

  return (
    <div className="relative mt-10 hidden min-h-96 w-full lg:flex">
      <a
        href="https://www.howl.link/"
        target="_blank"
        className="cursror-pointer"
        rel="noopener noreferrer"
      >
        <img className={imgStyles} src={imgSrc} loading="lazy" />
      </a>
      <div className={contentStyles}>
        <div className="text-2xl font-bold">{title}</div>
        <div
          className={`mt-5 rounded-md bg-[#132438b6] p-4 text-sm ${textAlign}`}
        >
          {children}
        </div>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#d5ddf6]">
          {skills.map((skill, i) => (
            <div key={i}>{skill}</div>
          ))}
        </div>
        <a
          className="relative -left-1 mt-2 h-6 w-6"
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
