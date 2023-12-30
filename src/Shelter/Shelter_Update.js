import * as React from 'react';
import {FaPen} from "react-icons/fa6";

import {
    Box,
    Button,

    Modal,
    TextField,
    Typography
} from '@mui/material';
import {getShelterId} from "../Authentication/UserAuthentication";
import userApis from "../Apis/UserApis/UserApis";
import {CountryCityStreet} from "./CountryCityStreet";
import masterApis from "../Apis/MasterApis";

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


export default function Shelter_Update({defaultName, defaultPhoneNumber, defaultLocation}) {

    const [name, setName] = React.useState(defaultName || '');
    const [phoneNumber, setPhoneNumber] = React.useState(defaultPhoneNumber);

    const [country, setCountry] = React.useState(defaultLocation.country);
    const [state, setState] = React.useState(defaultLocation.city);
    const [address, setAddress] = React.useState(defaultLocation.address);
    const [statesInCountry, setStatesInCountry] = React.useState([]);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const handleInformationChange = async () => {
        const newInformation = {
            id: getShelterId(),
            name: name,
            shelterLocation: {country: country, city: state, address: address},
            phoneNumber: phoneNumber,
        }
        try {
            await masterApis.post("updateShelterDto", newInformation);
        } catch (error) {
            alert(error.response.data.message)
        }
    }


    return (
        <div>
            <Button style={{
                borderRadius: 30,
                backgroundColor: "#ffffff",
                padding: "18px 36px",
                color: "black",
                marginTop:9,
                height: 10
            }} variant="contained"  onClick={handleOpen}>  Update  </Button>
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


                            <TextField variant={"outlined"} label={"Name"}
                                       defaultValue={defaultName}
                                       value={name}
                                       onChange={(event) => {
                                           setName(event.target.value)
                                       }}
                            />

                            <TextField variant={"outlined"} label={"Phone Number"}

                                       value={phoneNumber}
                                       onChange={(event) => {
                                           setPhoneNumber(event.target.value)
                                       }}
                            />


                            <CountryCityStreet
                                country={country} state={state} address={address} statesInCountry={statesInCountry}
                                setCountry={setCountry} setState={setState} setAddress={setAddress}
                                setStatesInCountry={setStatesInCountry}
                                req={true}
                            />


                            <Button type="submit" value="Submit" variant="contained" style={{
                                width: "150px", color: "##150044",
                            }}>
                                Submit
                            </Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}