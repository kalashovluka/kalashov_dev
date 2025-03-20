import { useSectionObserver } from "../state/use-section-observer";

export function About() {
  useSectionObserver('About');

  return (
    <section
      id="About"
      className="flex min-h-screen w-full items-center justify-center py-20 text-white"
    >
      <div className="w-full lg:max-w-4xl">
        <p className="text-sm">
          Hello There! <br className="lg:hidden" /> My name is Luka and I am a
        </p>
        <div className="my-2 flex flex-wrap items-center text-4xl font-bold lg:text-[110px]">
          WEB DEVELOPER
          <div className="animate-cursor-blink relative left-2 h-8 w-3 lg:left-5 lg:h-20 lg:w-6" />
        </div>
        <p className="mt-2 text-sm lg:text-base">
          with more than{' '}
          <strong>
            <i>6 years</i>
          </strong>{' '}
          of commercial experience in building full-featured web and mobile
          applications. List of my technologies includes:
        </p>
        <ul className="list-triangle-sm lg:list-triangle mt-5 flex max-h-32 max-w-full flex-col flex-wrap gap-x-10 text-xs lg:max-h-24 lg:text-base">
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>TailwindCSS</li>
          <li>MobX</li>
          <li>Redux</li>
          <li>React Native</li>
          <li>Expo</li>
          <li>Node.js</li>
          <li>NestJS</li>
          <li>MySQL / PostgreSQL</li>
          <li>TypeORM / Prisma</li>
          <li>MongoDB</li>
          <li>Mongoose / Typegoose</li>
          <li>ElasticSearch</li>
        </ul>
      </div>
    </section>
  );
}
