
import React from "react";

export const ShelterContact = ({attributes}) => {
    return (
        <div className="row" style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#4d4751', fontSize: '30px',lineHeight: '1.2' }}>
                Contact
            </h4>
            <h7 style={{ color: '#4d4751' ,fontSize: '17px'}}>
                {attributes.phoneNumber}
            </h7>
        </div>
    )
}