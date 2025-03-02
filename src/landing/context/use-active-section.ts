import { useEffect, useRef } from 'react';
import { useActiveSectionContext } from '../context/active-section.context';
import type { SectionName } from '../context/active-sections.types';

export function useActiveSection(sectionId: SectionName, threshold = 0.5) {
  const { setSection, sections } = useActiveSectionContext();
  const sectionsRef = useRef(sections);
  sectionsRef.current = sections;

  useEffect(() => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const sections = sectionsRef.current;
    const currentValue = sections[sectionId];

    const observer = new IntersectionObserver(
      (entries) => {
        console.log('entries', entries)

        entries.forEach((entry) => {
          if (entry.isIntersecting === currentValue) return;
          setSection(sectionId, entry.isIntersecting);
        });
      },
      {
        threshold,
        // rootMargin: '-50% 0px -50% 0px',
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [sectionId, setSection, threshold]);
}
