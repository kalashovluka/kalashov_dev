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
      className={`transition-all duration-300 capitalize relative text-cyan group`}
    >
      {`<${section} />`}
      <span
        className={`absolute -bottom-1 left-0 h-[1px] bg-cyan transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </a>
  );
}
