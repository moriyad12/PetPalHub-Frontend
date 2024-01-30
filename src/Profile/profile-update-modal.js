import * as React from 'react';
import {FaPen} from "react-icons/fa6";

import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TextField,
    Typography
} from '@mui/material';
import {getUserId, getUserToken} from "../Authentication/UserAuthentication";
import userApis from "../Apis/UserApis/UserApis";

// import {getUserId} from "../../../src/Authentication/UserAuthentication";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "24px",
    width: "50%",
};


export default function BasicModal({defaultFirstName, defaultLastName, defaultGender, defaultPhoneNumber}) {

    const [firstName, setFirstName] = React.useState(defaultFirstName || '');
    const [lastName, setLastName] = React.useState(defaultLastName);
    const [gender, setGender] = React.useState(defaultGender);
    const [phoneNumber, setPhoneNumber] = React.useState(defaultPhoneNumber);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const handleSubmit = () => {
        setOpen(false);
        handleInformationChange();
        window.location.reload();
    };

    const handleInformationChange = async () => {
        const newInformation = {
            id: getUserId(),
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            phoneNumber: phoneNumber,
        }
        try {
            console.log(getUserToken())
            await userApis.post("updateUserProfile", newInformation, {headers: {"Authorization": `Bearer ${getUserToken()}`}});
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <div>
            <Button class="profile-edit-btn" name="btnAddMore" value="Edit Profile" onClick={handleOpen}>Edit Profile</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update Profile Info
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 1}}>
                        <form className="profile-update-modal-form" onSubmit={handleInformationChange}>


                            <TextField variant={"outlined"} label={"First Name"}
                                       defaultValue={defaultFirstName}
                                       value={firstName}
                                       onChange={(event) => {
                                           setFirstName(event.target.value)
                                       }}
                            />
                            {/*defaultValue={defaultLastName}*/}
                            <TextField variant={"outlined"} label={"Last Name"}
                                       defaultValue={defaultLastName}
                                       value={lastName}
                                       onChange={(event) => {
                                           setLastName(event.target.value)
                                       }}
                            />
                            {/*defaultValue={defaultPaypalAccount}*/}
                            <TextField variant={"outlined"} label={"Phone Number"}

                                       value={phoneNumber}
                                       onChange={(event) => {
                                           setPhoneNumber(event.target.value)
                                       }}
                            />
                            <FormControl sx={{maxWidth: 200}}>
                                <InputLabel id="demo-simple-select-helper-label">gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    label="gender"
                                    value={gender}
                                    onChange={(event) => setGender(event.target.value)}
                                >
                                    <MenuItem value="MALE">Male</MenuItem>
                                    <MenuItem value="FEMALE">Female</MenuItem>

                                </Select>
                                <FormHelperText>
                                    Select Your Gender
                                </FormHelperText>
                            </FormControl>
                            <Button type="submit" value="Submit" variant="contained" style={{
                                width: "150px", color: "##150044",
                            }}
                                    onClick={handleSubmit}>
                                Submit
                            </Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}