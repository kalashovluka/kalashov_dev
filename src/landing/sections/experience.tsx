import { useActiveSection } from "../context/use-active-section";

export function Experience() {
  useActiveSection('Experience');

  return <section id="Experience" className="min-h-screen text-white">Experience</section>;
}
