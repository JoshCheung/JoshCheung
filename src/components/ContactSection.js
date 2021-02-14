import React from "react";
import './css/Section.css';
import IconSection from './IconSection';


export default function ContactSection({ title, id}) {
    
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
                            <h5> Message me via email at JTCheung97@gmail.com! </h5>
                            <h5>or</h5>
                            <IconSection/>
                        </div>
                    </div>
                </center>
            </div>
        </div>

    );
}
