import React from "react";
import ramenImg from "./Ramen.png";
import { Link } from "react-router-dom";
import "./Ramen.css";


function Ramen() {
    return (
        <div>
            <h2>I wonder if sardines would taste good in this.</h2>
            <img src={ramenImg}/>
            <button><Link to="/">Vending Machine</Link></button>
        </div>
    )
}

export default Ramen;