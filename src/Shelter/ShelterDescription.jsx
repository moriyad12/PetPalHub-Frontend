import React from "react";

export const ShelterDescription = ({attributes}) => {
    return (
        <div className="row" style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#4d4751', fontSize: '30px',lineHeight: '1.2' }}>
                Description
            </h4>
            <br/>
            <br/>
            <h7 style={{ color: '#4d4751',fontSize: '14px' }}>
                {attributes.description}
            </h7>
        </div>
    )
}