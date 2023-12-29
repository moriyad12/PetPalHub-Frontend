import React from "react";
import "./Shelter.css"; // Update the CSS file name if needed

function ShelterAttribute({ label, value }) {
    return (
        <div className="shelter-title">
            <span className="shelter-desc-label">{label}:{value}</span>
        </div>
    );
}

export default ShelterAttribute;
