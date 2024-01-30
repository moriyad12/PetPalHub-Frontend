
import React from "react";

export const ShelterHead = ({attributes}) => {
    return (
        <div class="profile-head">
            <h5>
                {attributes.name}
            </h5>
            <h6>
               Shelter
            </h6>
        </div>
    )
}