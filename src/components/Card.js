import React, { } from "react";
import './css/Card.css'


export default function Card({title, subtitle, image, text, demolink, githublink, demo, github}) {
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

                            <p className="headers">{title}</p>
                            <p className="headers2">{subtitle}</p>
                            <p className="right-text">{text}</p>

                        <div className="linkContainer">
                            <table id="title">
                                <tr>
                                    <td><a href={githublink} className="links">{github}</a></td>
                                    <td><a href={demolink} className="links">{demo}</a></td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
