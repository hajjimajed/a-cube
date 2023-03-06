import './all.styles.scss'
import ProjectParallax from '../../components/project-parallax/project-parallax.component';

import { useContext, useState, useEffect } from 'react';
import { ProjectsContext } from '../../contexts/projects.context'

const All = () => {

    const { projectsMap } = useContext(ProjectsContext)
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (Array.isArray(projectsMap)) {
            setProjects(projectsMap);
        }
    }, [projectsMap]);

    return (
        <div className='all-container'>

            {
                projects.map((project) => <ProjectParallax key={project.id} project={project} />)
            }

        </div>
    )

}

export default All;