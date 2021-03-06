import React from 'react';

import './project-card.css';

import {BsGlobe2} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-info">
          <label className="project-title">{project.title}</label>
          <div className="project-links">
              {project.demo && (<a className="project-link" href={project.demo}>
                  <div className="link-button">
                  <BsGlobe2  className="ia" size="30px" color="black" />Demo
                      </div></a>)}

                      {project.github && (<a className="project-link" href={project.github}>
                  <div className="link-button">
                  <BsGithub  className="ia" size="30px" color="black" />Github
                      </div>
                      </a>)}
              </div>

           <p>{project.about}</p>
           <div className="project-tags">
               {project.tags.map((tag)=>{
                   return (
                       <label className="tag">{tag}</label>
                   )
               })}

           </div>

            </div>
            <img src={project.image} className="project-photo" alt="project screen"/>

        </div>
    )
}

export default ProjectCard;