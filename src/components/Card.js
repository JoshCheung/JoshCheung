import React, { Component } from "react";
import './css/Card.css'


export default function Card({title, subtitle, dark, id, image, text, demolink, githublink, demo, github, pipe}) {
    return (
        <div>
            <div className="cards">
                <div className="cardWrapper">
                    <div className="left-half">
                        <div className="left-image">
                            <a href={demolink}>
                                <img className="left-image" src={image}></img>
                            </a>
                        </div>

                    </div>

                    <div className="right-half">

                        <div className="linkContainer">
                            <table id="title">
                                <tr>
                                    <td><p className="headers">{title}</p></td>
                                    <td><a href={githublink} className="links">{github}</a></td>
                                    <td><a href={demolink} className="links">{demo}</a></td>
                                </tr>

                            </table>
                        </div>
                            <p className="headers2">{subtitle}</p>


                            <p className="right-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
