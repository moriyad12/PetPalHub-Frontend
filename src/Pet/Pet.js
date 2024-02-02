import React, {useEffect, useState} from "react";
import "./Pet.css";
import { useNavigate, useParams} from "react-router-dom";
import AdopterApi from "../Apis/AdopterApi";
import PetCreation from "./PetCreation";
import MasterApi from "../Apis/MasterApi";
import {getUserId, getUserToken, isUserAdopter, isUserStaffOrManager} from "../Authentication/UserAuthentication";
import {PetProfileHead} from "./PetProfileHead";
import {ProfileDescription} from "./ProfileDescription";
import {PetBasicDetails} from "./PetBasicDetails";
import {PetHealthDetails} from "./PetHealthDetails";
import {PetTypeDetails} from "./PetTypeDetails";
import {useMyContext} from "../ErrorMessage/ErrorMessageContextProvider";
import {ProfileImage} from "../ProfileImages/ProfileImage";
import Loading from "../Loading/Loading";

function Pet() {
    const navigate = useNavigate();
    const { makeAlert } = useMyContext();

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
    const [image, setImage] = useState("");

    const [isLoading,setIsLoading] = useState(false);
    const value = useParams();
    const params = value;
    const id= Number(params.id);
    const viewComponentIndex = Number(params.ViewComponentIndex);


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
            setImage(response.data.profilePicturePath)
        } catch (error) {
            makeAlert(error.response.data.message)
        }
    }
    useEffect(() => {
        fetchpets()
    }, []);
    const handleApplyApplication=async () => {
        try {
            await AdopterApi.post("applyForPet/" + id+ "/" + getUserId(),{},{headers: {"Authorization": `Bearer ${getUserToken()}`}} );
            navigate("/myApplications")
        } catch (error) {
            makeAlert(error.response.data.message)
        }
    };

    return <div>
        <div className="container bg-light emp-profile " style={{ width: '65%' }} >
            <div className="row">
                <div className="col-md-4">
                    <ProfileImage viewComponentIndex={viewComponentIndex}
                                  profileImage={image} setProfileImage={setImage} isUserProfile={false}
                                  id={id} setIsLoading={setIsLoading}/>
                </div>
                <div className="col-md-1">
                </div>
                <div className="col-md-6">
                    <PetProfileHead attributes={attributes}/>
                    {isUserAdopter()&&viewComponentIndex===1 ?
                        <div className="shadow apply " >
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
        <div>
            {
                isLoading ? <Loading/> :null
            }
        </div>
    </div>
}

export default Pet;