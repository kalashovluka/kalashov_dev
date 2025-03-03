import { useActiveSection } from '../../context/use-active-section';
import { ProjectEntry } from './project-entry';

export function Works() {
  useActiveSection('Works');

  return (
    <section
      id="Works"
      className="min-h-screen w-full text-white flex flex-col items-center pt-20"
    >
      <div className="relative">
        <h2 className="text-2xl lg:text-4xl font-bold mb-2">
          Featured Projects
        </h2>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[105%] border-dashed-large" />
      </div>

      <ProjectEntry
        align="left"
        title="Norwex USA"
        imgSrc="/previews/norwex-preview.jpg"
        skills={['React', 'Next.js', 'TailwindCSS', 'MobX', 'TypeScript']}
      >
        A global direct sales company, allowing individuals to become
        Independent Sales Consultants and offer Norwex products through personal
        networks and events
      </ProjectEntry>

      <ProjectEntry
        align="right"
        title="HOWL Creator App"
        imgSrc="/previews/howl-preview.jpg"
        skills={['React', 'React Native', 'Expo', 'TailwindCSS', 'TypeScript']}
      >
        Howl is a marketplace for commerce creators. We build tools for creators
        on every social platform to earn more and grow their community faster.
      </ProjectEntry>

      <ProjectEntry
        align="left"
        title="VIARO"
        imgSrc="/previews/viaro-preview.jpg"
        skills={['React', 'React Native', 'Expo', 'TailwindCSS', 'TypeScript']}
      >
        What was created to facilitate human movement, should not become an
        obstacle on the road. <br /> VIARO - car parts online marketplace.
      </ProjectEntry>

      <ProjectEntry
        align="right"
        title="Ally: Connect with anyone"
        imgSrc="/previews/ally-preview.jpg"
        skills={[
          'React Native',
          'Node.js',
          'NestJS',
          'PostgreSQL',
          'Neo4j',
          'ElasticSearch',
        ]}
      >
        Ally revolutionizes the way you connect with new acquaintances.
        <br />
        With our app, users import and classify their phonebook contacts to get
        effective and optimal &quot;THE-RIGHT-6-PEOPLE&quot; chains in seconds.
      </ProjectEntry>

      <ProjectEntry
        align="left"
        title="PalitraL Online Store"
        imgSrc="/previews/palitral-preview.jpg"
        skills={['PHP', 'Laravel', 'MySQL', 'RESTful API']}
      >
        PalitraL Publishing was founded in 2005 with a mission of bridging the
        gap between Georgian readers and books. Today it boasts the title of the
        largest and most successful enterprise in the Georgian publishing market
      </ProjectEntry>

      <ProjectEntry
        align="right"
        title="Guda Audio Books"
        imgSrc="/previews/gudabooks-preview.jpg"
        skills={['React Native', 'Node.js', 'NestJS', 'MySQL', 'RESTful API']}
      >
        The most popular Georgian e-book reading and listening application
      </ProjectEntry>
    </section>
  );
}
