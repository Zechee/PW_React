// src/components/pastwork

import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { myWork } from "../data";

export default function PastWork() {
    return (
        <section id="pastwork">
            <div className="container px-5 py-10 mx-auto text-center">
                <BriefcaseIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Past Experience
                </h1>
                <p className="text-base mb-8">My professional journey is characterized by a series of impactful roles, each contributing to a rich and diverse experience in the technology sector.
                    From software development to educational roles, my career has been marked by a commitment to innovation, collaboration, and continuous learning.</p>

                <div className="flex flex-wrap m-4">
                    {myWork.map((pastwork, index) => (
                        <div key={index} className="flex flex-col md:flex-row bg-gray-800 bg-opacity-40 p-4 rounded-lg w-full mb-4">
                            
                            
                            {/* Image container, adjusted to show full image without cropping */}
                            <div className="md:w-1/4 w-full flex justify-center items-center overflow-hidden">
                                <img src={pastwork.image} alt="Company Logo" className="object-contain md:w-full w-auto h-auto md:h-full max-h-60" />
                            </div>

                            {/* Content container */}
                            <div className="flex-1 flex flex-col justify-start p-4">
                                <div className="text-white text-left text-2xl font-semibold">{pastwork.position}</div>
                                <div className="text-gray-400 text-left text-lg mb-2">{pastwork.company}</div>
                                
                                <div className="italic flex flex-col md:flex-row justify-between text-white mb-2">
                                    <div className="text-base  text-left md:mr-4">{pastwork.location}</div>
                                    <div className="text-base text-right">{pastwork.duration}</div>
                                </div>

                                <div className="flex flex-col justify-start ml-3">
                                    <ul className="text-gray-400 text-sm list-disc list-outside">
                                        {pastwork.detail.map((item, index) => (
                                            <li key={index} className="text-left py-1" >{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>



                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}