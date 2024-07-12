import React from 'react';
import './Details.css';

export default function Details(props) {
    return (
        <div className={props.animnateOn === true ? 'details-container' : 'details-containerOff'}>            
            <p>Date: July 25, 2024</p>
            <p>Time: 10:00 AM - 4:00 PM</p>
            <p>Location: 2 PL & Court Street, Brooklyn, New York</p>     
        </div>
    )
}