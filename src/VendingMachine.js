import React from "react";
import vendingMachineImg from "./VendingMachine.png";
import "./VendingMachine.css";
import { Link } from "react-router-dom";

function VendingMachine() {
    return (
        <div
            className="VendingMachine"
            style={{backgroundImage: `url(${vendingMachineImg})`}}
        >
            <div className="greeting">
                <h1>Welcome to the vending machine. Pick out what you would like.</h1>
            </div>
            <div className="options">
                <h3><Link to="/soda">Soda</Link></h3>
                <h3><Link to="/ramen">Ramen</Link></h3>
                <h3><Link to="/chips">Chips</Link></h3>
            </div>
        </div>
    )
}

export default VendingMachine;