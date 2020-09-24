import React from 'react';
import Sidenav from "../components/Sidenav";
import LogoButton from "../components/LogoButton";
import ContractionSummary from "../pages/ContractionSummary";
import weekhistory from '../assets/weekhistory.png';
import "../pages/History.scss";

const History = () => {
    return (
        <div>
            <div>
                <Sidenav />
            </div>
            <div>
                <LogoButton />
            </div>
            <h1>Historik</h1>
            <p>Sammandragningar</p>
            <img src={weekhistory} alt="contraction week history"/>

            <ContractionSummary />
        </div>

    );
}

export default History;