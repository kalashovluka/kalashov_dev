import { useActiveSection } from '../context/use-active-section';

export function About() {
  useActiveSection('About');

  return (
    <section
      id="About"
      className="min-h-screen w-full text-white justify-center items-center flex"
    >
      <div className="max-w-4xl">
        <p className="text-sm">Hello There! My name is Luka and I am a</p>
        <div className="font-bold text-8xl my-2 flex items-center">
          WEB DEVELOPER
          <div className="relative left-5 w-6 h-20 animate-cursor-blink" />
        </div>
        <p className="mt-2">
          with more than{' '}
          <strong>
            <i>6 years</i>
          </strong>{' '}
          of commercial experience, focused on building full-featured web
          applications. List of my technologies includes:
        </p>
        <div className="flex gap-10 mt-5">
          <ul className="list-triangle">
            <li>TypeScript/JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
          </ul>

          <ul className='list-triangle'>
            <li>MobX</li>
            <li>Redux</li>
            <li>React Native</li>
            <li>Expo</li>
          </ul>
          
          <ul className='list-triangle'>
            <li>Node.js</li>
            <li>NestJS</li>
            <li>MySQL / PostgreSQL</li>
            <li>TypeORM / Prisma</li>
          </ul>
          
          <ul className='list-triangle'>
            <li>MongoDB</li>
            <li>Mongoose / Typegoose</li>
            <li>ElasticSearch</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
