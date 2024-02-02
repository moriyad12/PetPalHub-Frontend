import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import PetCreation from "../Pet/PetCreation";
import {getMyShelterId, getUserId, getUserToken, isUserStaffOrManager} from "../Authentication/UserAuthentication";
import MasterApi from "../Apis/MasterApi";
import {dashboardTypes} from "../Dashboard/DashboardTypes";
import {useNavigate} from "react-router-dom";
import ApplicationHeader from "./ApplicationHeader";

export default function DashboardListView({data,tabIndex,setTabIndex}) {

    const chunkArray = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
            array.slice(i * size, i * size + size)
        );
    };
    return(
        <div>
            {chunkArray(data, 2).map((row) => (
                <div className="row">
                    {
                        row.map((card, index) => {
                            return (
                                <div className="col-sm-6" style={{marginBottom:'1%'}}>
                                    <ApplicationHeader key={index} ApplicationHeader={card} tabIndex={tabIndex}
                                                       setTabIndex={setTabIndex} />
                                </div>
                            )
                        })
                    }
                </div>
            ))}
        </div>
    );
}