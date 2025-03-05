import { SectionName } from '../context/active-sections.types';

export function Section({
  section,
  onClick,
  isActive,
}: {
  section: SectionName;
  onClick?: () => void;
  isActive: boolean;
}) {
  return (
    <a
      href={`#${section}`}
      onClick={onClick}
      className={`text-cyan group relative capitalize transition-all duration-300`}
    >
      {`<${section} />`}
      <span
        className={`bg-cyan absolute -bottom-1 left-0 h-[1px] transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </a>
  );
}
