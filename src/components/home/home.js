import React from 'react';
import './home.css';
import Header from './header/header';
import Body from './body/Body';
import Footer from './footer/Footer';

function Home() {
    return(
        <div className="home">

<div>
    <Header />
    <Body />
    <Footer />
</div>

        </div>
    )
}

export default Home;