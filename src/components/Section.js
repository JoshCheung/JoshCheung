import React from "react";
import '.css/Section.css'
import Card from './Card'

export default function Section({ title, subtitle, dark, id, image,  }) {
    return (
        <div>
            <div>
                <center>
                    <div className="section">
                        <center>
                            <div className="line"></div>
                        </center>

                        <div className = "container-title">
                            <h2 className="title" >{title}</h2>
                        </div>


                        <div className="section-content" id={id}>
                            <Card
                                title={title}
                                image={image}
                                subtitle={subtitle}
                                />
                            <Card
                                title={title}
                                image={image}
                                subtitle={subtitle}
                                />
                        </div>
                        </div>
                </center>
            </div>
        </div>

    );
}
