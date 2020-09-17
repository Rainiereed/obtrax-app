import React from "react";
import "./styles/SaveCancelButtons.scss";

const SaveCancelButtons = () => {
    return (
        <div>
            <button className="saveButton" type="submit">Spara</button>
            <div class="divider" />
            <button className="cancelButton">Avbryt</button>
        </div>
    );
}

export default SaveCancelButtons;
