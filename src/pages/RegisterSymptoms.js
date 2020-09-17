import React from 'react';
import cross from '../assets/cross.png';
import LogoButton from "../components/LogoButton";
import CallMidwifeButton from "../components/CallMidwifeButton";
import WaterBrokenButton from "../components/WaterBrokenButton";
import "../pages/RegisterSymptoms.scss";

const Symptoms = () => {
    return (
        <div>
            <div className="closebutton">
            <img src={cross} alt="crossicon" />
            </div>
            <div>
                <LogoButton />
            </div>
            <br></br>
            <h1>Registrera symptom</h1>
            <br></br>
            <br></br>
            <div className="symptomCard">
                <br></br>
                <p>Beskriv dina symptom</p>
                <br></br>
                <WaterBrokenButton className="symptomButton" id="Item1" path="/water" text="Vattnet har gått" />
                <br></br>
                <br></br>
                <button className="symptomButton" id="Item2">Jag blöder</button>
                <br></br>
                <br></br>
                <button className="symptomButton" id="Item3">Slemproppen har gått</button>
                <br></br>
                <br></br>
                <button className="symptomButton" id="Item4">Jag känner mig sjuk</button>
            </div>
            <div>
            <br></br>
                <p>Känner du dig osäker? </p>
            </div>
            <div>
                <CallMidwifeButton path="/ring" text="Ring barnmorska" />
            </div>
        </div>
    );
}

export default Symptoms;
