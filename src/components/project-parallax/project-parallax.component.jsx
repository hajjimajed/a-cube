import './project-parallax.styles.scss'
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const ProjectParallax = ({ project }) => {

    const { name, id, cover } = project;


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.5
            }}
            className='project-preview-container'>
            <Link to={`/works/${name}`}>
                <Parallax translateY={[-40, 40]}
                    style={{
                        backgroundImage: `url(${cover})`
                    }}
                    className='project-preview-image'></Parallax>
            </Link>
            <div className='project-preview-details'>
                <Link to={`/works/${name}`} className='project-link'>
                    <h2>0{id}</h2>
                    <h1>{name}</h1>
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectParallax;