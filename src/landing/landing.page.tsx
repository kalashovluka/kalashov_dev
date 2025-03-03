import { About } from './sections/about';
import { Contact } from './sections/contact';
import { Experiences } from './sections/experiences';
import { Header } from './header/header';
import { Works } from './sections/works';
import { ActiveSectionProvider } from './context/active-section.context';

export function Landing() {
  return (
    <ActiveSectionProvider>
      <Header />

      <div className="flex flex-col items-center h-full min-h-screen w-full bg-dark font-mono">
        <div className="max-w-5xl w-5xl px-5">
          <About />
          <Experiences />
          <Works />
          <Contact />
        </div>
      </div>
    </ActiveSectionProvider>
  );
}
