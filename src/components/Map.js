import React from 'react';
import './Map.css';

export default function Map(props) {
    
    return (
        <div className={props.animateOn === true ? "map" : "mapOff"}>
            <iframe title="Google Maps"  loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:EioybmQgUGwgJiBDb3VydCBTdCwgQnJvb2tseW4sIE5ZIDExMjMxLCBVU0EiZiJkChQKEglXGRhcWFrCiRGyde_BuJTmUBIUChIJVxkYXFhawokRsnXvwbiU5lAaFAoSCVuuBfJYWsKJEQIicj09qGFVGhQKEgnhT8evWVrCiRFy1_bXvC3EPSIKDVQzPxgVOOnk0w&key=AIzaSyCMJWiS93Ei4SzflVXdimo44tqtsFaoEWo-sFk"></iframe>
        </div>
    )
}
