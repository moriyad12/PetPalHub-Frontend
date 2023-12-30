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
import AdopterApi from "../Apis/AdopterApi";
import {getShelterId, getUserId} from "../Authentication/UserAuthentication";
import MasterApi from "../Apis/MasterApi";



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

export default function PetCreation({ PetId,buttonName}) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleOpen = () => {
        setOpen(true);
        setName("");
        setAvailability("");
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
    const [availability, setAvailability] = React.useState("");
    const [breed, setBreed] = React.useState("");
    const [behaviour, setBehaviour] = React.useState("");
    const [vaccineStatus, setVaccineStatus] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState(new Date().toISOString().slice(0, 16));
    const [species, setSpecies] = React.useState("");
    const [description, setDescription] = React.useState("");
    const handlePetCreation = async (e) => {
        // e.prPetDefault();
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
            shelterId:getShelterId()
        }
        alert(JSON.stringify(Pet))
        try {
            await MasterApi.post("addPet", Pet)
            // handleClose()
            // navigate("/myPets");
            // navigate(0)
        } catch (error) {
            // alert(error.response.data.message)
        }
    }

    return (
        <div >
            <Button onClick={handleOpen}
                    style={
                        {
                            position: "absolute",
                            bottom: "40px",
                            right: "40px",
                        }
                    }
                    variant={"contained"}
            >{buttonName}</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        create an Pet
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 1}}>
                        <form className="modal-form" onSubmit={handlePetCreation}>
                            <TextField id="outlined-basic" label="Pet Name" variant="outlined" required={true}
                                       helperText="please enter the Pet Name"
                                       value={name}
                                       onChange={(Pet) => {
                                           setName(Pet.target.value);
                                       }}
                            />
                            <TextField id="outlined-basic" label="Pet Species" variant="outlined" required={true}
                                       helperText="please enter the Pet Species"
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
                            <DateTime date={dateOfBirth} setDate={setDateOfBirth} req={true}/>
                            <Button type="submit" value="Submit" variant="contained">
                                Submit
                            </Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}