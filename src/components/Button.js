import React, { Component } from 'react';
import Pdf from './Resume.pdf';
import './Button.css'

class Button extends Component {
    render() {
        return (
            <div>
                <a className = "Button" href = {Pdf}>
                    <a href = {Pdf}>Resume</a>
                </a>
            </div>
        );
    }
}

export default Button;
