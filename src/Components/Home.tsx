import Lottie from "lottie-react";
import github from "../assets/github01.json";
import linkedIn from "../assets/linkedin01.json";
import navya from "../assets/coding.json";

import { useSetTheme } from "../ThemeContext";

const profiles = [
  {
    app: "LinkedIn",
    url: linkedIn,
    hoverUrl: "https://cdn-icons-png.flaticon.com/128/145/145807.png",
    redirectUrl: "https://www.linkedin.com/in/navyasri-maskani-387631190/",
  },
  {
    app: "GitHub",
    url: github,
    hoverUrl: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
    redirectUrl: "https://github.com/Navya050/",
  },
];

const techStack = [
  {
    app: "Javascript",
    icon: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/javascript-3.png",
  },
  {
    app: "Typescript",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFgnZ04TSFLaNN1dJBzBRw7sXvMxZQOjvfA&usqp=CAU",
  },
  {
    app: "HTML-5",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
  },

  {
    app: "CSS-3",
    icon: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
  },
  {
    app: "React Js",
    icon: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
  },

  {
    app: "Tailwind",
    icon: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
  },

  {
    app: "MySQL",
    icon: "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
  },
];

function Home() {
  const { theme } = useSetTheme();

  return (
    <>
      <div
        id="home"
        className="home min-h-[50vh] h-auto flex md:flex-row flex-col-reverse  items-center justify-around gap-5"
      >
        <div className="md:text-left text-center">
          <span className="font-bold text-3xl mb-3">
            Web <span className="text-[#1ED760]"> Developer 🧋</span>
          </span>
          <p className="text-[14px] mt-3 text-slate-400">
            Hi, I'm Navyasri Maskani. A passionate{" "}
            <span className="whitespace-nowrap">Web Developer</span>
            {/* <br /> based in Chicago, USA📍 */}
          </p>
          <div className="flex items-center justify-center md:justify-normal gap-2">
            {profiles.map((profile) => (
              <span>
                <div
                  className="w-[40px] cursor-pointer"
                  onClick={() => (window.location.href = profile.redirectUrl)}
                >
                  <Lottie
                    animationData={profile.url}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </span>
            ))}
          </div>
          <span className="flex md:flex-row flex-col gap-3 items-center">
            Tech Stack |
            <span className="flex flex-wrap justify-center gap-1">
              {techStack.map((tech) => (
                <div className={`${theme === "dark" && "bg-black"} p-1`}>
                  <img
                    src={tech.icon}
                    className="w-[20px] h-[20px] object-cover rounded-full"
                    alt={tech.app}
                    title={tech.app}
                  />
                </div>
              ))}
            </span>
          </span>
          <button
            className=" text-[#1ED760] rounded-md mt-2 mr-3"
            onClick={() => window.open("/NAVYARESUME.pdf", "_blank")}
          >
            View Resume 🔗
          </button>

          <a
            href="/NAVYARESUME.pdf"
            download
            className="text-[#1ED760] rounded-md mt-2 inline-block"
          >
            Download Resume 🔻
          </a>
        </div>
        <div className="md:w-[400px] w-full">
          <Lottie animationData={navya} loop={true} autoplay={true} />
        </div>
      </div>
    </>
  );
}

export default Home;
