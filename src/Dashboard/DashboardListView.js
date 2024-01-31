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
import ApplicationHeader from "../Headers/ApplicationHeader";


export default function DashboardListView({data,tabIndex}) {

    return (
        data.map((card, index) => {
            return (
                <ApplicationHeader key={index} ApplicationHeader={card} tabIndex={tabIndex} />
            );
        })
    );

}
