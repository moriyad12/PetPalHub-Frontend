import React, {useEffect, useState} from "react";
import "./Pet.css";
import {useLocation, useNavigate} from "react-router-dom";
import AdopterApi from "../Apis/AdopterApi";
import PetCreation from "./PetCreation";
import MasterApi from "../Apis/MasterApi";
import {getUserId, getUserToken, isUserAdopter, isUserStaffOrManager} from "../Authentication/UserAuthentication";
import {ProfileImage} from "../Profile/ProfileImage";
import {PetProfileHead} from "./PetProfileHead";
import {ProfileDescription} from "./ProfileDescription";
import {PetBasicDetails} from "./PetBasicDetails";
import {PetHealthDetails} from "./PetHealthDetails";
import {PetTypeDetails} from "./PetTypeDetails";


function Pet() {


    const navigate = useNavigate();
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
    const location = useLocation();
    const params = location.state;
    // let id = params.id

    const id=params.id;
    const viewComponentIndex = params.ViewComponentIndex;

    const fetchpets = async () => {
        const data = {
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
        };
        setAttributes(data);
        try {
            const response = await AdopterApi.get("petForUser/" + id);
            setAttributes(response.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    useEffect(() => {
        fetchpets()
    }, []);
    const handleApplyApplication=async () => {
        try {
            console.log(getUserToken())
            await AdopterApi.post("applyForPet/" + id+ "/" + getUserId(),{},{headers: {"Authorization": `Bearer ${getUserToken()}`}} );
            navigate("/myApplications")
        } catch (error) {
            alert(error.response.data.message)
        }
    };

    return <div className="container bg-light emp-profile">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileImage viewComponentIndex={viewComponentIndex} />
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-6">
                        <PetProfileHead attributes={attributes}/>
                            {isUserAdopter()&&viewComponentIndex===1 ?
                                <div className="shadow apply">
                                Considering {attributes.name} for
                                <br/>
                                adoption?
                                <button  className="ghost" onClick={handleApplyApplication}>Apply Application</button>
                                 </div>
                                : null}
                            {viewComponentIndex===3 ?
                                <div className="shadow apply">
                                    Update {attributes.name} Profile
                                    <PetCreation PetId={id}  buttonName="Update Pet" handleSubmitFunction={async(Pet)=>{
                                        console.log(getUserToken())
                                        await MasterApi.post("editPet", Pet,{headers: {"Authorization": `Bearer ${getUserToken()}`}});
                                    }}/>
                                </div>
                                : null}
                    </div>
                </div>
                <hr/>
        <PetBasicDetails attributes={attributes}/>
        <hr/>
       <PetTypeDetails attributes={attributes}/>
        <hr/>
        <PetHealthDetails attributes={attributes}/>
        <hr/>
        <ProfileDescription attributes={attributes}/>
    </div>
}

export default Pet;