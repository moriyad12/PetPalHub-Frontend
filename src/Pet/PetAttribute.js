import React from "react";
import "./Pet.css";

function PetAttribute({label, value}) {
    return <div className="pet-title">
        <span className="pet-desc-label">{label}:{value}</span>
    </div>
}
export default PetAttribute;