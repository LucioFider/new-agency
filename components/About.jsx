import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">I am not your normal developer</p>
          <p className="text-gray-600">
            I am a computer technician turned web developer. On my previous
            jobs, I have worked as an Admin Officer, computer salesperson and IT
            support officer. My interest in programming begun when I was taking
            an Oracle Database Administration course at Datec Training Center. I
            also have a background in Communication Arts(Journalism) from Divine
            Word University.
          </p>
          <p className="py-2 text-gray-600">
            In 2019, I decided to spend more time learning programming. I really
            enjoyed working on online web applications. So Web Development is
            the route I enjoyed and still am today.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/banner.webp"
            e
            alt="logo"
            width="700"
            height="650"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
