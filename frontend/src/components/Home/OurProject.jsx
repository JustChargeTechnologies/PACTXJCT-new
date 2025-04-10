/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import "../../../public/styles/slider.css";
import { FaArrowCircleRight } from "react-icons/fa";
// import project1 from "../../assets/Home/project1.jpeg";
import vision1 from "../../assets/Vision1.png";
import { ProjectDataContext } from "../../context/ProjectContext";
import { Link } from "react-router-dom";
import axios from "axios";

const OurProject = () => {
  // const images = new Array(6).fill(project1);
  // const { project, setProject } = useContext(ProjectDataContext);
  // console.log(project, "project data");
  // console.log(project[0].title, "project title");
  const { project, setProject } = useContext(ProjectDataContext);
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/project/getproject`
        );
        if (response.status === 200) {
          const data = await response.data;
          setProject(data);
          // console.log(data,"project data")
        }
      } catch (error) {
        console.error("Error fetching project all data:", error);
      }
    };
    fetchProject();
  }, []);

  return (
    <div
      className="relative h-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${vision1})` }}
    >
      <div className=" bg-[#EDF8FFB2]  h-auto  w-full">
        <div className="heading-section flex justify-center">
          <div className=" text-center py-5 mb-5  ">
            <div className="text-[14px] flex items-center justify-center text-[#6E6E6E] nunito-font font-semibold">
              <div className="min-w-[76px] border-1 h-0  mr-4"></div>
              <div>OUR PROJECTS</div>
              <div className="min-w-[76px] border-1 h-0  ml-4"></div>
            </div>
            <h2 className="text-[40px] nunito-font mt-3 font-[800] ">
              Explore our{" "}
              <span className="text-[#8EC641] margarine-font">current</span>{" "}
              running programs
            </h2>
          </div>
        </div>
       
        <div className=" flex flex-col justify-center items-center w-full ">
          <div className="w-[80%] md:w-[70%] ">
            {project && project.length > 0 ? (
              project.map((item, indx) => (
                <div
                  key={indx}
                  className={`bg-white h-auto flex flex-col mb-8 ${
                    indx % 2 === 0 ? "md:rounded-l-2xl" : "md:rounded-r-2xl"
                  } rounded-t-2xl md:rounded-t-[0]`}
                >
                  <div
                    className={`flex ${
                      indx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } justify-center md:justify-between flex-wrap`}
                  >
                    <div className="left-section max-w-[537px] min-h-[334px]">
                      <img
                        className={`${
                          indx % 2 === 0
                            ? "md:rounded-l-2xl"
                            : "md:rounded-r-2xl"
                        } rounded-t-2xl md:rounded-t-[0]`}
                        src={item.projectUrl.url}
                        alt=""
                      />
                    </div>
                    <div className="right-section max-w-[520px] p-2 md:p-0 mt-[-120px] md:mt-0 h-auto  md:py-10  mx-auto">
                      <div className="">
                        <h2 className="nunito-font font-[700]  text-[24px]">
                          {item.title}
                        </h2>
                        <div className="text-[16px] leading-[154%] mt-4 tracking-[-2%] nunito-font font-[300]">
                          {item.aboutProject}
                        </div>
                        <Link
                          to={`/about/project/${item._id}`}
                          className="flex justify-center items-center  text-white bg-[#8EC641] mt-6 rounded-full h-[46.09px] w-[144.09px]"
                        >
                          <span className="text-[12px] font-[400]">
                            Know More
                          </span>
                          <div className="pr-2 ml-3">
                            <FaArrowCircleRight />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-center mt-10">
                No projects available at the moment.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
