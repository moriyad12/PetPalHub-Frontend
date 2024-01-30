import React from "react";

export const PetTypeDetails = ({attributes}) => {
    return (
        <div className="row" style={{ textAlign: 'left' }}>
            <h7 style={{ color: '#4d4751' ,fontSize: '17px'}}>
                {attributes.gender} . {attributes.species} . {attributes.breed}
            </h7>
        </div>
    )
}