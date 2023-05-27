import React from "react";
import github from '../media/icons/github.png';
import linkedin from '../media/icons/linkedin.png';
import '../css/main.css';

const Contact = ({ title, id}) => {
    return (
        <div className="contacts-container">
            <h1 className="title">Contact</h1>
            <hr className="horizonal-line"/>

            <h2 className="text"> Message me via email at JTCheung97@gmail.com! </h2>
            <h2 className="text"> Connect with me here too! </h2>
            <div className="icon-container">
                <div className="icon" >
                    <a href="https://github.com/JoshCheung">
                        <img className="icon" src={github} style={{background: "black", borderRadius: 360}}/>
                    </a> 
                </div>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/joshua-cheung/">
                        <img className="icon" src={linkedin} style={{background: "black", borderRadius: 360}}/>
                    </a>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
}
export default Contact;