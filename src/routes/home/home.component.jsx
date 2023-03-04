import './home.styles.scss'
import HomeSlider from '../../components/slider/home-slider.component';
import { motion } from 'framer-motion';

import { useContext, useState, useEffect } from 'react';
import { ProjectsContext } from '../../contexts/projects.context';

const Home = () => {

    const { projectsMap } = useContext(ProjectsContext)
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (Array.isArray(projectsMap)) {
            setProjects(projectsMap);
        }
    }, [projectsMap]);


    return (
        <>
            <div className='home-container'>
                <HomeSlider slides={projects} />
            </div>
        </>
    )
}


export default Home;