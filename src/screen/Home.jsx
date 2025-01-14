import React from 'react';
import Layout from '../components/layout';

const HomeScreen = () => {
  return (
    <Layout>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#121a21] dark group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="@[480px]:px-4 @[480px]:py-3">
                  <div
                    className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#121a21] @[480px]:rounded-xl min-h-[218px]"
                    style={{
                      backgroundImage: `url(
                        'https://cdn.usegalileo.ai/sdxl10/4dc461c3-7fc6-41e3-a129-34b02aed57ec.png'
                      )`,
                    }}
                  ></div>
                </div>
              </div>
              <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
                Hi, I'm Andy.
              </h2>
              <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                I'm a passionate front-end developer with five years of
                experience in building responsive web applications. My expertise
                includes JavaScript, HTML, CSS, and modern frameworks such as
                React. I'm also skilled in UI/UX design, having created many
                visually appealing and intuitive user interfaces. When I'm not
                coding, you can find me exploring the great outdoors or
                experimenting with new recipes in the kitchen.
              </p>
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Skills &amp; Expertise
              </h2>
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#263745] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">
                    JavaScript
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#263745] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">
                    React
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#263745] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">
                    Vue
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#263745] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">
                    Svelte
                  </p>
                </div>
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#263745] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">
                    UI/UX Design
                  </p>
                </div>
              </div>
              <div className="flex px-4 py-3">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#263745] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Light Theme</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(HomeScreen);
