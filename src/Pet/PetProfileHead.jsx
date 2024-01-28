
import React from "react";
import PetCreation from "./PetCreation";
import {getUserToken, isUserAdopter} from "../Authentication/UserAuthentication";
import MasterApi from "../Apis/MasterApi";
import {Button} from "@mui/material";

export const PetProfileHead = ({attributes}) => {
    return (
        <div className="profile-head">
            <h5>
                Shlter: {attributes.shelterName}
            </h5>
            <h4>
                {attributes.name}
            </h4>
        </div>

    )
}