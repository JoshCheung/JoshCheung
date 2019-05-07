import React, { Component } from "react";
import './css/profiletext.css';

export default function ProfileText({title, subtitle, dark, id, image, text, link}) {
    return (
        <div>
            <div className="profile">
                <h3>Hi! I'm Josh, the guy up there.</h3>
                <p>I'm a Software Engineer based in Alameda, California.
                I am passionate about software engineering and always found it interesting how simple 0’s and 1’s can turn into massive applications that can connect people all around the world.
                I am excited to learn about the future technologies with Artificial Intelligence on the way, Augmented Reality/ Virtual Reality, and Space Exploration.</p>
                <p>If you're as excited about the future let me know, or if you have me in mind for a project, or just wanna say hi, then let's connect. </p>
            </div>
        </div>
    );
}
