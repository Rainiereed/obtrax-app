import React from "react";
import { Link } from "react-router-dom";
import "./styles/WaterBrokenButton.scss";

const WaterBrokenButton = (props) => {
    return (
        <Link to={props.path} className="symptomButton" id="Item1">{props.text}</Link>
    )
}

export default WaterBrokenButton;