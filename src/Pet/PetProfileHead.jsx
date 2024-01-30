
import React from "react";
import PetCreation from "./PetCreation";
import {getUserToken, isUserAdopter} from "../Authentication/UserAuthentication";
import MasterApi from "../Apis/MasterApi";
import {Button} from "@mui/material";

export const PetProfileHead = ({attributes}) => {
    return (
        <div className="profile-head">
            <h5 style={{ color: '#4d4751', fontSize: '25px',lineHeight: '1.2' }}>
                Shlter: {attributes.shelterName}
            </h5>
            <h4 style={{ color: '#4d4751', fontSize: '20px',lineHeight: '1.2' }}>
                {attributes.name}
            </h4>
        </div>

    )
}