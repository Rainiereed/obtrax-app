import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Onboarding from "../pages/Onboarding";
import Popup from "../pages/Popup";
import PopupReminder from "../pages/PopupReminder";
import Painintensity from "../pages/Painintensity";
import CallMidwife from "../pages/CallMidwife";
import Contraction from "../pages/Contraction";
//import ContractionSummary from '../pages/ContractionSummary';
import Minprofil from "../pages/Minprofil";
import Settings from "../pages/Settings";
import Information from "../pages/Information";
import RegisterSymptoms from "../pages/RegisterSymptoms";
import WaterBroken from "../pages/WaterBroken";
import RegisteredConfirm from "../pages/RegisteredConfirm";


export default function Layout() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Onboarding} />
                    <Route exact path="/ring" component={CallMidwife} />
                    <Route exact path="/popup" component={Popup} />
                    <Route exact path="/reminder" component={PopupReminder} />
                    <Route exact path="/timer" component={Contraction} />
                    <Route exact path="/minprofile" component={Minprofil} />
                    <Route exact path="/setting" component={Settings} />
                    <Route exact path="/information" component={Information} />
                    <Route exact path="/pain" component={Painintensity} />
                    <Route exact path="/symptoms" component={RegisterSymptoms} />
                    <Route exact path="/water" component={WaterBroken} />
                    <Route exact path="/confirm" component={RegisteredConfirm} />
                </Switch>
            </Router>
        </div>
    )
}
