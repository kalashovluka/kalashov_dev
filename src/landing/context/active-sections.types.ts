export type SectionName = 'About' | 'Experience' | 'Works' | 'Contact';

export interface ActiveSectionContextType {
  sections: Record<SectionName, boolean>;
  activeSection?: SectionName;
  setSection: (section: SectionName, value: boolean) => void;
}
