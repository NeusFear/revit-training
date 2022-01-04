import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {

  const router = useRouter();
  const takeHome = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push("/");
  }

  return (
    <div className="bg-neutral-900 w-screen h-14 pl-10 flex flex-row z-50">
      <div className="bg-neutral-900 px-4 text-white text-xs capitalize hover:bg-neutral-700 h-full font-semibold flex flex-row cursor-pointer"
        onClick={takeHome}>
        <p className="pt-5">LEARN REVIT ONLINE</p>
      </div>
      <div className="flex-grow"></div>
      <DarkModeSwitch />
    </div>
  );
}

const DarkModeSwitch = () => { 

  const [dark, toggleDark] = useState(true);

  return (
    <div className="pr-10 pt-3">
      <div className="w-8 h-8 bg-white rounded-full cursor-pointer" onClick={() => toggleDark(!dark)}></div>
      <div className={(dark ? "-translate-x-4" : "-translate-x-9") + " w-8 h-8 bg-neutral-900 rounded-full relative -top-8 transition-transform"}></div>
    </div>
  );

}

export default Navbar;