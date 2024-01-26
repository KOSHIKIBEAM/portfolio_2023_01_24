import React from "react";
import Toggle from "../template/Toggle";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          KOSHIKI BEAM
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          front end developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          <a
            href="mailto:koshikibeam@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            koshikibeam@gmail.com
          </a>
        </p>
        <h3 className="mt-10 text-lg font-medium tracking-tight sm:text-xl">
          このたびの能登半島地震に対し、心よりお見舞い申し上げます。
          <br />
          皆様の一日も早いご再建をお祈りいたします。
        </h3>
      </div>
      <nav className="nav hidden lg:block">
        <ul>
          <li className="pb-14 pl-10">
            <a href="#skill">
              <span class="relative flex h-3 w-3">
                <span class="animate-bound absolute top-1/2 left-[-1.8rem] inline-flex h-full w-full rounded-full bg-sky-400 opacity-100"></span>
                <span className="text-lg">skill</span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </a>
          </li>
          <li className="pb-14 pl-10">
            <a href="#work">
              <span class="relative flex h-3 w-3">
                <span class="animate-bound absolute top-1/2 left-[-1.8rem] inline-flex h-full w-full rounded-full bg-sky-400 opacity-100"></span>
                <span className="text-lg">work</span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row items-center">
        <Toggle />
        <select name="language" className="ml-10">
          <option value="japanese">日本語</option>
          <option value="english">英語</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
