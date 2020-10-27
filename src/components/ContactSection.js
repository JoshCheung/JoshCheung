import React from "react";
import './css/Section.css';
import Card from './Card';
import IconSection from './IconSection';


export default function ContactSection({ title, subtitle, dark, id, image}) {

    // const ContactForm = () =>
    //     <form method="POST">
    //         <div className="container">
    //             <input type="email"  id="email" name="email" placeholder="Your email" value=""/>
    //             <br/>
    //             <textarea name="message" placeholder="Your message" ows="3" ></textarea>
    //             <br/>
    //             <input type="submit" value="Send"/>
    //         </div>
    //     </form>

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
