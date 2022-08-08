import Image from "next/image";
import React from "react";
import project1 from "../public/assets/about01.png";

const Property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          src={project1}
          layout="fill"
          objectFit="cover"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-y-[-50%]">
          <h2 className="py-2">project 1</h2>
          <h3 className="text-white">React Js/ Tailwind /Firebase </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>OverView</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            fugiat nam quia est maxime aperiam dolorem culpa quos laboriosam
            voluptatum, deserunt repellendus asperiores voluptatem, omnis
            voluptates labore earum praesentium! Nihil?
          </p>
          <button className="px-8 py-2 mr-8 mt-4">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-sm shadow-gray-400 rounded-xl p-4"></div>
      </div>
    </div>
  );
};

export default Property;
