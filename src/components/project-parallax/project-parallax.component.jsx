import './project-parallax.styles.scss'
import { Parallax } from 'react-scroll-parallax';

const ProjectParallax = () => {
    return (
        <div className='project-preview-container'>
            <Parallax translateY={[-50, 50]} className='project-preview-image'></Parallax>
            <Parallax y={[10, -10]} className='project-preview-details'>
                <h2>01</h2>
                <h1>project one title</h1>
            </Parallax>
        </div>
    );
};

export default ProjectParallax;