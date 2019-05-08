import React, { Component } from "react";
import './css/Card.css'


export default function Card({title, subtitle, dark, id, image, text, demolink, githublink, demo, github}) {
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
                        <div className="linkContainer">
                            <a href={demolink} className="links">{demo}</a>
                            <a href={githublink} className="links">{github}</a>
                        </div>
                    </div>

                    <div className="right-half">

                            <p className="headers">{title}</p>


                            <p className="headers2">{subtitle}</p>


                            <p className="right-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
