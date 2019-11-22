import React, { Component } from "react";
import './css/profiletext.css';
import portrait from './media/portrait.png';

export default function ProfileText({title, subtitle, dark, id, image, text, link}) {
    return (
        <div>
            <div className="profile">

              <table>
                  <tr>
                      <td><img className="portrait" src={portrait}></img></td>
                      <td>

                        <h4>Hi! I'm Josh!</h4>
                        <p>
                        I'm a Software Engineer based in Alameda, California.
                        </p>

                        <p>
                        I am excited to learn about the future technologies such as Artificial Intelligence, Augmented Reality/ Virtual Reality, and Space Exploration.
                        </p>
                        <p>My goals are to work in the industry
                        for a couple years to gain experience in the field, before pursuing a Master’s Degree in Computer Science with an emphasis on Artificial Intelligence.
                        As of now, I’ve been reading about different kinds of frameworks and systems, and building applications for fun!
                        </p>
                        <p>If you're as excited about the future let me know, if you have me in mind for a project, or if you share the same love for ramen, then let's connect. </p>
                      </td>
                  </tr>
              </table>

          </div>
        </div>
    );
}
