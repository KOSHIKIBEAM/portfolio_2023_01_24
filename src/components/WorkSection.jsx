import React from "react";

const WorkSection = ({ src }) => {
  return (
    <section
      id="work"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div class="py-14 sm:py-22">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Work</h2>
            <p class="mt-2 text-lg leading-8 ">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 pt-10 lg:mx-0 lg:max-w-none lg:grid-rows-3">
            {src.map((elem) => (
              <React.Fragment key={elem.key}>
                <article class="flex max-w-xl flex-col items-start py-4 sm:py-8 justify-between border-t border-gray-700">
                  <div class="flex items-center gap-x-4 text-xs">
                    <time datetime={elem.date} class="">
                      {elem.date}
                    </time>
                    <div class="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-900 hover:bg-slate-900 border-[1px] border-gray-100 duration-[275ms] hover:text-gray-100 hover:border-solid">
                      {elem.label}
                    </div>
                  </div>
                  <a
                    href={elem.url}
                    className="flex items-center justify-between gap-8 pt-3"
                  >
                    <div className="w-1/4">
                      <img src={elem.img} alt={elem.title} class="" />
                    </div>
                    <div class="group relative w-3/4">
                      <h3 class="text-lg font-semibold leading-6 group-hover:">
                        <div>
                          <span class="absolute inset-0"></span>
                          {elem.title}
                        </div>
                      </h3>
                      <p class="mt-5 line-clamp-3 text-sm leading-6 ">
                        {elem.text}
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
