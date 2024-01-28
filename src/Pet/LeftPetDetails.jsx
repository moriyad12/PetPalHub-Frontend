import React from "react";
import {ProfileAttributeComponent} from "../Profile/ProfileAttributeComponent";

export const LeftPetDetails = ({attributes}) => {
    return (
        <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <ProfileAttributeComponent attributeName="Pet Name" attributeValue={attributes.name} />
                <ProfileAttributeComponent attributeName={"Gender"} attributeValue={attributes.gender} />
                <ProfileAttributeComponent attributeName="Breed" attributeValue={attributes.breed} />
                <ProfileAttributeComponent attributeName="Health Status" attributeValue={attributes.healthStatus} />
                <ProfileAttributeComponent attributeName="Behaviour" attributeValue={attributes.behaviour} />
            </div>
        </div>
    )
}