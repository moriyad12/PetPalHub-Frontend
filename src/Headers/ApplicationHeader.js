import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import PetCreation from "../Pet/PetCreation";


function ApplicationHeader({ApplicationHeader,tabIndex}){
    const handleSeeMore = () => {
        const params = {
            id: ApplicationHeader.id,
        };
        console.log(tabIndex)
    }
    const handleAcceptApplication=() => {
    };
    const handleRejectApplication=() => {
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
                                Gender: {ApplicationHeader.status}
                            </div>
                            <div className="location">
                                Species: {ApplicationHeader.petName}
                            </div>
                            <div className="location">
                                applicationDate: {ApplicationHeader.applicationDate}
                            </div>
                            {tabIndex==="1" ?
                                <>
                                <Button variant={"outlined"} onClick={handleAcceptApplication}>Accept Application</Button>
                                <Button variant={"outlined"} onClick={handleRejectApplication}>Reject Application</Button>
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
