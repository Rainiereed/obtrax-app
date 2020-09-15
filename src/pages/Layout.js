import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Slideshow from "../components/Slideshow";
import Popup from "../pages/Popup";
import PopupReminder from "../pages/PopupReminder";
import Painintensity from "../pages/Painintensity";
import CallMidwife from "../pages/CallMidwife";
import Contraction from "../components/Contraction";
import Minprofil from "../pages/Minprofil";
import Settings from "../pages/Settings";
import Information from "../pages/Information";
import RegisterSymptoms from "../pages/RegisterSymptoms";
import WaterBroken from "../pages/WaterBroken";


export default function Layout() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Slideshow} />
                    <Route exact path="/ring" component={CallMidwife} />
                    <Route exact path="/popup" component={Popup} />
                    <Route exact path="/reminder" component={PopupReminder} />
                    <Route exact path="/timer" component={Contraction} />
                    <Route exact path="/minprofile" component={Minprofil} />
                    <Route exact path="/setting" component={Settings} />
                    <Route exact path="/information" component={Information} />
                    <Route exact path="/symptoms" component={RegisterSymptoms} />
                    <Route exact path="/water" component={WaterBroken} />
                </Switch>
            </Router>
        </div>
    )
}
