import React, { useState, useEffect } from "react";
import Toggle from "./template/Toggle";
import SelectButton from "./template/SelectButton";
import { useTranslation } from "react-i18next";
import github_icon from "../../public/assets/img/github-mark.png";
import { useInView } from "react-intersection-observer";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

const Header = () => {
  const { t } = useTranslation();
  const width = useWindowWidth();
  const { ref: headerSectionRef, inView: headerSectionIsVisible } = useInView();

  return (
    <header
      className="lg:sticky lg:max-h-screen lg:top-0 lg:py-24 mx-auto max-w-2xl"
      ref={headerSectionRef}
    >
      {width > 1024 ? (
        <div
          className={`lg:flex h-full lg:flex-col lg:justify-between ${
            headerSectionIsVisible ? "animate-fadeInLeft" : ""
          }`}
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              KOSHIKI BEAM
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
              front end developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal flex items-center flex-wrap">
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
              Ｕ―２３日本、韓国に敗れ２位通過…準々決勝で開催国カタールと対戦
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
        </div>
      ) : (
        <div className="lg:flex h-full lg:flex-col lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              KOSHIKI BEAM
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
              front end developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal flex items-center flex-wrap">
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
              Ｕ－２３アジア杯は日本がウズベキスタン破り優勝
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
        </div>
      )}
    </header>
  );
};

export default Header;
