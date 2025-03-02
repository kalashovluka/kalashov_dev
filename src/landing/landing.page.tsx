import { About } from './sections/about';
import { Contact } from './sections/contact';
import { Experiences } from './sections/experiences';
import { Header } from './header';
import { Works } from './sections/works';
import { ActiveSectionProvider } from './context/active-section.context';

export function Landing() {
  return (
    <ActiveSectionProvider>
      <Header />

      <div className="flex flex-col h-full min-h-screen w-full bg-dark font-mono">
        <About />
        <Experiences />
        <Works />
        <Contact />
      </div>
    </ActiveSectionProvider>
  );
}
