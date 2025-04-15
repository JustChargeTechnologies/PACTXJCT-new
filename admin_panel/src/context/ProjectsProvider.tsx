/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { createContext, useEffect, useState, ReactNode } from "react";

export interface Project {
    projectUrl: any;
    aboutProject: ReactNode;
    _id: string;
    title: string;
    description: string;
}

interface ProjectContextType {
    project: Project[] | undefined;
    setProject: React.Dispatch<React.SetStateAction<Project[] | undefined>>;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

interface ProjectsProviderProps {
    children: ReactNode;
}

const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ children }) => {

    const [project, setProject] = useState<Project[]>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/project/getproject`);
                if (response.status === 200) {
                    const data = response.data;
                    setProject(data);
                }
            } catch (error) {
                console.error("Error fetching project data:", error);
            }
        };

        fetchData();
    }, [setProject]);

    return (
        <ProjectContext.Provider value={{ project, setProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectsProvider;
