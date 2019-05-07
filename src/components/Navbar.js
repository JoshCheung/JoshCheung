import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './css/Navbar.css';

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav fixed="top" id="navbar">
                <div className="nav">
                    <ul className="header">
                        <li className="link">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                            Contact Me
                            </Link>
                        </li>

                        <li className="link">
                            <Link
                                activeClass="active"
                                to="hobbies"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Hobbies
                            </Link>
                        </li>

                        <li className="link">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Projects
                            </Link>
                        </li>

                        <li className="link">
                            <Link
                                activeClass="active"
                                to="work"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                Work
                            </Link>
                        </li>

                        <li className="link">

                            <Link
                                activeClass="active"
                                to="aboutMe"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                            About Me
                            </Link>
                        </li>


                    </ul>
                </div>
            </nav>
        );
    }
}
