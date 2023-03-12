import React, { useState } from "react";
import p1 from "../images/projects/farm.png";
import p2 from "../images/projects/fw.png";
import p3 from "../images/projects/tw.png";
import p4 from "../images/projects/cprint.png";
import p5 from "../images/projects/undp.png";
import p6 from "../images/projects/evercomm.png";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Projects = () => {

  return (
    <>
      <div className="w-full" id="Projects">
        <div className="max-w-[1240px] mx-auto px-2 text-center my-5">
          <h1 className="text-2xl font-bold pb-8">Projects</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {projectData?.map((v, i) => {
              return (
                <div key={i} className="max-w-md">
                  <div className="relative ">
                    <Image
                      className="w-full h-full p-4 "
                      layout="responsive"
                      src={v.img}
                      alt="/"
                    />

                    <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/60 group">
                      <div className="text-gray-300 text-sm hidden group-hover:block ">   
                        <span className='z-10 p-2'> {v.name} <br/><br/> {v.detail}</span><br/>
                      </div>
                    </div>
                  </div>
                  <Link href={v.link}>{v.link}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;

const projectData = [
  {
    img: p1,
    name: "Vertical_farm",
    detail:
      "Analyzed Data and Implemented visualize dashboard UI for monitoring vertical farm and Created User friendly Data Input Panel.",
    link: "http://128.199.168.205:5002",
  },
  {
    img: p2,
    name: "Food_Waste",
    detail:
      "Calculate amount of Wasted Food and show detail with interactive charts of wasted food.",
    link: "http://172.104.40.242:7000",
  },
  {
    img: p3,
    name: "Tailwan_Centralize",
    detail:
      "Complement UI/UX about Acbel chiller UI, Data Analysis, Report Data Quality and Controllable System.",
    link: "http://tc.evercomm.com:47080/",
  },
  {
    img: p4,
    name: "Container_Printer",
    detail:
      "Device Monitoring Platform , Filtering Data, Show Overview Data and Real time Energy monitoring.",
    link: "http://128.199.168.205:5002",
  },
  {
    img: p5,
    name: "UNDP",
    detail:
      "Create Sustainable Development Goal targets monitoring dashboard and Digital Maturity Assessment Survey Platform.",
    link: "http://172.104.40.242:7878",
  },
  {
    img: p6,
    name: "Evercomm",
    detail: "Evercomm Company Website",
    link: "https://www.evercomm.com/",
  },
];
