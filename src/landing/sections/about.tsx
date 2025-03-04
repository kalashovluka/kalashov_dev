import { useActiveSection } from '../context/use-active-section';

export function About() {
  useActiveSection('About');

  return (
    <section
      id="About"
      className="min-h-screen w-full text-white justify-center items-center flex py-20"
    >
      <div className="lg:max-w-4xl w-full">
        <p className="text-sm">Hello There! <br className='lg:hidden' /> My name is Luka and I am a</p>
        <div className="font-bold text-4xl lg:text-[110px] my-2 flex flex-wrap items-center">
          WEB DEVELOPER
          <div className="relative left-2 lg:left-5 w-3 lg:w-6 h-8 lg:h-20 animate-cursor-blink" />
        </div>
        <p className="mt-2 lg:text-base text-sm">
          with more than{' '}
          <strong>
            <i>6 years</i>
          </strong>{' '}
          of commercial experience in building full-featured web and
          mobile applications. List of my technologies includes:
        </p>
        <ul className="list-triangle-sm lg:list-triangle mt-5 flex flex-col flex-wrap lg:max-h-24 max-h-32 max-w-full gap-x-10 lg:text-base text-xs">
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
