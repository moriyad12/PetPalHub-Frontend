import React from "react";

export const PetHealthDetails = ({attributes}) => {
    return (
        <div className="row" style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#4d4751', fontSize: '30px',lineHeight: '1.2' }}>
                About
            </h4>
            <br/>
            <br/>
            <h6 style={{ color: '#4d4751', fontSize: '16px',lineHeight: '1.2',marginBottom: '1px',fontWeight: '550' }}>
                Health Status
            </h6>
            <h7 style={{ color: '#4d4751',fontSize: '14px',marginBottom: '5px' }}>
                {attributes.healthStatus}
            </h7>
            <h6 style={{ color: '#4d4751',fontSize: '16px',lineHeight: '1.2',marginBottom: '1px',fontWeight: '550'}}>
                Vaccine Status
            </h6>
            <h7 style={{ color: '#4d4751',fontSize: '14px' }}>
                {attributes.vaccineStatus}
            </h7>
        </div>
    )
}