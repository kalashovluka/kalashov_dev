import { useState } from "preact/hooks";
import { NavMenu } from "./nav-menu";
import { MenuIcon } from "../../icons/menu.icon";

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="text-cyan fixed top-0 z-[3] flex w-screen justify-between p-5 font-mono tracking-tighter backdrop-blur-lg lg:hidden">
        <p className="text-xl font-bold text-white">Luka Kalashov</p>

        <button className="z-[3] h-8 w-8" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon isOpen={isOpen} />
        </button>
      </header>
      {isOpen && <NavMenu onClose={() => setIsOpen(false)} />}
    </>
  );
}
