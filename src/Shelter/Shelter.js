import ShelterAttribute from "./ShelterAttribute";
import React, {useEffect} from "react";
import {getUserId} from "../Authentication/UserAuthentication";
import masterApis from "../Apis/MasterApis";
import {useNavigate, useNavigation} from "react-router-dom";

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
                const response = await masterApis.get("getShelterDto/" + getUserId());
                console.log(response);
                setAttributes(response.data)
            } catch (error) {
                navigate("/")
                // alert(error.response.data.message)
            }
        }
        sendInformationRequest()
    }, []);

    return (
        <div className="shelter-container">
            <div className="shelter">
                <div className="shelter-header">
                    <div className="shelter-header-center">
                        <span className="Shelter-Name">{attributes.name}</span>
                    </div>
                </div>
                <div className="shelter-body">
                    <ShelterAttribute label={"Shelter Name"} value={attributes.name}/>
                    <ShelterAttribute label={"phone Number"} value={attributes.phoneNumber}/>
                    <ShelterAttribute label={"Country"} value={attributes.shelterLocation.country}/>
                    <ShelterAttribute label={"City"} value={attributes.shelterLocation.city}/>
                    <ShelterAttribute label={"Address"} value={attributes.shelterLocation.address}/>
                    <div className="shelter-description">
                        <span>{attributes.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shelter;
