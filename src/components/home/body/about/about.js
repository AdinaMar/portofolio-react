import React from 'react';
import Social from '../../../common/social/social';
import './about.css';
import pic from './foto.jpg';


function About() {
    return(
        <div className='about'>
            <div className="about-top">
<div className="about-info">
 Hi there! I am 
  <span className="name"> Adina</span>, <br /> currently studying <br />
 computer science and <br />
 experimenting with the web.
</div>

<div className="photo">
<img src={pic} alt="adina" className="pic" ></img>

</div>
            </div>

            <Social/>


        </div>
    )
}

export default About;