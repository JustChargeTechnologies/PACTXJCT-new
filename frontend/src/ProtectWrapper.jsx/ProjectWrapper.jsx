/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { ProjectDataContext } from "../context/ProjectContext";
import axios from "axios";

const ProjectWrapper = ({children}) => {
  const { project, setProject } = useContext(ProjectDataContext);
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/project/getproject`);
        if (response.status === 200) {
            const data = await response.data;
            setProject(data);
            // console.log(data,"project data")
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    fetchProject();
  },[]);
  return (
    <div>{children}</div>
  );
};

export default ProjectWrapper;
