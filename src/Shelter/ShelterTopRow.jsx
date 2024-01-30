
import React from "react";
import Shelter_Update from "./Shelter_Update";

export const ShelterTopRow = ({attributes}) => {
    return (
        <div className="row" style={{ textAlign: 'left' }}>
            <div className="col-md-4">
                <h4 style={{ color: '#4d4751', fontSize: '30px',lineHeight: '1.2' }}>
                    {attributes.name}
                </h4>
                <h7 style={{ color: '#4d4751',fontSize: '17px' }}>
                    Shelter
                </h7>
            </div>
            <div className="col-md-6">
            </div>
            <div className="col-md-2" >
                <Shelter_Update
                    defaultName={attributes.name}
                    defaultLocation={attributes.shelterLocation}
                    defaultPhoneNumber={attributes.phoneNumber}/>
            </div>
        </div>
    )
}