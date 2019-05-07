import React, { Component } from "react";
import './Card.css'


export default function Card({title, subtitle, dark, id, image, text, link}) {
    return (
        <div>
            <div className="cards">
                <div className="cardWrapper">
                    <div className="left-half">
                        <a className="left-image" href={link}>
                            <img className="left-image" src={image}></img>
                        </a>
                    </div>

                    <div className="right-half">
                        <div className="right-title-text">
                            <p className="headers">{title}</p>
                        </div>
                        <div className="right-subtitle-text">
                            <p className="headers">{subtitle}</p>
                        </div>
                        <div className="right-sub-text">
                            <p className="right-text">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
