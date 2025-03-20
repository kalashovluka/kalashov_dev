import { useEffect, useRef } from 'preact/hooks';
import { EXPERIENCES } from './experiences.constants';

type Props = {
  activeExperienceIdx: number;
  setActiveExperienceIdx: (index: number) => void;
};

function scrollToCenter(element: HTMLElement): void {
  const container = element.closest('.overflow-x-auto');
  if (container instanceof HTMLElement) {
    const elementCenter = element.offsetLeft + element.offsetWidth / 2;
    const containerCenter = container.offsetWidth / 2;
    container.scrollLeft = elementCenter - containerCenter;
  }
}

export function ExperiencesNavigation({
  activeExperienceIdx,
  setActiveExperienceIdx,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.innerWidth > 1024) return;

    const element = container.childNodes[activeExperienceIdx];
    if (!element) return;

    scrollToCenter(element as HTMLElement);
  }, [activeExperienceIdx]);

  return (
    <div className="w-full overflow-x-auto scroll-smooth lg:w-60">
      <div
        ref={containerRef}
        className="border-cyan flex lg:flex-col lg:border-b-0 lg:border-l"
      >
        {EXPERIENCES.map((experience, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveExperienceIdx(index);
            }}
            className={`hover:text-cyan block shrink-0 cursor-pointer px-4 py-3 text-left whitespace-nowrap transition-colors ${
              activeExperienceIdx === index
                ? 'text-cyan border-cyan border-b-2 lg:-ml-[1px] lg:border-b-0 lg:border-l-2'
                : 'text-white/60'
            }`}
          >
            {experience.position}
            <br />@ {experience.company}
          </button>
        ))}
      </div>
    </div>
  );
}
