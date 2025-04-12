
import React, { useContext, useEffect } from "react";
import "../../../public/styles/slider.css";
import { FaArrowCircleRight } from "react-icons/fa";
import vision1 from "../../assets/Home/project_bg.webp";
import { ProjectDataContext } from "../../context/ProjectContext";
import { Link } from "react-router-dom";
import axios from "axios";

const OurProject = () => {
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
        }
      } catch (error) {
        console.error("Error fetching project all data:", error);
      }
    };
    fetchProject();
  }, [setProject,project]);

  return (
    <div
      className="relative h-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${vision1})` }}
    >
      <div className=" h-auto  w-full">
        <div className="heading-section flex justify-center">
          <div className=" text-center py-5 mb-5  ">
            <div className="text-[14px] flex items-center md:mt-8  justify-center text-[#6E6E6E] nunito-sans font-semibold">
              <div className="min-w-[76px] border-1 h-0  mr-4"></div>
              <div>OUR PROJECTS</div>
              <div className="min-w-[76px] border-1 h-0  ml-4"></div>
            </div>
            <h2 className="text-[36px] nunito-sans mt-3 font-[800] ">
              Explore our{" "}
              <span className="text-[#8EC641] italic">current</span>{" "}
              running programs
            </h2>
          </div>
        </div>
       
        <div className=" flex flex-col justify-center items-center w-full ">
          <div className="w-[80%] xl:w-[80%] 2xl:w-[70%]">
            {project && project.length > 0 ? (
              project.map((item, indx) => (
                <div
                  key={indx}
                  className={`bg-white h-auto flex flex-col mb-8 ${
                    indx % 2 === 0 ? "md:rounded-2xl" : "md:rounded-2xl"
                  } rounded-2xl`}
                >
                  <div
                    className={`flex ${
                      indx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } justify-center md:justify-between flex-wrap`}
                  >
                    <div className="left-section max-w-[537px] md:max-w-[560px] min-h-[334px] md:max-h-[379px]">
                      <img
                        className={`${
                          indx % 2 === 0
                            ? "md:rounded-l-2xl"
                            : "md:rounded-r-2xl"
                        } rounded-t-2xl md:rounded-t-[0]`}
                        loading="lazy"
                        src={item.projectUrl.url}
                        alt=""
                      />
                    </div>
                    <div className="right-section max-w-[520px] px-4 md:px-10 mt-[-120px] md:mt-0 h-auto  py-8 md:py-10   mx-auto">
                      <div className="">
                        <h2 className="nunito-sans font-[700]  text-[24px]">
                          {item.title}
                        </h2>
                        <div className="text-[16px] leading-[154%] mt-4 tracking-[-2%] nunito-sans font-[300]">
                          {item.aboutProject}
                        </div>
                        <Link
                          to={`/about/project/${item._id}`}
                          className="flex justify-center items-center  text-white bg-[#8EC641] mt-6 rounded-xl h-[46.09px] w-[144.09px]"
                        >
                          <span className="text-[12px] md:text-[18px] font-[400]">
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
