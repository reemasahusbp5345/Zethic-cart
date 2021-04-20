import React from 'react'
import "../css/backdrop.css";

const Backdrop = ( {show,click}) => {
    return show && 
        <div className="backdrop" onClick={click}></div>
};

export default Backdrop;