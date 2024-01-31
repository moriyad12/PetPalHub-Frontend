import React from "react";
import "./Pet.css";

export default function PetAttribute({label, value}) {
    return <div className="pet-title">
        <span className="pet-desc-label">{label}:{value}</span>
    </div>
}