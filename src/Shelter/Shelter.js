import React, {useEffect} from "react";
import {getMyShelterId, getUserId, getUserToken} from "../Authentication/UserAuthentication";
import masterApis from "../Apis/MasterApis";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {ShelterTopRow} from "./ShelterTopRow";
import {ShelterLocation} from "./ShelterLocation";
import {ShelterContact} from "./ShelterContact";
import {ShelterDescription} from "./ShelterDescription";
import {useMyContext} from "../ErrorMessage/ErrorMessageContextProvider";

function Shelter() {
    // const navigate = useNavigate();
    const {makeAlert} = useMyContext();

    const [attributes, setAttributes] = React.useState({
        id: 0,
        name: "",
        phoneNumber: "",
        shelterLocation: {country: "", city: "", address: ""},
        code: "",
    });
    // const location = useLocation();
    const value = useParams();
    // const params = location.state;
    const shelterId = Number(value.id);
    const isOwner = (shelterId === getMyShelterId())
    const sendInformationRequest = async () => {
        try {
            const response = await masterApis.get("getShelterDto/" + shelterId);
            setAttributes(response.data)
        } catch (error) {
            makeAlert(error.response.data.message)
        }
    }
    useEffect(() => {
        sendInformationRequest()
    }, []);

    return (
        <div className="container bg-light emp-profile">
            <ShelterTopRow attributes={attributes} isOwner={isOwner}/>
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
