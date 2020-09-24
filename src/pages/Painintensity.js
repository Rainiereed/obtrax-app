import React from 'react';
import Slidebar from '../components/Slidebar';
import LogoButton from '../components/LogoButton';
import SaveCancelButtons from '../components/SaveCancelButtons';
import "../pages/Painintensity.scss";

const Card = () => {
    return (
        <div>
            <div>
                <LogoButton />
            </div>
            <h2>Contraction</h2>
            <div className="card">
                <h3 className="h3">Varaktighet</h3>
                <p className="text">00:09</p>
                <h3 className="h3">Hur kändes det?</h3>
                <div>
                    <Slidebar />
                </div>
                
                <h4 className="textLeft" >Låg smärta</h4>
                <h4 className="textRight">Hög smärta</h4>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <SaveCancelButtons /> 
                </div>
            </div>
        </div>
    );
}

export default Card;
