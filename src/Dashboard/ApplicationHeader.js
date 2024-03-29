import * as React from 'react';

import {Button} from '@mui/material';
import {getUserToken, isUserStaffOrManager} from "../Authentication/UserAuthentication";
import MasterApi from "../Apis/MasterApi"
import {useNavigate} from "react-router-dom";
import {useMyContext} from "../ErrorMessage/ErrorMessageContextProvider";
import '../Dashboard/ApplicationHeader.css'
import {useState} from "react";
import Loading from "../Loading/Loading";


function ApplicationHeader({ApplicationHeader, tabIndex,setTabIndex}) {
    const navigate = useNavigate()
    const [isLoading,setIsLoading] = useState(false);
    const { makeAlert } = useMyContext();

    const handleAcceptApplication = async () => {
        setIsLoading(true)
        try {
            console.log(getUserToken())
            await MasterApi.post("acceptApplication/" + ApplicationHeader.petId + "/" + ApplicationHeader.adopterId, {}, {headers: {"Authorization": `Bearer ${getUserToken()}`}});
            navigate(0)
        } catch (error) {
            makeAlert(error.response.data.message)
        }
    };
    const handleRejectApplication = async () => {
        setIsLoading(true)
        try {
            console.log(getUserToken())
            await MasterApi.post("rejectApplication/" + ApplicationHeader.petId + "/" + ApplicationHeader.adopterId, {}, {headers: {"Authorization": `Bearer ${getUserToken()}`}});
            navigate(0)
        } catch (error) {
            alert(error.response.data.message)
        }
    };
    const handleClickOnAdopter = () => {
        navigate(`profile/${ApplicationHeader.adopterId}`)
    }
    const handleClickOnPet = () => {
        navigate(`petview/${ApplicationHeader.petId}/${isUserStaffOrManager() ? 3 : 1}`)
    }
    return (
      
        <div>
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

            <div>
                {
                    isLoading ? <Loading/> :null
                }
            </div>

        </div>

    );

}

export default ApplicationHeader;
