import React from "react";
import './css/Section.css'
import './css/skills.css'

export default function Skills({ title, subtitle, dark, id, image,  }) {
    return (
        <center>
            <div className="section">
                <div className="line">
                </div>
                <div className = "container-title">
                    <h2 className="color">{title}</h2>
                </div>
                <div className="section-content" id={id}>
                    <div className="skills">
                        <ul id="skills">
                            <li>Java</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>C++</li>
                            <li>MySQL</li>
                            <li>SQLite</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Node.js</li>
                            <li>Vue.js</li>
                            <li>Web2py</li>
                            <li>FireBase</li>
                            <li>Android Studios</li>
                            <li>Scrum</li>
                            <li>React</li>
                            <li>Ansible</li>
                            <li>YAML</li>
                            <li>Piano</li>
                            <li>Guitar</li>
                            <li>Eating Ramen</li>
                            <li>Drawing Comics</li>
                            <li>Building Models</li>
                            <li>Conversational Cantonese</li>
                            <li>Stuffing his face with food</li>
                        </ul>
                    </div>
                </div>
            </div>
        </center>
    );
}
