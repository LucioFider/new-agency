import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets build your application together.
          </p>
          <h1 className="py-4 text-gray-700">
            Hi Im <span className="text-[#5651e5]">Fider</span>
          </h1>
          <h1 className="py-2 text-gray-700">A front-End Web Developer</h1>
          <p className="py-4 text-gray-600 text-sm max-w-[70%] m-auto">
            Specialized in building (and occasionally designing) exceptional
            digital experiences. Currently, Im focused on building responsive
            front-end web applications while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="socialIcon">
              <FaLinkedinIn />
            </div>
            <div className="socialIcon">
              <FaGithub />
            </div>
            <div className="socialIcon">
              <AiOutlineMail />
            </div>
            <div className="socialIcon">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
