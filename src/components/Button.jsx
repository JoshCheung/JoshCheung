import React, { Component } from 'react';
import Pdf from '../media/profile-images/Resume-23.pdf';
import '../css/button.css'

class Button extends Component {
    render() {
        return (
            <div>
                <a className = "Button" href = {Pdf}>Résumé</a>
            </div>
        );
    }
}

export default Button;