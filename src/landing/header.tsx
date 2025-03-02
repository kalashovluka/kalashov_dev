import { useActiveSectionContext } from './context/active-section.context';
import { SectionName } from './context/active-sections.types';

function Section({
  section,
  isActive,
}: {
  section: SectionName;
  isActive: boolean;
}) {
  return (
    <a
      href={`#${section}`}
      className={`transition-all duration-300 capitalize relative group ${
        isActive ? 'text-glow' : ''
      }`}
    >
      {`<${section} />`}
      <span className={`absolute -bottom-1 left-0 h-[1px] bg-cyan transition-all duration-300 ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
    </a>
  );
}

export function Header() {
  const { sections, activeSection } = useActiveSectionContext();
  const title = `Luka Kalashov | ${activeSection}`;

  return (
    <>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />

      <header className="w-full backdrop-blur-md z-1 p-5 gap-5 fixed top-0 font-mono tracking-tighter text-cyan font-medium flex justify-end">
        <Section section="About" isActive={sections.About} />
        <Section section="Experience" isActive={sections.Experience} />
        <Section section="Works" isActive={sections.Works} />
        <Section section="Contact" isActive={sections.Contact} />
      </header>
    </>
  );
}
