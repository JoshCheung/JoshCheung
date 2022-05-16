import React from 'react';
import name from '../media/profile-images/name.png';
import backsplash from '../media/san_francisco.jpg';
import Button from './Button';
import '../css/banner.css'

const Banner = () => {
    return (
        <div className="container1">
            <img className="banner" src={backsplash}/>
            <div className="centered">
                <img src={name} className="name" />
                <Button/>
            </div>
        </div>
    )
}
export default Banner;