import React from 'react';
import './contact.css';
import Separetor from "../../../common/social/separetor/separetor";
import Social from '../../../common/social/social';
import {AiOutlineCloudDownload} from 'react-icons/ai';
function Contact() {
    return (
        <div className="contact">
            <Separetor />

        <label className="section-title">Contact</label>
        <div className="contact-container">
            <div className="contact-left">
                <p>Contact me on any of these platforms! :) </p>
                <Social />
            </div>
            <div className="download">
                <a download href={require("../../../data/Adina_Martiniuc_CV.pdf")}>
                   <AiOutlineCloudDownload  className="ia" size="30px" color="black" />    
                Download CV
                </a>
                
            </div>
        </div>

        </div>
    )
}

export default Contact;