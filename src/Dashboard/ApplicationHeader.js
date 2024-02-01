import * as React from 'react';

import {Button} from '@mui/material';
import {getUserToken, isUserStaffOrManager} from "../Authentication/UserAuthentication";
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

    return (
        <div className="card">
            <div className="card-body" style={{color:'#4d4751'}} >
                <h5 className="card-title" style={{fontSize: '24px'}}>{ApplicationHeader.adopterName}</h5>
                <div style={{fontSize: '15px'}}>
                    <p className="card-text">Status: {ApplicationHeader.status}</p>
                    <p className="card-text">Pet Name: {ApplicationHeader.petName}</p>
                    <p className="card-text"> Application Date: {ApplicationHeader.applicationDate.slice(0, 10)}</p>
                    <p className="card-text">  Shelter Name: {ApplicationHeader.shelterName}</p>
                </div>
                {tabIndex === "1" && isUserStaffOrManager() ?
                    <>
                        <Button className="custom-button"  onClick={handleAcceptApplication}>Accept
                            Application</Button>
                        <Button className="custom-button"  onClick={handleRejectApplication}>Reject
                            Application</Button>
                    </>
                    : null}
            </div>
        </div>
    );

}

export default ApplicationHeader;
