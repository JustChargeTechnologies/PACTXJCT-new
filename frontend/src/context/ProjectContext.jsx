/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react'

export const ProjectDataContext = createContext();

const ProjectContext = ({children}) => {
    const [project, setProject] = useState({});
  return (
    <ProjectDataContext.Provider value={{ project, setProject }}>
        {children}
    </ProjectDataContext.Provider>
  )
}

export default ProjectContext