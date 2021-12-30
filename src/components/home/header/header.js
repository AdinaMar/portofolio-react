import React, {useState} from 'react';
import './header.css';
import Web from './web/Web';
import Mobile from './mobile/Mobile';
import {GrAppsRounded} from 'react-icons/gr';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="header">

     <div className="logo"> Portofolio

     </div>
     <div className="menu">
<div className="web-menu">
<Web />
</div>
<div className="mobile-menu">
    <div className="burger" onClick={()=>setIsOpen(!isOpen)}>
    <GrAppsRounded className="hamburger" size="30px" color="black" />
    </div>
    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
</div>

     </div>
        </div>
    );
}

export default Header;