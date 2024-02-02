import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField"
import {useNavigate} from 'react-router-dom';
import {DateTime} from "./DateTime";
import {Description} from "./Description";
import {Gender} from "./Gender";
import {HealthStatus} from "./HealthStatus";
import {VaccineStatus} from "./VaccineStatus";
import {Behaviour} from "./Behaviour";
import {Breed} from "./Breed";
import {getMyShelterId} from "../Authentication/UserAuthentication";
import {useMyContext} from "../ErrorMessage/ErrorMessageContextProvider";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3.5,
    width: "70%",
    borderRadius: "24px",
};

export default function PetCreation({ PetId,buttonName,handleSubmitFunction}) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleOpen = () => {
        setOpen(true);
        setName("");
        setBreed("");
        setBehaviour("");
        setVaccineStatus("");
        setDateOfBirth(new Date().toISOString().slice(0, 16));
        setSpecies("");
        setDescription("");
        setGender("");
        setHealthStatus("");
    }

    const handleClose = () => setOpen(false);
    const [name, setName] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [healthStatus, setHealthStatus] = React.useState("");
    const [breed, setBreed] = React.useState("");
    const [behaviour, setBehaviour] = React.useState("");
    const [vaccineStatus, setVaccineStatus] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState(new Date().toISOString().slice(0, 16));
    const [species, setSpecies] = React.useState("");
    const [description, setDescription] = React.useState("");
    const { makeAlert } = useMyContext();

    const handlePetCreation = async (e) => {
        e.preventDefault();
        const Pet = {
            id: PetId,
            name: name,
            gender:gender,
            healthStatus:healthStatus,
            availability:0,
            breed:breed,
            behaviour:behaviour,
            vaccineStatus:vaccineStatus,
            dateOfBirth:dateOfBirth,
            species:species,
            description:description,
            shelterId:getMyShelterId()
        }
        try {
            handleSubmitFunction(Pet)
            handleClose()
            navigate("/myPets");
            navigate(0)
        } catch (error) {
            makeAlert(error.response.data.message)
        }
    }

    return (
        <div >
            <button className="ghost" onClick={handleOpen}
            >{buttonName}</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{mt: 1}}>
                        <form className="modal-form" onSubmit={handlePetCreation}>
                            <TextField className="m-2" id="outlined-basic" label="Pet Name" variant="outlined" required={true}
                                       value={name}
                                       onChange={(Pet) => {
                                           setName(Pet.target.value);
                                       }}
                            />
                            <TextField className="m-2" id="outlined-basic" label="Pet Species" variant="outlined" required={true}
                                       value={species}
                                       onChange={(Pet) => {
                                           setSpecies(Pet.target.value);
                                       }}
                            />
                            <Gender setGender={setGender} req={true}/>
                            <HealthStatus setHealthStatus={setHealthStatus} req={true}/>
                            <VaccineStatus setVaccineStatus={setVaccineStatus} req={true}/>
                            <Behaviour setBehaviour={setBehaviour}/>
                            <Breed setBreed={setBreed}/>
                            <Description description={description} setDescription={setDescription}/>
                            <br/>
                            <DateTime date={dateOfBirth} setDate={setDateOfBirth} req={true}/>
                            <Button style={{position: 'fixed', bottom: 45,right:45,backgroundColor:'#be5b01'}} type="submit" value="Submit" variant="contained">
                                Submit
                            </Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}