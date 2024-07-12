import React from 'react';
import './Share.css';
import facebook from './images/facebook.png';
import x from './images/x.png';
import instagram from './images/instagram.png';

export default function Share(props) {
    return (
        <div class="container-social-media" >
          <h3>Share this event!</h3><hr>
          </hr>
          
          <div class="icons">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdanielle254.github.io%2Fcodedex-hackathon%2F&amp;src=sdkpreparse" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook icon" className={props.animateOn === true ? "icon--image" : "icon--imageOff"}/>
            </a>
            <a href="https://x.com/intent/tweet?url=https://danielle254.github.io/codedex-hackathon/" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="Twitter icon" className={props.animateOn === true ? "icon--image" : "icon--imageOff"}/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram icon" className={props.animateOn === true ? "icon--image" : "icon--imageOff"}/>
            </a>
          </div>
      </div>
    )
}