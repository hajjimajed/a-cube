import './project-parallax.styles.scss'
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';


const ProjectParallax = ({ project }) => {

    const { name, id, cover } = project;


    return (
        <div className='project-preview-container'>
            <Link to={`/works/${name}`}>
                <Parallax translateY={[-40, 40]}
                    style={{
                        backgroundImage: `url(${cover})`
                    }}
                    className='project-preview-image'></Parallax>
            </Link>
            <div className='project-preview-details'>
                <Link to={`/works/${name}`} className='project-link'>
                    <h2>{id}</h2>
                    <h1>{name}</h1>
                </Link>
            </div>
        </div>
    );
};

export default ProjectParallax;