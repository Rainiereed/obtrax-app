import React from "react";
import { Link } from "react-router-dom";
import "./styles/PainButton.scss";

const PainButton = (props) => {
    return (
        <Link to={props.path} className="buttonPain">{props.text}</Link>
    )
}

export default PainButton;