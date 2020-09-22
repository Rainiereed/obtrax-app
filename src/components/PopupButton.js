import React from "react";
import { Link } from "react-router-dom";
import "./styles/PopupButton.scss";

const PopupButton = (props) => {
    return (
        <Link to={props.path} className="buttonMenu">{props.text}</Link>
    )
}

export default PopupButton;