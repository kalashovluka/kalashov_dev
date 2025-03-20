import { atom } from 'nanostores'

export type Section = 'About' | 'Experiences' | 'Works' | 'Contact';

export const activeSectionStore = atom<Section>('About')