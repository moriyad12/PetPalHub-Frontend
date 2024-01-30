import React, {useEffect} from "react";
import {getShelterId, getUserId, getUserToken} from "../Authentication/UserAuthentication";
import masterApis from "../Apis/MasterApis";
import {useNavigate, useNavigation} from "react-router-dom";
import {ShelterTopRow} from "./ShelterTopRow";
import {ShelterLocation} from "./ShelterLocation";
import {ShelterContact} from "./ShelterContact";
import {ShelterDescription} from "./ShelterDescription";

function Shelter() {
    const [attributes, setAttributes] = React.useState({
        id: 0,
        name: "",
        phoneNumber: "",
        shelterLocation: {country: "", city: "", address: ""},
        code: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const sendInformationRequest = async () => {
            try {
                console.log(getUserToken())
                const response = await masterApis.get("getShelterDto/" + getShelterId(),{ headers: {"Authorization" : `Bearer ${getUserToken()}`} });
                console.log(response);
                setAttributes(response.data)
            } catch (error) {
                navigate("/")
            }
        }
        sendInformationRequest()
    }, []);

    return (
        <div className="container bg-light emp-profile">
            <ShelterTopRow attributes={attributes}/>
            <hr/>
            <ShelterDescription attributes={attributes}/>
            <hr/>
            <ShelterContact attributes={attributes}/>
            <hr/>
            <ShelterLocation attributes={attributes}/>
        </div>
    );
}

export default Shelter;
