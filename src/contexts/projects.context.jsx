import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

import PROJECTS_DATA from '../projects-data'


export const ProjectsContext = createContext({
    projectsMap: {}
})

export const ProjectsProvider = ({ children }) => {


    const [projectsMap, setProjectsMap] = useState({});

    useEffect(() => {

        const getProjectsMap = async () => {
            const projectsMap = await getCategoriesAndDocuments('projects');

            setProjectsMap(projectsMap);


        }

        getProjectsMap()


    }, [])



    /* 
    
        useEffect(() => {
    
            addCollectionAndDocuments('projects', PROJECTS_DATA);
    
        }, [])
        */



    const value = { projectsMap };

    return (
        <ProjectsContext.Provider value={value}>
            {children}
        </ProjectsContext.Provider>
    )


}