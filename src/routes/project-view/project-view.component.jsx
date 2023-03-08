import './project-view.styles.scss'
import { Parallax } from 'react-scroll-parallax';
import React, { useEffect, useRef, useState, useContext } from 'react';
import { ProjectsContext } from '../../contexts/projects.context'
import { useParams } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';


const ProjectView = () => {





    const { projectsMap } = useContext(ProjectsContext);
    const [currentUrl, setCurrentUrl] = useState('');
    const [currentProject, setCurrentProject] = useState({});

    useEffect(() => {
        // Get the current URL path name
        const pathName = window.location.pathname;

        // Extract the last part of the path name after the last '/'
        const urlPart = pathName.substring(pathName.lastIndexOf('/') + 1);

        // Set the state variable to the extracted URL part
        setCurrentUrl(urlPart.replace(/%20/g, ' '));

        // Find the project in the projects map with a matching name
        const matchingProject = projectsMap.find(project => project.name === currentUrl);

        // Update the current project state variable if a matching project is found
        if (matchingProject) {
            setCurrentProject(matchingProject);
        }
    }, [currentUrl, projectsMap]);

    const { name, id, description1, description2, images, cover } = currentProject;

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });


    return (

        <div className='project-view-container'>
            <Parallax translateY={[-50, 50]} className='project-view-header'>
                <img src={cover} alt="" />
                <Parallax y={[80, -80]} className='title'>
                    <h1>{name}</h1>
                </Parallax>
            </Parallax>
            <Parallax y={[10, -10]} className='project-view-main'>
                <div className='project-description'>
                    <p>{description1}</p>
                    <p>{description2}</p>
                </div>
                <div className='project-images'>
                    {images &&
                        images.map(img => <img key={img} src={img} alt="" />)
                    }
                </div>
            </Parallax>

            <motion.div className="progress" style={{ scaleX }} />
        </div>

    )

}

export default ProjectView;