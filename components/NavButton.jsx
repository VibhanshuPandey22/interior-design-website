import React from "react";

const NavButton = ({ text }) => {
  return (
    <button className="border-black bg-offWhite text-black hover:bg-black hover:text-offWhite  transition-all duration-200 border px-3 py-1 text-sm rounded-3xl font-varela max-sm:text-xs max-sm:py-1 max-sm:px-2">
      <span className="drop-shadow-md"> {text}</span>
    </button>
  );
};

export default NavButton;
