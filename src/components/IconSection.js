import React from "react";
import Card from './Card';
import './css/icon.css';
import github from './media/github.png';
import linkedin from './media/linkedin.png';


export default function IconSection({ title, subtitle, dark, id, image}) {
    return (
        <div>
            <div className="icon_container">
                <a className="icon" href="https://github.com/JoshCheung">
                    <img className="icon" src={github}/>
                </a>
                <a className="icon" href="https://www.linkedin.com/in/joshua-cheung/">
                    <img className="icon" src={linkedin}/>
                </a>
            </div>
        </div>

    );
}
