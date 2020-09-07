import React from 'react';
import SaveCancelButtons from '../components/SaveCancelButtons';
import Sidenav from "../components/Sidenav";
import LogoButton from "../components/LogoButton";
import "../pages/Minprofil.scss";

const Minprofil = () => {
    return (
        <div>
            <div>
                <Sidenav />
            </div>
            <div>
                <LogoButton />
            </div>
            <div className="container">
                <form>
                    <h1>Min Profil</h1>
                    <p>Dessa uppgifter gör att vi kan hålla bättre koll på er och att allt står rätt till.</p>
                    <br></br>
                    <p>Kontaktuppgifter</p>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="name">Namn</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text" id="name" name="name"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="personalnumber">Personnummer</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="number" id="personalnumber" name="personalnumber"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="telephone">Telefonnummer</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="tel" id="telephone" name="telephone" placeholder="+46"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="emailaddress">Email</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="email" id="emailaddress" name="emailaddress"
                            />
                        </div>
                    </div>
                    <br></br>
                    <p>Förlossningsinfo</p>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="dueday">Beräknat födelsedatum</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="date" id="dueday" name="dueday"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="registernumber">Pregnancy number</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="number" id="registernumber" name="registernumber"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="weeks">Om du fött barn tidigare, ange hur många som fötts efter 20 veckor</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="number" id="weeks" name="weeks"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <SaveCancelButtons />
            </div>
        </div>
    );
}

export default Minprofil;