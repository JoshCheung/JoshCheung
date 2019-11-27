import React, { Component } from "react";
import './css/newCard.css'


export default function NewCard({title, subtitle, dark, id, image, text, demolink, githublink, demo, github, pipe}) {
    return (

      <div className="Card">
          <div className="cards Rtable Rtable--2cols Rtable--collapse">
            <div className= "Rtable-cell center Rtable-cell--1of3">
              <img id="cardImage" src={image}></img>
            </div>
            <div className="Rtable-cell center Rtable-cell Rtable-cell--2of3">
              <p className="title">{title}</p>
              <p className="subtitle">{subtitle}</p>
              <p className="description">{text}</p>
              <div className="linkContainer">
                  <table id="title">
                      <tr>
                          <td><a href={githublink} className="links">{github}</a></td>
                          <td><a href={demolink} className="links">{demo}</a></td>
                      </tr>
                  </table>
              </div>
            </div>
          </div>

      </div>
    );
}
