import React from 'react';
import Slidebar from '../components/Slidebar';
import "../pages/Painintensity.scss";
import LogoButton from '../components/LogoButton';

const Card = () => {
    return (
        <div>
            <div>
                <LogoButton />
            </div>
            <h2>Contraction</h2>
            <div className="card">
                <h3>Varaktighet</h3>
                <p>00:09</p>
                <h3>Hur kändes det?</h3>
                <div>
                    <Slidebar />
                </div>
                
                <h4 className="textLeft" >Låg smärta</h4>
                <h4 className="textRight">Hög smärta</h4>
                <br></br>
                <br></br>
                <div>
                    <button className="saveButton" >Spara</button>
                    <div class="divider"/>
                    <button className="cancelButton">Avbryt</button>
                </div>
            </div>
        </div>
    );
}

export default Card;