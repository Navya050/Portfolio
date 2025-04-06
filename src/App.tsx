import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import woid from "./assets/woid.png";
import snapnews from "./assets/snapnews.png";
import animation from "./assets/techs.json";
import Lottie from "lottie-react";
import moment from "moment";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { ThemeProvider } from "./ThemeContext";
import ComponentWrapper from "./Components/ComponentWrapper";

function App() {
  const [experience, setExperience] = useState(0);
  const targetExperience = 2;
  const duration = 100;

  useEffect(() => {
    if (experience < targetExperience) {
      const timer = setTimeout(() => {
        setExperience((prev) => prev + 1);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [experience]);

  return (
    <ThemeProvider>
      <ComponentWrapper />
    </ThemeProvider>
  );
}

export default App;
