import { useActiveSection } from '../context/use-active-section';

export function Contact() {
  useActiveSection('Contact');

  return (
    <section id="Contact" className="min-h-screen w-full text-white flex flex-col items-center">
      <div className="relative">
        <h2 className="text-6xl font-bold mb-2">Contact</h2>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[105%] border-dashed-large" />
      </div>
    </section>
  );
}
