import { useStore } from '@nanostores/preact';
import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';
import { activeSectionStore } from '../state/active-section.store';

export function Header() {
  const activeSection = useStore(activeSectionStore);
  const title = `Luka Kalashov | ${activeSection}`;

  return (
    <>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
}
