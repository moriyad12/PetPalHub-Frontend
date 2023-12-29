import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {useNavigate} from "react-router-dom";


function PetHeader({petHeader}) {
    // const petHeader = {
    //     id: 1,
    //     name: 'Sample Pet',
    //     species: 'Dog',
    //     healthStatus: 'Good',
    //     gender: 'Male',
    //     shelterName: 'Sample Shelter',
    // };

     const navigate = useNavigate();
    const handleSeeMore = () => {
        const params = {
            id: petHeader.id,
        };
        navigate("petview", {state: params});
    }

    return (
        <Card className="card" style={{width: "90%", transition: "all 0.2s ease-in-out"}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <div className="card-header">
                            <div className="pet-name">
                                {petHeader.name}
                            </div>
                        </div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div className="card-content">
                            <div className="pet-gender">
                                Gender: {petHeader.gender}
                            </div>
                            <div className="pet-species">
                                Species: {petHeader.species}
                            </div>
                            <div className="pet-healthStatus">
                                Species: {petHeader.healthStatus}
                            </div>
                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <div className="card-footer">
                    <Button size="small" color="primary" onClick={handleSeeMore}>
                        see more
                    </Button>
                    <div className="Shelter-name">
                        Shelter Name: {petHeader.shelterName}
                    </div>
                </div>
            </CardActions>
        </Card>
    );

}

export default PetHeader;
