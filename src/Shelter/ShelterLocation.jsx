
import React from "react";

export const ShelterLocation = ({attributes}) => {
    return (
        <div className="row" style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#4d4751', fontSize: '30px',lineHeight: '1.2' }}>
                Location
            </h4>
            <h7 style={{ color: '#4d4751' ,fontSize: '17px'}}>
                {attributes.shelterLocation.country} . {attributes.shelterLocation.city} . {attributes.shelterLocation.address}
            </h7>
        </div>
    )
}