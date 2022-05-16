import React from 'react'
import Profile from './Profile';
import Timeline from './Timeline';
import Projects from './Projects'
import Banner from './Banner';
import Hobbies from './Hobbies';
import Contact from './Contact';
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