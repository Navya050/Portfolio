import Lottie from "lottie-react";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import about from "../assets/code.json";
import github from "../assets/github.json";
import { NodeIcon } from "../assets/Icons";
import { useSetTheme } from "../ThemeContext";

function About() {
  const GIT_REPO_URL =
    "https://api.github.com/search/repositories?q=user:Navya050";

  const [repoData, setRepoData] = useState([]);
  const { theme } = useSetTheme();

  async function getRepos() {
    let yearCount: any = [];
    const repos = await fetch(GIT_REPO_URL);
    const data = await repos.json();
    data.items.forEach((item: any) => {
      const year = moment(item.updated_at).year();
      const existingYearIndex = yearCount.findIndex(
        (entry: any) => entry.year === year
      );
      if (existingYearIndex !== -1) {
        yearCount[existingYearIndex].count += 1;
      } else {
        yearCount.push({ year, count: 1 });
      }
    });

    setRepoData(yearCount);
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      <div
        id="about"
        className="min-h-[50vh] w-full h-auto flex md:flex-row flex-col-reverse mt-4 md:mt-0 items-center justify-center"
      >
        <div className="md:w-[500px] w-full">
          <Lottie animationData={about} loop={true} autoplay={true} />
        </div>
        <div className="mb-2 w-[100%] md:w-[70%]">
          <p className="text-[#1ED760] font-semibold uppercase">About Me 🧑‍🎓</p>
          {/* <p className="md:whitespace-nowrap font-bold">
            A Web Developer based in Chicago, USA📍
          </p> */}
          <p className="text-slate-400">
             Computer Science graduate student at Northeastern Illinois University 
             with a passion for developing innovative software solutions. 
             My academic foundation in Data Mining, AI, and Database Systems complements 
             my hands-on experience building web applications. Currently focusing on 
             deepening my technical knowledge across cryptography, AI, and advanced software design 
             while pursuing opportunities to apply these skills in professional environments.
            <br />
            <br /> I've independently developed and deployed several personal projects using
             React.js, JavaScript, and modern front-end technologies. Projects such as Wordle Master, 
             Infi Scroll, and Quiz Craft showcase my ability to create intuitive, responsive user interfaces 
             while applying sound software development principles. Recently recognized at NEIU Eagle HackFest 2025 
             for developing an innovative software solution addressing real-world challenges.
          </p>
        </div>
      </div>

      <div className="h-[60vh] flex flex-col-reverse gap-3 md:flex-row-reverse  md:items-center mt-3 mx-auto">
        <>
          <ResponsiveContainer width="90%" height="100%">
            <AreaChart
              width={630}
              height={150}
              data={repoData}
              margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="count"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </>

        <div className="md:w-[180px] w-[150px] flex md:flex-row flex-row-reverse items-center gap-3">
          <p className="whitespace-nowrap text-[#1ED760] font-semibold uppercase">
            Github stats
          </p>
          <Lottie animationData={github} loop={true} autoplay={true} />
        </div>
      </div>

      <div className="w-full min-h-[10vh] mt-[60px] relative">
        <p className="text-[#1ED760] font-semibold uppercase">Experience 💻</p>
        <p className="font-semibold mb-3">25 Months (2 Years 1 Month)</p>
        <div
          className={`absolute top-[58px] ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <NodeIcon />
        </div>

        <div
          className={`absolute md:bottom-[48px] bottom-[70px] ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <NodeIcon />
        </div>
        <div className="ml-3 border-l-2 border-solid border-[#1ED760]">
          <div className="ml-4">
            <p className="md:whitespace-nowrap">
              Accenture Solutions Private Limited Hyderabad, India📍
            </p>
            <p className="italic">October 2021 – December 2023</p>
            <p className="font-semibold">Application Development Associate</p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[10vh] mt-[60px] relative">
        <p className="text-[#1ED760] font-semibold uppercase">Education 📖</p>
        <p className="font-semibold mb-3">&nbsp;</p>
        <div
          className={`absolute top-[58px] ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <NodeIcon />
        </div>

        <div
          className={`absolute md:bottom-[48px] bottom-[70px] ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <NodeIcon />
        </div>
        <div className="ml-3 border-l-2 border-solid border-[#1ED760]">
          <div className="ml-4">
            <p className="md:whitespace-nowrap">
              NorthEastern Illinois University Chicago, Illinois📍
            </p>
            <p className="italic">January 2024 – Present</p>
            <p className="font-semibold">Master's in Computer Science</p>
          </div>
        </div>

        <div className="ml-3 pt-3 border-l-2 border-solid border-[#1ED760]">
          <div className="ml-4">
            <p className="md:whitespace-nowrap">
              Sri Vasavi Engineering College Tadepalligudem, India📍
            </p>
            <p className="italic">July 2017 – 2021 May</p>
            <p className="font-semibold">Bachelor's in Computer Science</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
