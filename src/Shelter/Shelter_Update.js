import * as React from 'react';
import {useMyContext} from "../ErrorMessage/ErrorMessageContextProvider";

import {
    Box,
    Button,

    Modal,
    TextField,
    Typography
} from '@mui/material';
import {getMyShelterId, getUserToken} from "../Authentication/UserAuthentication";
import {CountryCityStreet} from "./CountryCityStreet";
import masterApis from "../Apis/MasterApis";

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
    const [description, setDescription] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const { makeAlert } = useMyContext();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const handleInformationChange = async () => {
        const newInformation = {
            id: getMyShelterId(),
            name: name,
            shelterLocation: {country: country, city: state, address: address},
            description: description,
            phoneNumber: phoneNumber,
        }
        try {
            console.log(getUserToken())
            await masterApis.post("updateShelterDto", newInformation,{ headers: {"Authorization" : `Bearer ${getUserToken()}`} });
        } catch (error) {
            makeAlert(error.response.data.message)
        }
    }
    const handleSubmit = () => {
        setOpen(false);
        handleInformationChange();
        window.location.reload();
    };

    return (
        <div>
            <Button class="profile-edit-btn" name="btnAddMore" value="Edit Profile" onClick={handleOpen}>Edit Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
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
                            <TextField style={{marginBottom: "-1%"}} variant={"outlined"} label={"Description"}
                                       value={description}
                                       onChange={(event) => {
                                           setDescription(event.target.value)
                                       }}
                            />

                            <CountryCityStreet
                                country={country} state={state} address={address} statesInCountry={statesInCountry}
                                setCountry={setCountry} setState={setState} setAddress={setAddress}
                                setStatesInCountry={setStatesInCountry}
                                req={true}
                            />
                            <Button type="submit" value="Submit" variant="contained" style={{
                                width: "150px", color: "##150044",backgroundColor:'#be5b01',position: 'fixed', bottom: 40,right:40
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