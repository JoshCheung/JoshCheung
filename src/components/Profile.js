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
                <h4 className="text-section">Hello! I'm Josh!</h4>
                <p className="text-section">
                I'm a Software Engineer based in the bay area.
                </p>

                <p className="text-section">
                  I am excited to learn about new things that are challenging and fun! During quarantine, 
                  I have taken it upon myself to learn how to make ramen. There are pictures below of my attempts!
                </p>
                <p className="text-section"> 
                  My goals are to help society in the best way I can through software. 
                  There are many challenges to overcome and so much to do, but I hope to bring a better future one bit at a time to our little blue planet.
                </p>
                <p className="text-section">
                  If you're as excited about the future let me know, if you have me in mind for a project, 
                  or if you share the same love for ramen, let's connect.
                </p>
              </div>
            </div>
          </div>
      </div>
    );
}
