
import React from "react";
import PetCreation from "./PetCreation";
import {getUserToken, isUserAdopter} from "../Authentication/UserAuthentication";
import MasterApi from "../Apis/MasterApi";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {getMyShelterId} from "../Authentication/UserAuthentication";

export const PetProfileHead = ({attributes}) => {

    const navigate = useNavigate();
    const handleClickOnCard =()=>{
        // const params = {
        //     shelterId: attributes.shelterId
        // };
        // navigate("petShelter",{state: params, replace: true });
        navigate(`/shelter/${getMyShelterId()}`)
    }
    return (
        <div className="profile-head" >
            <h5  style={{ color: '#4d4751', fontSize: '25px',lineHeight: '1.2' , textAlign: 'center'}}>
                <a href=""  onClick={handleClickOnCard} className="no-underline-link">
                    Shlter: {attributes.shelterName}
                </a>
            </h5>
            <h4  style={{ color: '#4d4751', fontSize: '20px',lineHeight: '1.2' , textAlign: 'center'}}>
                {attributes.name}
            </h4>
        </div>

    )
}