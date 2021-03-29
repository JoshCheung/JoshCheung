import React, { Component } from 'react';
// import Pdf from './media/Joshua-Cheung-Resume-2020.pdf';
import Pdf from './media/JoshCheung-Resume.pdf';
import './css/Button.css'

class Button extends Component {
    render() {
        return (
            <div>
                <a className = "Button" href = {Pdf}>
                    <a href = {Pdf}>Résumé</a>
                </a>
            </div>
        );
    }
}

export default Button;
