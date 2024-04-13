import React from "react";
import Toggle from "./template/Toggle";
import SelectButton from "./template/SelectButton";
import { useTranslation } from "react-i18next";
import github_icon from "../../public/assets/img/github-mark.png";

const Header = () => {
  const { t } = useTranslation();

  const releaseDate = new Date("2024-01-29");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          KOSHIKI BEAM
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          front end developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal flex items-center">
          <a
            className="border-b-[1px] border-b-sky-700 dark:border-b-sky-300 hover:text-sky-600 focus-visible:text-sky-700 dark:hover:text-sky-300 dark:focus-visible:text-sky-300 transition duration-300 mr-5"
            href="mailto:koshikibeam@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            koshikibeam@gmail.com
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/KOSHIKIBEAM"
            className="w-6 h-6"
          >
            <img src={github_icon} alt="github_icon" />
          </a>
        </p>
        <h3 className="mt-10 text-xs sm:text-sm font-normal tracking-tight">
          大谷翔平、メジャー通算１７５本塁打…松井秀喜氏の日本人最多に並ぶ
        </h3>
      </div>
      <nav className="nav hidden lg:block my-[25px]">
        <ul>
          <li className="pb-14 pl-10">
            <a href="#about">
              <span className="relative flex h-3 w-3">
                <span className="animate-bound1 absolute top-1/2 left-[-1.8rem] inline-flex h-full w-full rounded-full bg-sky-400 opacity-100"></span>
                <span className="text-lg">about</span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </a>
          </li>
          <li className="pb-14 pl-10">
            <a href="#skill">
              <span className="relative flex h-3 w-3">
                <span className="animate-bound2 absolute top-1/2 left-[-1.8rem] inline-flex h-full w-full rounded-full bg-sky-400 opacity-100"></span>
                <span className="text-lg">skill</span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </a>
          </li>
          <li className="pb-14 pl-10">
            <a href="#work">
              <span className="relative flex h-3 w-3">
                <span className="animate-bound3 absolute top-1/2 left-[-1.8rem] inline-flex h-full w-full rounded-full bg-sky-400 opacity-100"></span>
                <span className="text-lg">work</span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex mt-4 md:mt-0 justify-start items-center">
        <Toggle />
        {/* <SelectButton /> */}
      </div>
    </header>
  );
};

export default Header;
