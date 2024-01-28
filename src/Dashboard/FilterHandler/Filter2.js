import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {ImEqualizer} from "react-icons/im";
import TextField from "@mui/material/TextField";
import {FilterGender} from "./FilterGender";
import {FilterBehaviour} from "./FilterBehaviour";
import {FilterHealthStatus} from "./FilterHealthStatus";
import {FilterVaccineStatus} from "./FilterVaccineStatus";

export default function Filter2( {getDtoListFromBackEnd} ) {
    const [availability, setAvailability] = React.useState(null);
    const [dateOfBirth, setDateOfBirth] = React.useState(null);
    const [gender, setGender] = React.useState(null);
    const [name, setName] = React.useState("");
    const [healthStatus, setHealthStatus] = React.useState(null);
    const [species, setSpecies] = React.useState(null);
    const [behaviour, setBehaviour] = React.useState(null);
    const [breed, setBreed] = React.useState(null);
    const [vaccineStatus, setVaccineStatus] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);

        setAvailability(null)
        setDateOfBirth(null)
        setVaccineStatus(null)
        setBreed(null)
        setGender(null)
        setName("")
        setHealthStatus(null)
        setSpecies(null)
        setBehaviour(null)
    };

    const handleFilter = (e) => {
        const filters = {
            filters: []
        }

        // Array of variables to handle
        const variablesToHandle = [
            { key: 0, value: availability },
            { key: 2, value: gender },
            { key: 3, value: healthStatus },
            { key: 4, value: name},
            { key: 5, value: vaccineStatus },
            { key: 6, value: species },
            { key: 7, value: behaviour },
        ];

        // Iterate over variables and push filters into the array
        variablesToHandle.forEach((variable) => {
            if (variable.value !== null && variable.value.trim() !== "") {
                filters.filters.push({
                    "first": variable.key,
                    "second": variable.value,
                });
            }
        });


        console.log(filters.filters)
        e.preventDefault();
        getDtoListFromBackEnd(filters);
        handleClose();
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
            >
                <ImEqualizer/>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography sx={{p: 2, height: 650}}>
                    <form className="filter-tab" onSubmit={handleFilter}>
                        <div className="filter-tab-header">
                            <h3>Filter</h3>
                        </div>
                        <div className="filter-tab-body">
                            <TextField
                                id="outlined-basic"
                                label="Pet Name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Species"
                                variant="outlined"
                                value={species}
                                onChange={(e) => setSpecies(e.target.value)}
                            />
                            <FilterGender setGender={setGender}></FilterGender>
                            <FilterBehaviour setBehaviour={setBehaviour} ></FilterBehaviour>
                            <FilterHealthStatus setHealthStatus={setHealthStatus} ></FilterHealthStatus>
                            <FilterVaccineStatus setVaccineStatus={setVaccineStatus}></FilterVaccineStatus>
                            <div className="filter-tab-footer">
                                <Button type="submit" value="Submit" variant="contained">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                </Typography>
            </Popover>
        </div>
    );
}