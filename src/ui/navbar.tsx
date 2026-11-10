import React from "react";
import {
  XCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-sm sm:p-2 sm:min-h-4 p-1 min-h-2">
      <div className="flex-1">
        <a className="btn btn-ghost sm:text-xl text-sm">daisyUI</a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost sm:btn-md btn-sm tooltip tooltip-bottom"
          data-tip="fullscreen"
        >
          <PlusCircleIcon size={32} />
        </button>
        <button
          className="btn btn-square btn-ghost sm:btn-md btn-sm tooltip tooltip-bottom"
          data-tip="minimize"
        >
          <MinusCircleIcon size={32} />
        </button>
        <button
          className="btn btn-square btn-ghost sm:btn-md btn-sm tooltip tooltip-bottom"
          data-tip="close"
        >
          <XCircleIcon size={32} />
        </button>
      </div>
    </nav>
  );
}
