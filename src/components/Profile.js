import React, { Component } from "react";
import './css/newCard.css'
import './css/profile.css'
import portrait from './media/portrait.png';

export default function Profile({title, subtitle, dark, id, image, text, link}) {
    return (
      <div className="Card">
          <div className="cards Rtable Rtable--2cols Rtable--collapse">
            <div className= "Rtable-cell center">
              <img id="profilePic" src={portrait}></img>
            </div>
            <div className="Rtable-cell Rtable-cell center">
              <div className="text-section">
                <h4 className="text-section">Hi! I'm Josh!</h4>
                <p></p>
                <p className="text-section">
                I'm a Software Engineer based in Alameda, California.
                </p>

                <p className="text-section">
                I am excited to learn about the future technologies such as Artificial Intelligence, Augmented Reality/ Virtual Reality, and Space Exploration.
                </p>
                <p className="text-section">My goals are to work in the industry
                for a couple years to gain experience in the field, before pursuing a Master’s Degree in Computer Science with an emphasis on Artificial Intelligence.
                As of now, I’ve been reading about different kinds of frameworks and systems, and building applications for fun!
                </p>
                <p className="text-section">
                  If you're as excited about the future let me know, if you have me in mind for a project, or if you share the same love for ramen, then let's connect.
                </p>
              </div>
            </div>
          </div>
      </div>
    );
}
