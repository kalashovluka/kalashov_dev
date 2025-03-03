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
  const { activeSection } = useActiveSectionContext();
  const title = `Luka Kalashov | ${activeSection}`;

  return (
    <>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />

      <header className="w-full backdrop-blur-lg z-2 p-5 gap-7 fixed top-0 font-mono tracking-tighter text-cyan font-medium flex justify-end">
        <Section section="About" isActive={activeSection === 'About'} />
        <Section section="Experiences" isActive={activeSection === 'Experiences'} />
        <Section section="Works" isActive={activeSection === 'Works'} />
        <Section section="Contact" isActive={activeSection === 'Contact'} />
      </header>
    </>
  );
}
