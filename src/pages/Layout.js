import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Slideshow from "../components/Slideshow";
import Sidenav from "../components/Sidenav";
import Slidebar from "../components/Slidebar";
import Popup from "../pages/Popup";
import PopupReminder from "../pages/PopupReminder";
import Painintensity from "../pages/Painintensity";
import CallMidwife from "../pages/CallMidwife";

export default function Layout() {
    return (
        <div>

            <Router>
                <Switch>
                    <Route exact path="/" component={Slideshow} />
                    <Route exact path="/ring" component={CallMidwife} />
                    <Route exact path="/popup" component={Popup} />
                </Switch>
            </Router>
        </div>
    )
}