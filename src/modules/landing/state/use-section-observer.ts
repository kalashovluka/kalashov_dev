import { useEffect, useRef } from "preact/hooks";
import { activeSectionStore, type Section } from "./active-section.store";
import { useStore } from "@nanostores/preact";

export function useSectionObserver(section: Section) {
  const activeSection = useStore(activeSectionStore);
  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;

  useEffect(() => {
    const element = document.getElementById(section);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          activeSectionStore.set(section);
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [section]);
}
