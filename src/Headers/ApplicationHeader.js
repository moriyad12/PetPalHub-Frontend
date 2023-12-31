import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import PetCreation from "../Pet/PetCreation";
import {getShelterId, getUserId, getUserToken, isUserStaffOrManager} from "../Authentication/UserAuthentication";
import MasterApi from "../Apis/MasterApi";
import {dashboardTypes} from "../Dashboard/DashboardTypes";
import {useNavigate} from "react-router-dom";


function ApplicationHeader({ApplicationHeader, tabIndex}) {
    const navigate = useNavigate()
    const handleAcceptApplication = async () => {
        try {
            console.log(getUserToken())
            await MasterApi.post("acceptApplication/" + ApplicationHeader.petId + "/" + ApplicationHeader.adopterId, {},{headers: {"Authorization": `Bearer ${getUserToken()}`}});
            navigate(0)
        } catch (error) {
            alert(error.response.data.message)
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
        <Card className="card" style={{width: "90%", transition: "all 0.2s ease-in-out"}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <div className="card-header">
                            <div className="pet-name">
                                {ApplicationHeader.adopterName}
                            </div>
                        </div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div className="card-content">
                            <div className="pet-category">
                                Status: {ApplicationHeader.status}
                            </div>
                            <div className="location">
                                Pet Name: {ApplicationHeader.petName}
                            </div>
                            <div className="location">
                                application Date: {ApplicationHeader.applicationDate.slice(0, 10)}
                            </div>
                            {tabIndex === "1" && isUserStaffOrManager() ?
                                <>
                                    <Button variant={"outlined"} onClick={handleAcceptApplication}>Accept
                                        Application</Button>
                                    <Button variant={"outlined"} onClick={handleRejectApplication}>Reject
                                        Application</Button>
                                </>
                                : null}

                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <div className="card-footer">
                    <div className="Organizer-name">
                        Shelter Name: {ApplicationHeader.shelterName}
                    </div>
                </div>
            </CardActions>
        </Card>
    );

}

export default ApplicationHeader;
