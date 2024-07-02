import React from "react";
// import GithubIcon from "./template/GithubIcon";
import github_icon from "../../public/assets/img/github-mark.png";
import { useInView } from "react-intersection-observer";

const WorkSection = ({ src, github_url }) => {
  const { ref: workSectionRef, inView: workSectionIsVisible } = useInView();
  const { ref: sectionTitleRef, inView: sectionTitleIsVisible } = useInView();
  return (
    <section
      id="work"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="py-14 sm:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0" ref={sectionTitleRef}>
            <h2
              className={`text-3xl pb-10 font-bold tracking-tight sm:text-4xl ${
                sectionTitleIsVisible ? "animate-fadeInBottom" : ""
              }`}
            >
              Work
            </h2>
          </div>
          <div
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 pt-10 lg:mx-0 lg:max-w-none lg:grid-rows-3"
            ref={workSectionRef}
          >
            {src.map((elem, i) => (
              <React.Fragment key={elem.key}>
                <article
                  className={`article flex flex-col items-start py-4 sm:py-8 justify-between border-t last:border-b border-gray-700 dark:border-gray-400 ${
                    workSectionIsVisible ? "animate-fadeInBottom" : ""
                  }`}
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time datetime={elem.date} className="">
                      {elem.date}
                    </time>
                    <div className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 dark:text-gray-200 border-[1px] border-gray-600 dark:border-gray-200">
                      {elem.label}
                    </div>
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={elem.url}
                    className="flex items-center justify-between gap-8 py-[20px] transition duration-300 hover:opacity-70"
                  >
                    <div className="w-1/4">
                      <img src={elem.img} alt={elem.title} className="border" />
                    </div>
                    <div className="group relative w-3/4">
                      <h3 className="md:text-lg text-base font-semibold md:leading-6 group-hover:">
                        <div>
                          <span className="absolute inset-0"></span>
                          {elem.title}
                        </div>
                      </h3>
                    </div>
                  </a>
                  {(() => {
                    if (elem.text) {
                      return <p className="pb-3 text-xs"> {elem.text}</p>;
                    } else {
                      return null;
                    }
                  })()}

                  <div className="flex items-center w-full">
                    {(() => {
                      if (elem.user) {
                        return (
                          <div className="text-xs line-clamp-3 md:text-sm md:leading-6 sm:pr-7 pr-9 normal-case">
                            <span className="sm:mr-3">Basic認証</span>
                            <br className="sm:hidden" />
                            <span className="sm:mr-2">
                              ユーザー名：{elem.user}
                            </span>
                            <br className="sm:hidden" />
                            <span>パスワード：{elem.pass}</span>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })()}
                    {(() => {
                      if (elem.github) {
                        return (
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href={elem.github_url}
                            className="flex items-center justify-between w-8 h-8 hover:opacity-70"
                          >
                            <img src={github_icon} alt="GithubIcon" />
                          </a>
                        );
                      } else {
                        return null;
                      }
                    })()}
                  </div>
                </article>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
