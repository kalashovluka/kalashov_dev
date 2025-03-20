import { useStore } from '@nanostores/preact';
import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';
import { activeSectionStore } from '../state/active-section.store';
import { useEffect } from 'preact/hooks';

export function Header() {
  const activeSection = useStore(activeSectionStore);
  
  useEffect(() => {
    document.title = `Luka Kalashov | ${activeSection}`
  }, [activeSection])

  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
}
