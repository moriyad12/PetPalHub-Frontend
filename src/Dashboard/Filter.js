import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {ImEqualizer} from "react-icons/im";
import TextField from "@mui/material/TextField";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";

export default function Filter( {getDtoListFromBackEnd} )
{
    const [availability, setAvailability] = React.useState(null);
    const [dateOfBirth, setDateOfBirth] = React.useState(null);
    const [gender, setGender] = React.useState(null);
    const [name, setName] = React.useState("");
    const [healthStatus, setHealthStatus] = React.useState(null);
    const [species, setSpecies] = React.useState(null);
    const [behaviour, setBehaviour] = React.useState(null);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);

        setAvailability(null)
        setDateOfBirth(null)
        setGender(null)
        setName("")
        setHealthStatus(null)
        setSpecies(null)
        setBehaviour(null)
    };

    const handleFilter = (e) => {
        const filters = {
            filters: [
                {
                    "first": 4,
                    "second": name,
                },
                // {
                //     "first": "GENDER",
                //     "second": gender,
                // },
            ]
        }

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
                <Typography sx={{p: 2, height: 500}}>
                    <form className="filter-tab" onSubmit={handleFilter}>
                        <div className="filter-tab-header">
                            <h3>Filter</h3>
                        </div>
                        <div className="filter-tab-body">
                            <TextField
                                id="outlined-basic"
                                label="Event Name"
                                variant="outlined"
                                helperText="please enter the Event Name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                            <FormControl sx={{maxWidth: 200}}>
                                <InputLabel id="demo-simple-select-helper-label">gender</InputLabel>
                                <Select
                                    labelId = "demo-simple-select-helper-label"
                                    id = "demo-simple-select-helper"
                                    label = "gender"
                                    value = {gender}
                                    onChange = { (event) => setGender(event.target.value) }
                                >
                                    <MenuItem value="MALE">Male</MenuItem>
                                    <MenuItem value="FEMALE">Female</MenuItem>
                                </Select>
                                <FormHelperText>
                                    select Gender of your choice
                                </FormHelperText>
                            </FormControl>

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