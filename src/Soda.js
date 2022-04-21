import React from "react";
import sodaImg from "./Soda.png";
import { Link } from "react-router-dom";
import "./Soda.css";


function Soda() {
    return (
        <div className="Soda">
            <h2>Sardines would definitely not taste good in this!</h2>
            <img src={sodaImg}/>
            <button><Link to="/">Vending Machine</Link></button>
        </div>
    )
}

export default Soda;