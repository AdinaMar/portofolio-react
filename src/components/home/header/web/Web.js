import React from 'react';
import './Web.css';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {GiSkills} from 'react-icons/gi';
import {MdContactPhone} from 'react-icons/md';

function Web() {
    return(
        <div className="web">
 <div className="web-option">
     <a href="#project">
         <AiOutlineFundProjectionScreen className="first" size="20px" color="black" /> Projects

     </a>
 </div>
 <div className="web-option">
     <a href="#skills">
         <GiSkills className="first" size="20px" color="black" /> Skills

     </a>
 </div>
 
 <div className="web-option">
     <a href="#contact">
         <MdContactPhone className="first" size="20px" color="black" /> Contact

     </a>
 </div>
        </div>
    )
}

export default Web;