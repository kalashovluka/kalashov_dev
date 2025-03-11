import { useActiveSectionContext } from '../context/active-section.context';
import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';

export function Header() {
  const { activeSection } = useActiveSectionContext();
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
