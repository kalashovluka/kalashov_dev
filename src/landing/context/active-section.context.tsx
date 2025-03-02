import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { ActiveSectionContextType, SectionName } from './active-sections.types';

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

const orderedSections: SectionName[] = [
  'Contact',
  'Works',
  'Experience',
  'About',
];

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [sections, setSections] = useState({
    About: true,
    Experience: false,
    Works: false,
    Contact: false,
  });

  const activeSection = useMemo(
    () => orderedSections.find((section) => sections[section]),
    [sections],
  );

  return (
    <ActiveSectionContext.Provider
      value={{
        sections,
        activeSection,
        setSection: (section: SectionName, value: boolean) => {
          setSections((sections) => ({ ...sections, [section]: value }));
        },
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionProvider',
    );
  }
  return context;
}
