import React from 'react';
import './skills.css';
import Separetor from "../../../common/social/separetor/separetor";
import { SkillsData} from "../../../data/skill";
import SkillCard from './skill-card';

function Skills() {
    const data = SkillsData;
    return (
        <div className="skills">
            <Separetor />
            <label className="section-title">Skills</label>

        <div className="skills-container">
            {data.map((item)=>{
                return (
                    <div className="skills-section">
                        <label className="skills-section-title">{item.type}</label>
                    <div className="skills-list">
                        {item.list.map((skill)=>{
                            return(
                              <SkillCard skill={skill} />
                            )
                        })}

                        </div>


                    </div>

                )
            })}

        </div>
        </div>
    )
}

export default Skills;