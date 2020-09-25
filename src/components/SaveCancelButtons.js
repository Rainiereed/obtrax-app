import React from "react";
import "./styles/SaveCancelButtons.scss";

const SaveCancelButtons = () => {
    return (
        <div>
            <a href="/timer"><button className="saveButton">Spara</button></a>
            <div className="divider" />
            <button className="cancelButton">Avbryt</button>
        </div>
    );
}

export default SaveCancelButtons;
