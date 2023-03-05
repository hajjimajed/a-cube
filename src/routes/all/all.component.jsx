import './all.styles.scss'
import ProjectParallax from '../../components/project-parallax/project-parallax.component';

const All = () => {

    return (
        <div className='all-container'>
            <div className='left-projects-section'>
                <ProjectParallax />
                <ProjectParallax />
                <ProjectParallax />
            </div>


            <div className='right-projects-section'>
                <ProjectParallax />
                <ProjectParallax />
                <ProjectParallax />
            </div>

        </div>
    )

}

export default All;