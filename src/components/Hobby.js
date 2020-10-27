import React from "react";
import './css/Section.css'
import Card from './Card'
import Carousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hobby({ title, subtitle, dark, id, image}) {
    return (
        <div>
            <div>
                <center>
                    <div className="section">
                        <center>
                            <div className="line"></div>
                        </center>

                        <div className = "container-title">
                            <h2 className="color" >{title}</h2>
                        </div>
                        <div className="section-content" id={id}>
                            <Carousel/>
                        </div>
                    </div>
                </center>
            </div>
        </div>

    );
}
