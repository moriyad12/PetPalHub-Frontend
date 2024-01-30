import React from "react";

export const PetBasicDetails = ({attributes}) => {
    return (
        <div className="row" style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#4d4751', fontSize: '30px',lineHeight: '1.2' }}>
                {attributes.name}
            </h4>
            <br/>
            <br/>
            <h7 style={{ color: '#4d4751',fontSize: '17px' }}>
                Date of Birth : {attributes.dateOfBirth.slice(0, 10)}
            </h7>
            <br/>
            <h7 style={{ color: '#4d4751',fontSize: '17px' }}>
                Behaviour : {attributes.behaviour}
            </h7>
        </div>
    )
}