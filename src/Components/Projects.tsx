import React, { useState } from "react";
import snap from "../assets/wordle.png";
import snap2 from "../assets/quiz.png";
import woid from "../assets/infi.png";
import { useSetTheme } from "../ThemeContext";
import Lottie from "lottie-react";
import python from "../assets/python.json";

function Projects() {
  const { theme } = useSetTheme();
  const [copied, setCopied] = useState(false);

  return (
    <div id="projects" className="h-auto mt-7">
      <p className="text-[#1ED760] font-semibold uppercase">Projects 📂</p>
      <p className="md:whitespace-nowrap font-bold">
        Each Project is a unique piece of development 🛠
      </p>

      <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
        <img
          src={snap}
          className="md:w-[450px] w-[200px] rounded-lg"
          alt="snap"
        />
        <div>
          <div className="text-2xl font-semibold font-poppins">
            WORDLE MASTER
          </div>
          <div className="">Interactive Word Puzzle Game</div>
          <div className=" text-slate-400 my-2">
            A dynamic web-based word guessing game inspired by Wordle, featuring
            daily challenges where players attempt to guess a five-letter word
            within six tries. Built with JavaScript, HTML5, and CSS3, this
            project implements custom algorithms for letter validation and
            provides visual feedback through color-coded tiles. Features include
            streak tracking, difficulty modes, and responsive design for mobile
            play.
          </div>

          <div className="flex font-semibold gap-2 justify-start">
            <div>ReactJS |</div>
            <div>Tailwind |</div>
            <div>HTML5 |</div>
            <div>CSS3</div>
          </div>

          <div className="flex gap-2 mt-2 font-semibold justify-start">
            <p
              className="flex gap-3 cursor-pointer"
              onClick={() =>
                window.open("https://github.com/Navya050/wordle", "_blank")
              }
            >
              Code{" "}
              <img
                src={`https://cdn-icons-png.flaticon.com/128/4494/4494749.png`}
                alt="github"
                className="w-[30px]"
              />
            </p>
            <p
              className="cursor-pointer ml-[30px]"
              onClick={() =>
                window.open("https://wordle-jet-beta.vercel.app/", "_blank")
              }
            >
              Live Demo 🔗
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse gap-4 items-center mt-[30px] justify-between">
        <div>
          <div className="">
            <div className="uppercase font-bold text-2xl">Infi-Scroll</div>
            <div className="">Seamless Content Discovery Platform</div>
          </div>

          <div className=" text-slate-400 my-2">
            A modern web application that implements infinite scrolling to
            deliver a continuous content browsing experience without pagination
            interruptions. Built using React.js, this project dynamically loads
            content as users scroll, creating a fluid and engaging interface
            similar to popular social media feeds. The application utilizes
            intersection observers and virtualized lists to optimize performance
            while handling large datasets.
          </div>

          <div className="flex font-semibold gap-2 justify-start">
            <div>ReactJS |</div>
            <div>NestJS |</div>
            <div>MongoDB |</div>
            <div>Tailwind </div>
          </div>

          <div className="flex gap-2 mt-2 font-semibold justify-start">
            <p
              className="flex gap-3 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/Navya050/infinite-scrolling",
                  "_blank"
                )
              }
            >
              Code{" "}
              <img
                src="https://cdn-icons-png.flaticon.com/128/4494/4494749.png"
                alt="github"
                className="w-[30px]"
              />
            </p>
            <p
              className="cursor-pointer ml-[30px]"
              onClick={() =>
                window.open(
                  "https://infinite-scrolling-gilt.vercel.app/",
                  "_blank"
                )
              }
            >
              Live Demo 🔗
            </p>
          </div>
        </div>
        <img
          src={woid}
          className="md:w-[450px] w-[200px] rounded-lg"
          alt="snap"
        />
      </div>

      <div className="flex md:flex-row mt-5 flex-col gap-4 items-center justify-between">
        <img
          src={snap2}
          className="md:w-[450px] w-[200px] rounded-lg"
          alt="snap"
        />
        <div>
          <div className="text-2xl font-semibold font-poppins">QUIZ CRAFT</div>
          <div className="">Interactive Quiz Platform</div>
          <div className=" text-slate-400 my-2">
            A responsive React-based quiz application that delivers engaging
            multiple-choice assessments across various knowledge domains. Built
            with React.js, this project features dynamic question rendering,
            real-time scoring. The application implements a component-based
            architecture for maintainable code and a smooth user experience.
          </div>

          <div className="flex font-semibold gap-2 justify-start">
            <div>ReactJS |</div>
            <div>Tailwind |</div>
            <div>HTML5 |</div>
            <div>CSS3</div>
          </div>

          <div className="flex gap-2 mt-2 font-semibold justify-start">
            <p
              className="flex gap-3 cursor-pointer"
              onClick={() =>
                window.open("https://github.com/Navya050/Quizapp", "_blank")
              }
            >
              Code{" "}
              <img
                src={`https://cdn-icons-png.flaticon.com/128/4494/4494749.png`}
                alt="github"
                className="w-[30px]"
              />
            </p>
            <p
              className="cursor-pointer ml-[30px]"
              onClick={() =>
                window.open("https://quizapp-liard-alpha.vercel.app/", "_blank")
              }
            >
              Live Demo 🔗
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
