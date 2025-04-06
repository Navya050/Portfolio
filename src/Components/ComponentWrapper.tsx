import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { useSetTheme } from "../ThemeContext";

function ComponentWrapper() {
  const { theme } = useSetTheme();

  return (
    <>
      <div
        className={`p-2 App relative min-h-screen w-full h-auto font-poppins ${
          theme === "dark" ? "text-white bg-black" : "text-black bg-white"
        }  `}
      >
        <Header />
        <div className="md:max-w-5xl w-full md:px-0 px-2 mx-auto md:py-[100px] py-[10px]">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ComponentWrapper;
