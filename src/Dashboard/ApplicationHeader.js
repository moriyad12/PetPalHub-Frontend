import * as React from 'react';

import {Button} from '@mui/material';
import {getUserId, getUserToken, isUserStaffOrManager} from "../Authentication/UserAuthentication";
import MasterApi from "../Apis/MasterApi"
import {useNavigate} from "react-router-dom";
import {useMyContext} from "../ErrorMessage/ErrorMessageContextProvider";
import '../Dashboard/ApplicationHeader.css'


function ApplicationHeader({ApplicationHeader, tabIndex}) {
    const navigate = useNavigate()
    const { makeAlert } = useMyContext();

    const handleAcceptApplication = async () => {
        try {
            console.log(getUserToken())
            await MasterApi.post("acceptApplication/" + ApplicationHeader.petId + "/" + ApplicationHeader.adopterId, {},{headers: {"Authorization": `Bearer ${getUserToken()}`}});
            navigate(0)
        } catch (error) {
            makeAlert(error.response.data.message)
        }
    };
    const handleRejectApplication = async () => {
        try {
            console.log(getUserToken())
            await MasterApi.post("rejectApplication/" + ApplicationHeader.petId + "/" + ApplicationHeader.adopterId, {},{headers: {"Authorization": `Bearer ${getUserToken()}`}});
            navigate(0)
        } catch (error) {
            alert(error.response.data.message)
        }
    };
    const handleClickOnAdopter =()=>{
        const params = {
            adopterId: ApplicationHeader.adopterId
        };
        navigate("adopterProfile",{state: params, replace: true });
    }
    const handleClickOnPet =(id)=>{
        const params = {
            id: ApplicationHeader.petId,
            ViewComponentIndex: isUserStaffOrManager()? 3: 1
        };
        navigate("petview", { state: params, replace: true });
    }
    return (
        <div className="card">
            <div className="card-body" style={{color:'#4d4751'}} >
                <h5 className="card-title" style={{fontSize: '24px'}}>
                    <a href=""  onClick={handleClickOnAdopter} className="no-underline-link">
                        {ApplicationHeader.adopterName}
                    </a>
                </h5>
                <div style={{fontSize: '15px'}}>
                    <p className="card-text">Status: {ApplicationHeader.status}</p>
                    <p className="card-text">Pet Name:
                        <a href=""  onClick={handleClickOnPet} className="no-underline-link">
                            {ApplicationHeader.petName}
                        </a>
                    </p>
                    <p className="card-text"> Application Date: {ApplicationHeader.applicationDate.slice(0, 10)}</p>
                    <p className="card-text">  Shelter Name: {ApplicationHeader.shelterName}</p>
                </div>
                {tabIndex === "1" && isUserStaffOrManager() ?
                    <>
                        <Button className="custom-button"  style={{color: '#be5b01'}} onClick={handleAcceptApplication}>Accept
                            Application</Button>
                        <Button className="custom-button"  style={{color: '#be5b01'}} onClick={handleRejectApplication}>Reject
                            Application</Button>
                    </>
                    : null}
            </div>
        </div>
    );

}

export default ApplicationHeader;
