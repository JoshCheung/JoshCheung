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
                        <center>
                            <table id = "skills">
                                <tr>
                                    <td>Java</td>
                                    <td>Python</td>
                                    <td>C</td>
                                    <td>C++</td>
                                    <td>MySQL</td>
                                    <td>SQLite</td>
                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                    <td>HTML</td>
                                    <td>CSS</td>
                                    <td>Node.JS</td>
                                    <td>Vue.JS</td>
                                    <td>React</td>
                                </tr>
                                <tr>
                                    <td>Web2py</td>
                                    <td>FireBase</td>
                                    <td>Amazon Web Services</td>
                                    <td>Google Cloud Platform</td>
                                    <td>Android Studios</td>
                                    <td>Chef</td>
                                </tr>
                                <tr>
                                    <td>Scrum</td>
                                    <td>Ansible</td>
                                    <td>YAML</td>
                                    <td>Piano</td>
                                    <td>Guitar</td>
                                    <td>Drawing Comics</td>
                                </tr>
                                <tr>
                                    <td>Building Models</td>
                                    <td>Eating Ramen</td>
                                    <td>Conversational Cantonese</td>
                                    <td>Stuffing his face with food</td>
                                </tr>
                            </table>
                        </center>
                    </div>
                </div>
            </div>
        </center>
    );
}
