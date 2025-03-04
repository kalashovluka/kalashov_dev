import { useActiveSectionContext } from '../context/active-section.context';
import { Section } from './section';

export function NavMenu({ onClose }: { onClose: () => void }) {
  const { activeSection } = useActiveSectionContext();

  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-2 backdrop-blur-lg">
      <div className="h-full w-full bg-dark absolute top-0 left-0 opacity-50" />
      <div className="flex flex-col items-center justify-center h-full gap-10 text-2xl">
        <Section
          section="About"
          isActive={activeSection === 'About'}
          onClick={onClose}
        />
        <Section
          section="Experiences"
          isActive={activeSection === 'Experiences'}
          onClick={onClose}
        />
        <Section
          section="Works"
          isActive={activeSection === 'Works'}
          onClick={onClose}
        />
        <Section
          section="Contact"
          isActive={activeSection === 'Contact'}
          onClick={onClose}
        />

        <a
          href="/Luka Kalashov Fullstack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan border-cyan border rounded-sm px-6 py-1 z-1"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
