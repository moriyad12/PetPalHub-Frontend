import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {ImEqualizer} from "react-icons/im";
import TextField from "@mui/material/TextField";

export default function Filter( {getDtoListFromBackEnd} )
{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [name, setName] = React.useState("");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        // setAddress("");
        // setCountry("");
        // setState("");
        // setStatesInCountry([]);
        // setEventCategory("");
        // setEventSubCategory("");
        // setName("");
        // setOrganizerName("");
    };

    const handleFilter = (e) => {
        e.preventDefault();
        getDtoListFromBackEnd();
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
                            {/*<TextField*/}
                            {/*    id="outlined-basic"*/}
                            {/*    label="Organizer Name"*/}
                            {/*    variant="outlined"*/}
                            {/*    helperText="please enter the Organizer Name"*/}
                            {/*    value={organizerName}*/}
                            {/*    onChange={(event) => {*/}
                            {/*        setOrganizerName(event.target.value);*/}
                            {/*    }}*/}
                            {/*/>*/}
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