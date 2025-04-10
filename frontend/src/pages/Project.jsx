/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Rocket from "../assets/Project/Rocket.webp";
import Project_bg from "../assets/Project/BG.png";
import "../../public/styles/slider.css";
import vision1 from "../assets/Vision1.png";
import Programs from "../components/About/Programs";
// import { ProjectDataContext } from "../context/ProjectContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const Project = () => {
  const [singleProject, setSingleProject] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/project/getproject/${id}`
        );
        if (response.status === 200) {
          const data = await response.data;
          setSingleProject(data);
          // console.log(data, "one project data");
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    fetchProject();
  }, [id]);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${Project_bg})` }}
        className="md:mt-[99px] mt-[74px] min-h-[300px] md:min-h-[563px] relative bg-cover bg-center bg-no-repeat w-full"
      ></div>
      <div className="bg-[#231F20] h-[50px] md:h-[170px] relative border-b-4 border-[#231F20] "></div>
      <div className="absolute top-[74px] md:top-[99px] w-full flex flex-col justify-center items-center">
        <div className="text-[24px] md:text-[40px] text-center md:leading-[50px] font-[800] nunito-font pt-[24px] md:pt-[60px]">
          {singleProject ? singleProject.title : "Loading..."}
        </div>
        <img
          className="max-w-[335px] md:max-w-[800px] min-h-[296px]  md:min-h-[530px]  object-contain  bg-no-repeat pt-[24px] md:pt-12 "
          src={singleProject ? singleProject.projectUrl.url : "Loading..."}
          alt=""
        />
      </div>
      <div className="bg-[#231F20] w-full flex items-center justify-center ">
        <div className=" text-white nunito-font h-full  flex flex-col gap-[16px] mb-[30px] md:mb-[60px] p-[20px] w-[93%] md:w-[78%] ">
          <div>{singleProject ? singleProject.aboutProject : "Loading..."}</div>
          {singleProject?singleProject.description.split("\n").map((sentence, i) => (
            <p key={i}>{sentence.trim() && `${sentence.trim()}.`}</p>
          )) : "Loading..."}
          
        </div>
      </div>
      <div style={{ backgroundImage: `url(${vision1})` }}>
        <div className="h-auto  pb-[20px] md:pb-[60px]  w-full bg-white/50  flex flex-col md:flex-row justify-center md:justify-around  items-center text-white z-30">
          <Programs />
        </div>
      </div>
    </div>
  );
};

export default Project;
