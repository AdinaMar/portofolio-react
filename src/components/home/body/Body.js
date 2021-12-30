import React from 'react';
import './Body.css';
import About from './about/about';
import Projects from './projects/project';
import Skills from './skills/skills';
import Contact from './contact/contact';

function Body() {
    return (
        <div className="body">

<section id="about">
    <About />
</section>

<section id="project">
    <Projects />
</section>

<section id="skills">
    <Skills />
</section>

<section id="contact">
    <Contact />
</section>
      
        </div>
    )
}

export default Body;