import { useActiveSectionContext } from '../context/active-section.context';
import { Section } from './section';

export function HeaderDesktop() {
  const { activeSection } = useActiveSectionContext();

  return (
    <header className="text-cyan fixed top-0 z-2 hidden w-screen justify-between p-5 px-10 font-mono font-medium tracking-tighter backdrop-blur-lg lg:flex">
      <p className="text-xl font-bold text-white">Luka Kalashov</p>
      <div className="flex gap-5">
        <Section section="About" isActive={activeSection === 'About'} />
        <Section
          section="Experiences"
          isActive={activeSection === 'Experiences'}
        />
        <Section section="Works" isActive={activeSection === 'Works'} />
        <Section section="Contact" isActive={activeSection === 'Contact'} />
      </div>
    </header>
  );
}
