import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { useActiveSection } from '../../context/use-active-section';
import { ExperienceEntry } from './experience-entry';
import { ExperiencesNavigation } from './experiences-navigation';
import { EXPERIENCES } from './experiences.constants';
import './slider.css';

export function Experiences() {
  useActiveSection('Experiences');

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    axis: 'x',
    loop: true,
  });

  const [activeExperienceIdx, setActiveExperienceIdx] = useState(0);
  const selectedExperience = EXPERIENCES[activeExperienceIdx];

  useEffect(() => {
    emblaApi?.scrollTo(activeExperienceIdx);
  }, [activeExperienceIdx]);

  useEffect(() => {
    if (!emblaApi) return undefined;

    const onSelect = () => {
      setActiveExperienceIdx(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="Experiences"
      className="flex min-h-screen w-full flex-col items-center pt-20 text-white"
    >
      <div className="relative">
        <h2 className="mb-2 text-2xl font-bold lg:text-4xl">Experiences</h2>
        <div className="border-dashed-large absolute bottom-0 left-1/2 w-[105%] -translate-x-1/2" />
      </div>

      <div className="mt-10 flex w-full max-w-6xl flex-col gap-8 text-xs lg:mt-20 lg:flex-row lg:text-base">
        <ExperiencesNavigation
          activeExperienceIdx={activeExperienceIdx}
          setActiveExperienceIdx={setActiveExperienceIdx}
        />

        <section className="embla lg:hidden">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {EXPERIENCES.map((details, index) => (
                <div className="embla__slide" key={index}>
                  <ExperienceEntry experience={details} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="hidden lg:flex lg:flex-1">
          <ExperienceEntry experience={selectedExperience} />
        </div>
      </div>
    </section>
  );
}
