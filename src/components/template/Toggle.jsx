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
      className="dark:text-yellow-500 dark:border-slate-400 border-none dark:border-[1px] dark:bg-gray-100 bg-slate-600 rounded-lg text-white p-3 w-12 h-12"
    >
      {theme === "dark" ? <FaMoon className="fill-blue-950" /> : <BsSunFill />}
    </button>
  );
};

export default Toggle;
