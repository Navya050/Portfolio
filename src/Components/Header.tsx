import React, { useState } from "react";
import { useSetTheme } from "../ThemeContext";
import { DarkIcon, LightIcon } from "../assets/Icons";

function Header() {
  const [activeText, setActiveText] = useState("home");

  const { theme, handleChangeTheme } = useSetTheme();

  function handleClick(text: string) {
    setActiveText(text);
    window.location.hash = text;
  }
  return (
    <div
      className={`header h-[60px] ${
        theme === "dark" ? "bg-black" : "bg-white"
      } p-10 md:fixed top-0 w-full z-50 flex items-center md:justify-between justify-around`}
    >
      <>
        <p className="font-semibold">Navyasri Maskani</p>
        <div className="md:flex gap-5 font-semibold hidden">
          <ul className="nav flex gap-5">
            <li
              className={`cursor-pointer hover:text-[#1ED760] ${
                activeText === "home" && "text-[#1ED760] uppercase"
              }`}
              onClick={() => handleClick("home")}
            >
              home
            </li>
            <li
              className={`cursor-pointer hover:text-[#1ED760] ${
                activeText === "about" && "text-[#1ED760] uppercase"
              }`}
              onClick={() => handleClick("about")}
            >
              about
            </li>
            <li
              className={`cursor-pointer hover:text-[#1ED760] ${
                activeText === "projects" && "text-[#1ED760] uppercase"
              }`}
              onClick={() => handleClick("projects")}
            >
              projects
            </li>
            <li
              className={`cursor-pointer hover:text-[#1ED760] ${
                activeText === "contact" && "text-[#1ED760] uppercase"
              }`}
              onClick={() => handleClick("contact")}
            >
              contact
            </li>
          </ul>
        </div>
        <div className="cursor-pointer" onClick={handleChangeTheme}>
          {theme === "light" ? <DarkIcon /> : <LightIcon />}
        </div>
      </>
    </div>
  );
}

export default Header;
