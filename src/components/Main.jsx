import React from 'react'
import Profile from './Profile';
import Timeline from './Timeline';
import Projects from './Projects'
import Banner from './Banner';
import Hobbies from './Hobbies';
import Contact from './Contact';
import '../css/main.css';
const Main = () => {
    return (  
        <div className="main">
            <Banner/>
            <Profile/>
            <Timeline/>
            <Projects/>
            <Hobbies/>
            <Contact/>
        </div>
    );
}
export default Main;