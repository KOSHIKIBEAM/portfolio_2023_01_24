import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const Toggle = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className="text-yellow-500 border-slate-400 dark:border-none border-[1px] bg-gray-100 dark:bg-slate-600 rounded-lg dark:text-white p-3"
    >
      {theme === "dark" ? <FaMoon /> : <BsSunFill />}
    </button>
  );
};

export default Toggle;
