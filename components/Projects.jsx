import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../public/assets/about01.png";
import project2 from "../public/assets/about02.png";
import project3 from "../public/assets/about03.png";
import project4 from "../public/assets/about04.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">My new Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={project1}
            projectUrl="/property"
          />
          <ProjectItem
            title="E-Commerce Shop"
            backgroundImg={project2}
            projectUrl="/property"
          />
          <ProjectItem
            title="Social Media"
            backgroundImg={project3}
            projectUrl="/property"
          />
          <ProjectItem
            title="Employee Management"
            backgroundImg={project4}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
