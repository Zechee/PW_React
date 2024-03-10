import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            As a Full Stack Developer with a strong foundation in the .NET core and .NET framework, also a commitment to delivering high-quality software solutions,
            I excel in designing, building, and maintaining efficient, reusable, and reliable code.
            <br />
            <br />
            My experience spans developing comprehensive management systems and enhancing user experiences in fast-paced environments.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="sm:w-1/2 w-full p-4">
              <div className="flex relative h-64"> {/* 设置一个固定的高度 */}
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 overflow-hidden"> {/* 确保内容不会溢出 */}
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>



      </div>
    </section>
  );
}