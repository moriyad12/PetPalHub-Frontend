
import React from "react";

export const ProfileHead = ({profileAttributes}) => {
    return (
        <div class="profile-head">
            <h5>
                {profileAttributes.firstName} {profileAttributes.lastName}
            </h5>
            <h6>
                {profileAttributes.role}
            </h6>
        </div>
    )
}