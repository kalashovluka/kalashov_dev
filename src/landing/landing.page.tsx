import { About } from './sections/about';
import { Contact } from './sections/contact';
import { Header } from './header/header';
import { Works } from './sections/works/works';
import { ActiveSectionProvider } from './context/active-section.context';
import { Experiences } from './sections/experiences/experiences';

export function Landing() {
  return (
    <ActiveSectionProvider>
      <Header />

      <div className="flex h-full min-h-screen w-full flex-col items-center font-mono">
        <div className="w-screen max-w-screen px-5 lg:w-5xl lg:max-w-5xl">
          <About />
          <Experiences />
          <Works />
          <Contact />
        </div>
      </div>
    </ActiveSectionProvider>
  );
}
