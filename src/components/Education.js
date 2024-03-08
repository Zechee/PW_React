// src/components/pastwork

import React from "react";
import {AcademicCapIcon } from "@heroicons/react/solid";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Education Background
        </h1>
        <p className="text-base">Drawing upon a solid educational foundation in technology, I hold a Master of Information Technology from the Southern Institute of Technology in New Zealand. 
          This degree was not just a testament to my academic capabilities, but also a milestone acknowledged by the SBS Bank Award for Academic Excellence in November 2022, reflecting my commitment to the field of IT.</p>
        <div className="flex justify-start flex-wrap text-wrap m-4">
          {education.map((education) => (
            <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <div className="text-left">
                <div className=" text-blue-600/100 font-bold inline-block text-2xl text-white">{education.programName}</div>
              </div>
              <div className="text-left text-xg font-semibold text-white">{education.schoolName}</div>
              <div className="text-white">
                <div className="flex flex-row py-5">
                  <span className="italic">{education.location}</span>
                  <span className="italic px-9">{education.finishDate}</span>
                </div>
              </div>
              <div className="pb-5 text-left">{education.award && <div><a className="font-bold">Award</a>: {education.award}</div>}</div>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
}