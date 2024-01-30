import React from "react";

export const ProfileAttributeComponent = ({attributeName, attributeValue}) => {
    return (
        <div class="row">
            <div class="col-md-6">
                <label>{attributeName}</label>
            </div>
            <div class="col-md-6">
                <p>{attributeValue}</p>
            </div>
        </div>
    )
}