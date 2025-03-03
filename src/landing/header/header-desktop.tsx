import { useActiveSectionContext } from '../context/active-section.context';
import { Section } from './section';

export function HeaderDesktop() {
  const { activeSection } = useActiveSectionContext();

  return (
    <header className="w-screen backdrop-blur-lg z-2 p-5 px-10 fixed top-0 font-mono tracking-tighter text-cyan font-medium hidden lg:flex justify-between">
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
