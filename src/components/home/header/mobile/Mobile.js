import React from 'react';
import './mobile.css';
import {CgCloseR} from 'react-icons/cg';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {GiSkills} from 'react-icons/gi';
import {MdContactPhone} from 'react-icons/md'

function Mobile({isOpen, setIsOpen}) {
    return(
        <div className="mobile">
          <div className="icon2" onClick={() => setIsOpen(!isOpen)}>
   <CgCloseR className="ex" size="25px" color="black" />
          </div>

          <div className="mobile-options">
          
 <div className="mobile-option">
     <a href="#project">
         <AiOutlineFundProjectionScreen className="first" size="20px" color="black" /> Projects

     </a>
 </div>
 <div className="mobile-option">
     <a href="#skills">
         <GiSkills className="first" size="20px" color="black" /> Skills

     </a>
 </div>
 
 <div className="mobile-option">
     <a href="#contact">
         <MdContactPhone className="first" size="20px" color="black" /> Contact

     </a>
 </div>

          </div>
        </div>
    )
}

export default Mobile;