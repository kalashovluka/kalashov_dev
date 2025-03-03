import { JOBS } from './jobs';

type Props = {
  activeJob: string;
  setActiveJob: (job: string) => void;
};

function scrollToCenter(element: HTMLElement): void {
  const container = element.closest('.overflow-x-auto');
  if (container instanceof HTMLElement) {
    const elementCenter = element.offsetLeft + element.offsetWidth / 2;
    const containerCenter = container.offsetWidth / 2;
    container.scrollLeft = elementCenter - containerCenter;
  }
}

export function JobsNavigation({ activeJob, setActiveJob }: Props) {
  return (
    <div className="w-full lg:w-60 overflow-x-auto scroll-smooth">
      <div className="flex lg:flex-col lg:border-b-0 lg:border-l border-cyan">
        {Object.entries(JOBS).map(([key, value]) => (
          <button
            key={key}
            onClick={(e) => {
              setActiveJob(key);
              if (window.innerWidth < 1024) {
                scrollToCenter(e.currentTarget);
              }
            }}
            className={`block shrink-0 cursor-pointer text-left px-4 py-3 transition-colors hover:text-cyan whitespace-nowrap ${
              activeJob === key
                ? 'text-cyan border-b-2 lg:border-b-0 lg:border-l-2 border-cyan lg:-ml-[1px]'
                : 'text-white/60'
            }`}
          >
            {value.position}
            <br />@ {value.company}
          </button>
        ))}
      </div>
    </div>
  );
}
