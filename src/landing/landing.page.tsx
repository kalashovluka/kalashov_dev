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

      <div className="flex flex-col items-center h-full min-h-screen w-full font-mono">
        <div className="lg:max-w-5xl lg:w-5xl w-screen max-w-screen px-5">
          <About />
          <Experiences />
          <Works />
          <Contact />
        </div>
      </div>
    </ActiveSectionProvider>
  );
}
