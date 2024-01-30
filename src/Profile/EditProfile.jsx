import {ProfileAttributeComponent} from "./ProfileAttributeComponent";
import React from "react";
import BasicModal from "./profile-update-modal";

export const EditProfile = ({profileAttributes}) => {
    return (
        <div className="header-btns ">
            <BasicModal
                defaultFirstName={profileAttributes.firstName}
                defaultLastName={profileAttributes.lastName}
                defaultGender={profileAttributes.gender}
                defaultPhoneNumber={profileAttributes.phoneNumber}/>
        </div>
    )
}