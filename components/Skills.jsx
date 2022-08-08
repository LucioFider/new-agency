import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I use</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/redux.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/api.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>APIs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/node.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/graphql.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GraphQl</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mu5.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Material UI</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/git.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/flutter.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Flutter</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/typescript.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-sm rounded-xl hover:scale-105 ease-in duration-300 border border-gray-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/sass.png"
                  alt=""
                  width="64"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SASS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
