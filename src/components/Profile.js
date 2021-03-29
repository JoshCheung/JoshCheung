import React, { } from "react";
import './css/newCard.css'
import './css/profile.css'
import portrait from './media/portrait.png';

export default function Profile() {
    return (
      <div className="Card">
          <div className="cards Rtable Rtable--2cols Rtable--collapse">
            <div className= "Rtable-cell center">
              <img id="profilePic" src={portrait}></img>
            </div>
            <div className="Rtable-cell Rtable-cell center">
              <div className="text-section">
                <h4 className="text-section">Hello, I'm Josh!</h4>
                <p className="text-section">
                  I'm a software engineer based in the Bay Area.
                </p>

                <p className="text-section">
                  I hope to help society in the best way I can through software. 
                  My goal in bringing people closer together presents a multitude of obstacles, 
                  but I hope to bring a better future one bit at a time to our little blue planet. 

                </p>
                <p className="text-section"> 
                  In addition, I am constantly excited to take on new challenges and experiences. 
                  During quarantine, I have taken it upon myself to learn to make ramen, my one great love. 

                </p>
                <p className="text-section">
                  If you're as dedicated to the future as I am, have me in mind for a project, or share the same love for ramen, let's connect!                
                </p>
              </div>
            </div>
          </div>
      </div>
    );
}


