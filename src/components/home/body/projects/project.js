import React from 'react';
import {ProjectData} from '../../../data/projects';
import ProjectCard from './project-card';
import './project.css';
import Separetor from '../../../common/social/separetor/separetor';
function Projects() {
const data = ProjectData;
    return(
        <div className="projects">
<Separetor />
            <label className="section-title">Projects</label>
            <div>
{data.map((project)=> {
    return <ProjectCard project={project} />
})}

            </div>

        </div>
    )
}
export default Projects;