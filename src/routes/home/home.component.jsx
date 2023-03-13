import './home.styles.scss'
import HomeSlider from '../../components/slider/home-slider.component';
import { motion } from 'framer-motion';

import { useContext, useState, useEffect } from 'react';
import { ProjectsContext } from '../../contexts/projects.context';

import Loader from '../../components/loader/loader.component';

const Home = () => {

    const { projectsMap } = useContext(ProjectsContext)
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (Array.isArray(projectsMap)) {
            setProjects(projectsMap);
        }
    }, [projectsMap]);

    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState(0);

    useEffect(() => {
        const totalImages = projects.length;
        let loadedImagesCount = 0;
        let timer;

        const handleImageLoad = () => {
            loadedImagesCount++;

            if (loadedImagesCount === totalImages) {
                timer = setTimeout(() => {
                    setIsLoading(false);
                }, 4000);
            }
        };

        projects.forEach((project) => {
            const img = new Image();
            img.src = project.cover;
            img.onload = handleImageLoad;
        });

        return () => {
            clearTimeout(timer);

            projects.forEach((project) => {
                const img = new Image();
                img.src = project.cover;
                img.onload = null;
            });
        };
    }, [projects]);

    if (isLoading) {
        return <Loader />;
    }


    return (
        <>
            <div className='home-container'>
                <HomeSlider slides={projects} />
            </div>
        </>
    )
}


export default Home;