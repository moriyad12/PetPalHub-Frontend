import React, {useEffect, useState} from "react";
import "./Pet.css";
import PetAttribute from "./PetAttribute";


function Pet() {


    //const navigate = useNavigate();
    const [attributes, setAttributes] = React.useState({
        name: "",
        description: "",
        species: "",
        dateOfBirth: "",
        shelterName: "",
        gender: "",
        healthStatus: "",
        availability: "",
        breed: "",
        behaviour: "",
        vaccineStatus: "",
    });
    // const[id,setId] =useState(params.id);

    // const fetchpets = async () => {
    //     try {
    //         const response =[];
    //         const newId = response.data.id;
    //         setId(newId);
    //         setAttributes(response.data)
    //     } catch (error) {
    //         alert(error.response.data.message)
    //     }
    // }
    // useEffect(() => {
    //     fetchpets()
    // }, []);

    return <div className="pet-container">
        <div className="pet">
            <div className="pet-header">
                <div className="pet-header-center">
                    <span className="Shelter-Name">{attributes.shelterName}</span>
                    <span>represents</span>
                </div>
            </div>
             <div className="pet-body">
                <PetAttribute label={"Pet Name"} value={attributes.name}/>
                <PetAttribute label={"Species"} value={attributes.species}/>
                <PetAttribute label={"Date Of Birth"} value={attributes.dateOfBirth}/>
                <PetAttribute label={"Gender"} value={attributes.gender}/>
                <PetAttribute label={"Availability"} value={attributes.availability}/>
                <PetAttribute label={"Behaviour"} value={attributes.behaviour}/>
                <PetAttribute label={"Breed"} value={attributes.breed}/>
                <PetAttribute label={"Vaccine Status"} value={attributes.vaccineStatus}/>
                <PetAttribute label={"Health Status"} value={attributes.healthStatus}/>
                <PetAttribute label={"Gender"} value={attributes.gender}/>
                <div className="pet-description">
                    <span>{attributes.description}</span>
                </div>
            </div>
        </div>
    </div>
}

export default Pet;