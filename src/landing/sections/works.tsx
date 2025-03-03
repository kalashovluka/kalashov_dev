import { useActiveSection } from '../context/use-active-section';
import { LinkIcon } from '../icons/link.icon';

export function Works() {
  useActiveSection('Works');

  return (
    <section
      id="Works"
      className="min-h-screen w-full text-white flex flex-col items-center pt-5 mt-20"
    >
      <div className="relative">
        <h2 className="text-2xl lg:text-4xl font-bold mb-2">Featured Projects</h2>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[105%] border-dashed-large" />
      </div>

      <div className="flex w-full mt-20 min-h-96 relative">
        <a
          href="https://my.norwex.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            className="absolute z-1 cursor-pointer left-10 top-10 w-xl h-80 rounded-lg transition-all duration-300 hover:brightness-100 brightness-[0.2]"
            src="/previews/norwex-preview.jpg"
          />
        </a>
        <div className="flex flex-col items-end justify-center relative w-full">
          <div className="text-2xl font-bold">Norwex USA</div>
          <div className="bg-[#13243878] rounded-md p-4 w-lg z-1 mt-5">
            A global direct sales company, allowing individuals to become
            Independent Sales Consultants and offer Norwex products through
            personal networks and events
          </div>
          <div className="flex gap-5 text-sm text-[#d5ddf6] mt-5">
            <div>React</div>
            <div>Next.js</div>
            <div>TailwindCSS</div>
            <div>MobX</div>
            <div>TypeScript</div>
          </div>
          <a
            className="relative -right-1 w-6 h-6 mt-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://my.norwex.com/"
          >
            <LinkIcon />
          </a>
        </div>
      </div>

      <div className="flex w-full mt-10 min-h-96 relative">
        <a
          href="https://www.howl.link/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="absolute right-10 top-10 w-xl h-80 rounded-lg z-1 cursor-pointer transition-all duration-300 hover:brightness-100 brightness-[0.2]"
            src="/previews/howl-preview.jpg"
            loading="lazy"
          />
        </a>
        <div className="flex flex-col items-start justify-center relative w-full">
          <div className="text-2xl font-bold">HOWL Creator App</div>
          <div className="bg-[#13243878] rounded-md p-4 w-lg z-1 mt-5">
            Howl is a marketplace for commerce creators. We build tools for
            creators on every social platform to earn more and grow their
            community faster.
          </div>
          <div className="flex gap-5 text-sm text-[#d5ddf6] mt-5">
            <div>React</div>
            <div>React Native</div>
            <div>Expo</div>
            <div>TailwindCSS</div>
            <div>TypeScript</div>
          </div>
          <a
            className="relative -left-1 w-6 h-6 mt-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.howl.link/"
          >
            <LinkIcon />
          </a>
        </div>
      </div>

      <div className="flex w-full mt-10 min-h-96 relative">
        <a href="https://viaro.ge/" target="_blank" rel="noopener noreferrer">
          <img
            loading="lazy"
            className="absolute z-1 cursor-pointer left-10 top-10 w-xl h-80 rounded-lg transition-all duration-300 hover:brightness-100 brightness-[0.2]"
            src="/previews/viaro-preview.jpg"
          />
        </a>
        <div className="flex flex-col items-end justify-center relative w-full">
          <div className="text-2xl font-bold">VIARO</div>
          <div className="bg-[#13243878] rounded-md p-4 w-lg z-1 mt-5">
            What was created to facilitate human movement, should not become an
            obstacle on the road. <br /> VIARO - car parts online marketplace.
          </div>
          <div className="flex gap-5 text-sm text-[#d5ddf6] mt-5">
            <div>React</div>
            <div>React Native</div>
            <div>Expo</div>
            <div>TailwindCSS</div>
            <div>TypeScript</div>
          </div>
          <a
            className="relative -right-1 w-6 h-6 mt-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://viaro.ge/"
          >
            <LinkIcon />
          </a>
        </div>
      </div>

      <div className="flex w-full mt-10 min-h-96 relative">
        <a
          href="https://www.allyapp.one/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="absolute z-1 cursor-pointer right-10 top-10 w-xl h-80 rounded-lg transition-all duration-300 hover:brightness-100 brightness-[0.2]"
            src="/previews/ally-preview.jpg"
            loading="lazy"
          />
        </a>
        <div className="flex flex-col items-start justify-center relative w-full">
          <div className="text-2xl font-bold">Ally: Connect with anyone</div>
          <div className="bg-[#13243878] rounded-md p-4 w-lg z-1 mt-5">
            Ally revolutionizes the way you connect with new acquaintances.
            <br />
            With our app, users import and classify their phonebook contacts to
            get effective and optimal &quot;THE-RIGHT-6-PEOPLE&quot; chains in
            seconds.
          </div>
          <div className="flex gap-5 text-sm text-[#d5ddf6] mt-5">
            <div>React Native</div>
            <div>Node.js</div>
            <div>NestJS</div>
            <div>PostgreSQL</div>
          </div>
          <div className="flex gap-5 text-sm text-[#d5ddf6] mt-2">
            <div>Neo4j</div>
            <div>ElasticSearch</div>
          </div>
          <a
            className="relative -left-1 w-6 h-6 mt-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.allyapp.one/"
          >
            <LinkIcon />
          </a>
        </div>
      </div>

      <div className="flex w-full mt-10 min-h-96 relative">
        <a
          href="https://palitral.ge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="absolute z-1 cursor-pointer left-10 top-10 w-xl h-80 rounded-lg transition-all duration-300 hover:brightness-100 brightness-[0.2]"
            src="/previews/palitral-preview.jpg"
            loading="lazy"
          />
        </a>
        <div className="flex flex-col items-end justify-center relative w-full">
          <div className="text-2xl font-bold">PalitraL Online Store</div>
          <div className="bg-[#13243878] rounded-md p-4 w-lg z-1 mt-5">
            PalitraL Publishing was founded in 2005 with a mission of bridging
            the gap between Georgian readers and books. Today it boasts the
            title of the largest and most successful enterprise in the Georgian
            publishing market
          </div>
          <div className="flex gap-5 text-sm text-[#d5ddf6] mt-5">
            <div>PHP</div>
            <div>Laravel</div>
            <div>MySQL</div>
            <div>RESTful API</div>
          </div>
          <a
            className="relative -right-1 w-6 h-6 mt-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://palitral.ge/"
          >
            <LinkIcon />
          </a>
        </div>
      </div>

      <div className="flex w-full mt-10 min-h-96 relative">
        <a
          href="https://gudabooks.ge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="absolute z-1 cursor-pointer right-10 top-10 w-xl h-80 rounded-lg transition-all duration-300 hover:brightness-100 brightness-[0.2]"
            src="/previews/gudabooks-preview.jpg"
            loading="lazy"
          />
        </a>
        <div className="flex flex-col items-start justify-center relative w-full">
          <div className="text-2xl font-bold">Guda Audio Books</div>
          <div className="bg-[#13243878] rounded-md p-4 w-lg z-1 mt-5">
            The most popular Georgian e-book reading and listening application
          </div>
          <div className="flex gap-5 text-sm text-[#d5ddf6] mt-2">
            <div>React Native</div>
            <div>Node.js</div>
            <div>NestJS</div>
            <div>MySQL</div>
            <div>RESTful API</div>
          </div>
          <a
            className="relative -left-1 w-6 h-6 mt-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://gudabooks.ge/"
          >
            <LinkIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
