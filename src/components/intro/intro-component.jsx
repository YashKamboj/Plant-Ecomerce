import React from 'react'
import { Link } from "react-router-dom";

function IntoImg(){
    return(
        <Link to="/shop" className="intro-container">
        <div className="img">
            <img src="./buy-plants-online-2.jpg" alt="" />
        </div>
        </Link>
    )
}

export default IntoImg;