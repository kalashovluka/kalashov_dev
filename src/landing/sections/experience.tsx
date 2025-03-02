import { useActiveSection } from "../context/use-active-section";

export function Experience() {
  useActiveSection('Experience');

  return (
    <section id="Experience" className="min-h-screen w-full text-white flex flex-col items-center">
      <div className="relative">
        <h2 className="text-6xl font-bold mb-2">Experiences</h2>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[105%] border-dashed-large" />
      </div>
    </section>
  );
}
