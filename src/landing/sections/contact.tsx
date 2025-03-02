import { useActiveSection } from "../context/use-active-section";

export function Contact() {
  useActiveSection('Contact');

  return <section id="Contact" className="min-h-screen text-white">Contact</section>;
}
