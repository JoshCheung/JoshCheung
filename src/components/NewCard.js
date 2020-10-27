import React, { Component } from "react";
import './css/newCard.css'


export default function NewCard({title, subtitle, date, dark, id, image, text, demolink, githublink, demo, github, pipe}) {
    return (

      <div className="Card">
          <div className="cards Rtable Rtable--2cols Rtable--collapse">
            <div className= "Rtable-cell center Rtable-cell--1of3">
              <img id="cardImage" src={image}></img>
            </div>
            <div className="Rtable-cell center Rtable-cell Rtable-cell--2of3">
              <div style={{paddingLeft: "50px"}}>
                <div className="card-title-header"> 
                  <div className="title">{title}</div> 
                  <div className="date">{date}</div>
                </div>
                <p className="subtitle">{subtitle}</p>
                <p className="description">{text}</p>
                <div className="linkContainer">
                    <table id="title">
                        <tbody>
                          <tr>
                              <td><a href={githublink} className="links">{github}</a></td>
                              <td><a href={demolink} className="links">{demo}</a></td>
                          </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
}
