import { useSectionObserver } from "../../state/use-section-observer";
import { ProjectEntry } from "./project-entry";

export function Works() {
  useSectionObserver('Works');

  return (
    <section
      id="Works"
      className="flex min-h-screen w-full flex-col items-center pt-20 text-white"
    >
      <div className="relative max-lg:mb-5">
        <h2 className="mb-2 text-2xl font-bold lg:text-4xl">
          Featured Projects
        </h2>
        <div className="border-dashed-large absolute bottom-0 left-1/2 w-[105%] -translate-x-1/2" />
      </div>

      <ProjectEntry
        align="left"
        title="Norwex USA"
        imgSrc="/previews/norwex-preview.jpg"
        link="https://my.norwex.com"
        skills={['React', 'Next.js', 'TailwindCSS', 'MobX', 'TypeScript']}
      >
        A global direct sales company, allowing individuals to become
        Independent Sales Consultants and offer Norwex products through personal
        networks and events
      </ProjectEntry>

      <ProjectEntry
        align="right"
        title="HOWL Creator App"
        link="https://howl.link"
        imgSrc="/previews/howl-preview.jpg"
        skills={['React', 'React Native', 'Expo', 'TailwindCSS', 'TypeScript']}
      >
        Howl is a marketplace for commerce creators. We build tools for creators
        on every social platform to earn more and grow their community faster.
      </ProjectEntry>

      <ProjectEntry
        align="left"
        title="VIARO"
        link="https://viaro.ge"
        imgSrc="/previews/viaro-preview.jpg"
        skills={['React', 'React Native', 'Expo', 'Redux', 'TailwindCSS']}
      >
        VIARO - car parts online marketplace. <br />
        What was created to facilitate human movement, should not become an
        obstacle on the road.
      </ProjectEntry>

      <ProjectEntry
        align="right"
        title="Ally: Connect with anyone"
        link="allyapp.one"
        imgSrc="/previews/ally-preview.jpg"
        skills={['React', 'React Native', 'Expo', 'Redux', 'TypeScript']}
      >
        Ally revolutionizes the way you connect with new acquaintances.
      </ProjectEntry>

      <ProjectEntry
        align="left"
        title="PalitraL Online Store"
        link="https://palitral.ge/"
        imgSrc="/previews/palitral-preview.jpg"
        skills={['React', 'React Native', 'Expo', 'Redux', 'TypeScript']}
      >
        PalitraL Publishing boasts the title of the largest and most successful
        enterprise in the Georgian publishing market
      </ProjectEntry>

      <ProjectEntry
        align="right"
        title="Guda Audio Books"
        link="https://gudabooks.ge/"
        imgSrc="/previews/gudabooks-preview.jpg"
        skills={['React', 'React Native', 'Expo', 'Redux', 'TypeScript']}
      >
        The most popular Georgian e-book reading and listening application
      </ProjectEntry>
    </section>
  );
}
