import { Section } from "./section";

export function HeaderDesktop() {
  return (
    <header className="text-cyan fixed top-0 z-2 hidden w-screen justify-between p-5 px-10 font-mono font-medium tracking-tighter backdrop-blur-lg lg:flex">
      <p className="text-xl font-bold text-white">Luka Kalashov</p>
      <div className="flex gap-5">
        <Section section="About" />
        <Section section="Experiences" />
        <Section section="Works" />
        <Section section="Contact" />
      </div>
    </header>
  );
}
