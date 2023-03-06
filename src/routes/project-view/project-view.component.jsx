import './project-view.styles.scss'
import { Parallax } from 'react-scroll-parallax';
import React, { useEffect, useRef, useState, useContext } from 'react';
import { ProjectsContext } from '../../contexts/projects.context'
import { useParams } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';


const ProjectView = () => {

    const [currentSection, setCurrentSection] = useState(0);
    const [lastSection, setLastSection] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let visibleSectionId = currentSection;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSectionId = Number(entry.target.id);
                    }
                });
                setCurrentSection(visibleSectionId);
                if (visibleSectionId > lastSection || visibleSectionId === 0) {
                    setLastSection(visibleSectionId);
                }
            },
            { threshold: 0.3 }
        );
        const sections = document.querySelectorAll(".project-img");
        sections.forEach((section) => {
            observer.observe(section);
        });
        return () => observer.disconnect();
    }, [currentSection, lastSection]);

    const handleScroll = () => {
        const sections = document.querySelectorAll(".project-img");
        sections.forEach((section) => {
            if (section.getBoundingClientRect().top < window.innerHeight / 2) {
                setLastSection(Number(section.id));
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);



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

    const { name, id, description1, description2, images } = currentProject;




    return (

        <div className='project-view-container'>
            <div className='project-images-indicator'>
                <h1>0{currentSection}</h1>
                <div className="wrapper">
                    <motion.div
                        className="container"
                        style={{
                            scale
                        }}
                    >
                        <motion.div
                            className="item"
                            style={{
                                scaleX: scrollYProgress
                            }}
                        />
                    </motion.div>
                </div>
                <h1>03</h1>
            </div>
            <Parallax translateY={[-50, 50]} className='project-view-header'>
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
        </div>

    )

}

export default ProjectView;