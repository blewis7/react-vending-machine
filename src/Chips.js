import React from "react";
import chipsImg from "./Chips.png";
import { Link } from "react-router-dom";
import "./Chips.css";


function Chips() {
    return (
        <div>
            <h2>I wonder if sardines would taste good on this.</h2>
            <img src={chipsImg}/>
            <button><Link to="/">Vending Machine</Link></button>
        </div>
    )
}

export default Chips;