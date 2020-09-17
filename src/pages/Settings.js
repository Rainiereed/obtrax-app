import React from 'react';
import SaveCancelButtons from '../components/SaveCancelButtons';
import Sidenav from "../components/Sidenav";
import LogoButton from "../components/LogoButton";
import "../pages/Settings.scss";

const Settings = () => {
    return (
        <div>
            <div>
                <Sidenav />
            </div>
            <div>
                <LogoButton />
            </div>
            <div className="wrapper">
                <form>
                    <h1>Inställningar</h1>
                    <p>Sjukhusinställningar</p>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="county">Region</label>
                        </div>
                        <div className="col-75">
                            <select id="county" name="county">
                                <option value="Stockholm">Stockholm</option>
                                <option value="Uppsala">Uppsala</option>
                                <option value="Södermanland">Södermanland</option>
                                <option value="Östergötland">Östergötland</option>
                                <option value="Jönköping">Jönköping</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="hospital">Sjukhus</label>
                        </div>
                        <div className="col-75">
                            <select id="hospital" name="hospital">
                                <option value="BBStockholm">BB Stockholm</option>
                                <option value="Sös">Sös</option>
                                <option value="Danderyd">Danderyd</option>
                                <option value="Huddinge">Huddinge</option>
                                <option value="Södertälje">Södertälje</option>
                                <option value="Västerås">Västerås</option>
                                <option value="Karolinska">Karolinska</option>
                                <option value="UppsalaAkademiska">Uppsala Akademiska</option>
                            </select>
                            
                        </div>
                    </div>

                    <br></br>
                    <p>Viktiga kontakter</p>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="partnerphone">Telefonnummer till partner</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="tel" id="partnerphone" name="partnerphone" placeholder="+46"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="midwifephone">Telefonnummer till barnmorska</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="tel" id="midwifephone" name="midwifephone" placeholder="+46"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="hospitalphone">Telefonnummer till sjukhus</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="tel" id="hospitaltelephone" name="hospitaltelephone" placeholder="+46"
                            />
                        </div>
                    </div>
                    <br></br>
                    <SaveCancelButtons />
                    <br></br>
                    <br></br>
                </form>
            </div>
        </div>
    );
}

export default Settings;
