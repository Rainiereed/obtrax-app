import React from 'react';
import back from '../assets/back.png';
import LogoButton from "../components/LogoButton";
import ConfirmButton from "../components/ConfirmButton";
import "../pages/WaterBroken.scss";

const WaterBroken = () => {

    return (
        <div>
            <div className="backbutton">
                <img src={back} alt="backbutton" />
            </div>
            <div>
                <LogoButton />
            </div>
            <br></br>
            <h1>Vattnet har gått</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className="symptomCard" >

                <form>
                    <p>Beskriv färgen på vattnet</p>
                    <br></br>
          
                    <div>
                        <label className="container" htmlFor="transparent">Vattnet är genomskinligt
                            <input type="checkbox" id="transparent" name="transparent" value="genomskinligt" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <label className="container" htmlFor="discolored">Vattnet är missfärgat
                            <input type="checkbox" id="discolored" name="discolored" value="missfärgat" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <ConfirmButton className="buttonWater" type="submit" path="/confirm" text="Registrera symptom" />
                    
                    
                </form>

            </div>
        </div>
    );
}

export default WaterBroken;
