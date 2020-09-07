import React from "react";
import "./styles/SaveCancelButtons.scss";

const SaveCancelButtons = () => {
    return (
        <div>
            <button className="saveButton" >Spara</button>
            <div class="divider" />
            <button className="cancelButton">Avbryt</button>
        </div>
    );
}

export default SaveCancelButtons;