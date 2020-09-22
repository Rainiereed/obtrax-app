import React from "react";
import { Link } from "react-router-dom";
import "./styles/ConfirmButton.scss";

const ConfirmButton = (props) => {
    return (
        <Link to={props.path} type="submit" className="buttonWater" >{props.text}</Link>
    )
}

export default ConfirmButton;