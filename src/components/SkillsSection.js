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
                                </tr>
                                <tr>
                                    <td>SQLite</td>
                                    <td>JavaScript</td>
                                    <td>HTML</td>
                                    <td>CSS</td>
                                    <td>Node.JS</td>
                                </tr>
                                <tr>
                                    <td>Vue.JS</td>
                                    <td>Web2py</td>
                                    <td>FireBase</td>
                                    <td>Android Studios</td>
                                    <td>Scrum</td>
                                </tr>
                                <tr>
                                    <td>React</td>
                                    <td>Ansible</td>
                                    <td>YAML</td>
                                    <td>Piano</td>
                                    <td>Guitar</td>
                                </tr>
                                <tr>
                                    <td>Eating <br/> Ramen</td>
                                    <td>Drawing <br/> Comics</td>
                                    <td>Building <br/> Models</td>
                                    <td>Conversational <br/> Cantonese</td>
                                    <td>Stuffing his face <br/> with food</td>
                                </tr>
                            </table>
                        </center>
                    </div>
                </div>
            </div>
        </center>
    );
}
