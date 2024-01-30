import React from "react";
import {ProfileAttributeComponent} from "../Profile/ProfileAttributeComponent";

export const ShelterDetails = ({attributes}) => {
    return (
        <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <ProfileAttributeComponent attributeName="Shelter Name" attributeValue={attributes.name} />
                <ProfileAttributeComponent attributeName="phone Number" attributeValue={attributes.phoneNumber} />
                <ProfileAttributeComponent attributeName="Country" attributeValue={attributes.shelterLocation.country} />
                <ProfileAttributeComponent attributeName="City" attributeValue={attributes.shelterLocation.city} />
                <ProfileAttributeComponent attributeName="Address" attributeValue={attributes.shelterLocation.address} />
            </div>
        </div>
    )
}