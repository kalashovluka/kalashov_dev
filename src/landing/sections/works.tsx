import { useActiveSection } from '../context/use-active-section';

export function Works() {
  useActiveSection('Works');

  return (
    <section id="Works" className="min-h-screen text-white">
      Works
    </section>
  );
}
