import { Section } from "./section";

export function NavMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed top-0 left-0 z-2 h-screen w-screen backdrop-blur-lg">
      <div className="bg-dark absolute top-0 left-0 h-full w-full opacity-50" />
      <div className="flex h-full flex-col items-center justify-center gap-10 text-2xl">
        <Section section="About" onClick={onClose} />
        <Section section="Experiences" onClick={onClose} />
        <Section section="Works" onClick={onClose} />
        <Section section="Contact" onClick={onClose} />

        <a
          href="/Luka Kalashov Frontend.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan border-cyan z-1 rounded-sm border px-6 py-1"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
