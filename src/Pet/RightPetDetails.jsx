import React from "react";
import {ProfileAttributeComponent} from "../Profile/ProfileAttributeComponent";

export const RightPetDetails = ({attributes}) => {
    return (
        <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <ProfileAttributeComponent attributeName="Species" attributeValue={attributes.species} />
                <ProfileAttributeComponent attributeName="Date Of Birth" attributeValue={attributes.dateOfBirth.slice(0, 10)} />
                <ProfileAttributeComponent attributeName="Availability" attributeValue={attributes.availability} />
                <ProfileAttributeComponent attributeName="Vaccine Status" attributeValue={attributes.vaccineStatus} />
            </div>
        </div>
    )
}