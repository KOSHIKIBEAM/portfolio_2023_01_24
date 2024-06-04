import React from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref: aboutSectionRef, inView: aboutSectionIsVisible } = useInView();
  const { ref: sectionTitleRef, inView: sectionTitleIsVisible } = useInView();

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      ref={sectionTitleRef}
    >
      <h2
        className={`text-3xl font-bold pb-10 tracking-tight sm:text-4xl delay2000 ${
          sectionTitleIsVisible ? "animate-fadeInBottom" : ""
        }`}
      >
        About
      </h2>
      <div ref={aboutSectionRef}>
        <div
          className={`delay2500 ${
            aboutSectionIsVisible ? "animate-fadeInBottom" : ""
          }`}
        >
          長崎市を拠点にホームページ制作を行うフロントエンドエンジニアです。
          高品質のWEB制作サービスを提供しております。フルリモートで作業を行なっているので、小回りがきくところが自分の武器です。必要な施策をご提案し、一般的な制作会社よりも安価に制作することが可能です。日本全国からのご依頼にも対応していますので「こんなホームページを作りたい」「こんなことで困っている」などございましたらお気軽にお問い合わせください。これからは
          <a
            href="https://ja.react.dev/"
            className="border-b-[1px] border-b-sky-700 dark:border-b-sky-300 hover:text-sky-600 focus-visible:text-sky-700 dark:hover:text-sky-300 dark:focus-visible:text-sky-300 transition duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visual Studio Code (opens in a new tab)"
          >
            React
          </a>
          、
          <a
            href="https://developer.mozilla.org/ja/docs/Web/JavaScript"
            className="border-b-[1px] border-b-sky-700 dark:border-b-sky-300 hover:text-sky-600 focus-visible:text-sky-700 dark:hover:text-sky-300 dark:focus-visible:text-sky-300 transition duration-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visual Studio Code (opens in a new tab)"
          >
            JavaScript
          </a>
          をもっともっと勉強して、Webアプリを作っていきたいです。
          <br />
          <br />
          <span className="font-bold">”KOSHIKI”</span>
          とは漢字で、『轂』。意味は車輪の中心、ハブの部分。 <br />
          <span className="font-bold">”BEAM”</span>
          の意味は微笑みです。
          <br />
          <span className="font-bold">“KOSHIKI BEAM”</span>
          とは車輪の中心を大事にしながら、微笑みを創作するという意味があります。
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
