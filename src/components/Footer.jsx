import React from "react";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref: footerSectionRef, inView: footerSectionIsVisible } = useInView();
  return (
    <footer
      className="max-w-md mx-6 lg:mx-8 pb-16 text-sm text-slate-600 dark:text-slate-400 sm:pb-0"
      ref={footerSectionRef}
    >
      <p
        className={`delay3000 ${
          footerSectionIsVisible ? "animate-fadeInBottom" : ""
        }`}
      >
        <a
          href="https://www.figma.com/"
          className="border-b-[1px] border-b-sky-700 dark:border-b-sky-300 hover:text-sky-600 focus-visible:text-sky-700 dark:hover:text-sky-300 dark:focus-visible:text-sky-300 transition duration-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (opens in a new tab)"
        >
          Figma
        </a>
        で大まかに設計され、
        <a
          href="https://code.visualstudio.com/"
          className="border-b-[1px] border-b-sky-700 dark:border-b-sky-300 hover:text-sky-600 focus-visible:text-sky-700 dark:hover:text-sky-300 dark:focus-visible:text-sky-300 transition duration-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code
        </a>
        、
        <a
          href="https://nextjs.org/"
          className="border-b-[1px] border-b-sky-700 dark:border-b-sky-300 hover:text-sky-600 focus-visible:text-sky-700 dark:hover:text-sky-300 dark:focus-visible:text-sky-300 transition duration-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
        >
          Next.js
        </a>
        、
        <a
          href="https://tailwindcss.com/"
          className="border-b-[1px] border-b-sky-700 dark:border-b-sky-300 hover:text-sky-600 focus-visible:text-sky-700 dark:hover:text-sky-300 dark:focus-visible:text-sky-300 transition duration-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>
        を使用しています。
        <a
          href="https://github.co.jp/"
          className="border-b-[1px] border-b-sky-700 dark:border-b-sky-300 hover:text-sky-600 focus-visible:text-sky-700 dark:hover:text-sky-300 dark:focus-visible:text-sky-300 transition duration-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
        >
          Github
        </a>
        でプロジェクトを管理をしています。
        <br /> すべてのテキストは
        <a
          href="https://fonts.google.com/noto/specimen/Noto+Sans+JP"
          className="border-b-[1px] border-b-sky-700 dark:border-b-sky-300 hover:text-sky-600 focus-visible:text-sky-700 dark:hover:text-sky-300 dark:focus-visible:text-sky-300 transition duration-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Inter (opens in a new tab)"
        >
          "Noto Sans JP"
        </a>
        ,
        <a
          href="https://fonts.google.com/specimen/Lora?query=Lora&noto.query=Lora"
          className="border-b-[1px] border-b-sky-700 dark:border-b-sky-300 hover:text-sky-600 focus-visible:text-sky-700 dark:hover:text-sky-300 dark:focus-visible:text-sky-300 transition duration-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Inter (opens in a new tab)"
        >
          "Lora"
        </a>
        に設定しています。
      </p>
    </footer>
  );
};

export default Footer;
