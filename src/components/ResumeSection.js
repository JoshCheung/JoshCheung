import React from "react";
import './Section.css'
import Card from './Card'
import resume from './Resume-2019.jpg'
import pdf from './Resume.pdf';

export default function ResumeSection({ title, subtitle, dark, id, image,  }) {
    return (
        <div>
            <center>
                <div className="resumeSection">
                    <div>
                        <div className="section-content" id={id}>
                        </div>
                    </div>
                </div>
            </center>
            <center><a href={pdf}>Click here for my pdf</a></center>
        </div>
    );
}
