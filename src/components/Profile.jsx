import React from 'react';
import profilePic from '../media/profile-images/profile-pic.jpg'
import '../css/profile.css';


const Profile = () => {
    return (
        <div className="bio-component-container">
            <h1 className="title">About Me</h1>
            <hr className="horizonal-line"/>
            <div id="bio-component" className="grid">
                <div className="picture-1">
                    <div className="picture-component-1">
                        <img id="primary-pic" src={profilePic}></img> 
                    </div>
                </div>
                
                <div className="textbox-1">
                    <div className="textbox1-component" id="textbox1-component">
                        <p className="text"> Hello, I'm Josh! </p>
                        <p className="text">
                            I'm a software engineer based in the Bay Area.
                        </p>
                        <p className="text">
                            I hope to help society in the best way I can through software. 
                            My goal in bringing people closer together presents a multitude of obstacles, but 
                            I hope to bring a better future 1-bit at a time to our little blue planet.
                        </p>
                        <p className="text">
                            In addition, I am constantly excited to take on new challenges and experiences. 
                            During quarantine, I have taken it upon myself to learn to make ramen, my one great love.
                        </p>
                        <p className="text">
                            If you're as dedicated to the future as I am, have me in mind for a project, 
                            or share the same love for ramen, let's connect!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile