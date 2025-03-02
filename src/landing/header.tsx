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
      className={`transition-all duration-300 capitalize underline-offset-4 hover:opacity-100 hover:underline ${
        isActive ? 'text-glow underline' : 'opacity-45'
      }`}
    >{`<${section} />`}</a>
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
