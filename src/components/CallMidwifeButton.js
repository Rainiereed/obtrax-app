import React from "react";
import { Link } from "react-router-dom";
import "./styles/CallMidwifeButton.scss";

const CallMidwifeButton = (props) => {
    return (
        <Link to={props.path} className="buttonRing">{props.text}</Link>
    )
}

export default CallMidwifeButton;