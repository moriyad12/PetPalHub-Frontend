import React from "react";
import {ProfileAttributeComponent} from "./ProfileAttributeComponent";

export const ProfileDetails = ({profileAttributes}) => {
    return (
        <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <ProfileAttributeComponent attributeName="Email" attributeValue={profileAttributes.email} />
                <ProfileAttributeComponent attributeName="First Name" attributeValue={profileAttributes.firstName} />
                <ProfileAttributeComponent attributeName="Last Name" attributeValue={profileAttributes.lastName} />
                <ProfileAttributeComponent attributeName="Role" attributeValue={profileAttributes.role} />
                <ProfileAttributeComponent attributeName={"Gender"} attributeValue={profileAttributes.gender} />
                <ProfileAttributeComponent attributeName="Phone Number" attributeValue={profileAttributes.phoneNumber} />
            </div>
        </div>
    )
}