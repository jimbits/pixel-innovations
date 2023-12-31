"use client";
import { MenuIcon } from "@/components/icons/MobileMenu";

function MenuToggleButton({ children }) {
  return (
    <div className="flex ">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => {}}
      >
        <MenuIcon />
        <span className="sr-only">Open main menu</span>
      </button>
    </div>
  );
}

export { MenuToggleButton };
