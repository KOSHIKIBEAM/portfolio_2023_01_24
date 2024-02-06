import React from "react";

const WorkSection = ({ src }) => {
  return (
    <section
      id="work"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="py-14 sm:py-22">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl pb-10 font-bold tracking-tight sm:text-4xl">
              Work
            </h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 pt-10 lg:mx-0 lg:max-w-none lg:grid-rows-3">
            {src.map((elem, i) => (
              <React.Fragment key={elem.key}>
                <article
                  style={{ order: -i }}
                  className="flex max-w-xl flex-col items-start py-4 sm:py-8 justify-between border-t first:border-b border-gray-700 dark:border-gray-400"
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
                    className="flex items-center justify-between gap-8 pt-3 transition duration-300 hover:opacity-70"
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
                      <p className="mt-2 text-xs line-clamp-3 md:text-sm md:leading-6 normal-case">
                        ユーザー名: {elem.user}、パスワード: {elem.pass}
                      </p>
                    </div>
                  </a>
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
