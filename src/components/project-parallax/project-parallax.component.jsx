import './project-parallax.styles.scss'
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';


const ProjectParallax = ({ project }) => {

    const { name, id, cover } = project;


    return (
        <div className='project-preview-container'>
            <Link to={`/works/${name}`}>
                <Parallax translateY={[-50, 50]}
                    style={{
                        backgroundImage: `url(${cover})`
                    }}
                    className='project-preview-image'></Parallax>
            </Link>
            <Parallax y={[10, -10]} className='project-preview-details'>
                <Link className='project-link'>
                    <h2>{id}</h2>
                    <h1>{name}</h1>
                </Link>
            </Parallax>
        </div>
    );
};

export default ProjectParallax;