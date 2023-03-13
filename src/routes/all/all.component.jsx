import './all.styles.scss'
import ProjectParallax from '../../components/project-parallax/project-parallax.component';

import { useContext, useState, useEffect } from 'react';
import { ProjectsContext } from '../../contexts/projects.context'
import ImageLoader from '../../components/image-loader/image-loader.component';

import { motion } from 'framer-motion';

const All = () => {

    const { projectsMap } = useContext(ProjectsContext);
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState(0);

    useEffect(() => {
        if (Array.isArray(projectsMap)) {
            setProjects(projectsMap);
        }
    }, [projectsMap]);

    useEffect(() => {
        const totalImages = projects.length;
        let loadedImagesCount = 0;

        const handleImageLoad = () => {
            loadedImagesCount++;

            if (loadedImagesCount === totalImages) {
                setIsLoading(false);
            }
        };

        projects.forEach((project) => {
            const img = new Image();
            img.src = project.cover;
            img.onload = handleImageLoad;
        });

        return () => {
            projects.forEach((project) => {
                const img = new Image();
                img.src = project.cover;
                img.onload = null;
            });
        };
    }, [projects]);

    if (isLoading) {
        return <ImageLoader />;
    }

    return (
        <div className='all-container'>
            <div className='all-parallax-container'>
                {projects.map((project) => (
                    <ProjectParallax key={project.id} project={project} />
                ))}
            </div>
        </div>
    )

}

export default All;