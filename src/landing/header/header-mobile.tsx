import { useState } from 'react';
import { MenuIcon } from '../icons/menu.icon';
import { NavMenu } from './nav-menu';

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-screen backdrop-blur-lg z-2 p-5 fixed top-0 font-mono tracking-tighter text-cyan flex lg:hidden justify-between">
      <p className="text-xl font-bold text-white">Luka Kalashov</p>
      <button className="w-8 h-8" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
      {isOpen && <NavMenu onClose={() => setIsOpen(false)} />}
    </header>
  );
}
