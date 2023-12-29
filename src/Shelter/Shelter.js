import ShelterAttribute from "./ShelterAttribute";
import React from "react";

function Shelter() {
    const [attributes, setAttributes] = React.useState({
        name: "Alex",
        phoneNumber: "01204554352",
        location:{Country:"",City:"",Address:""},
        code: "123456",
    });

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
                    <ShelterAttribute label={"Country"} value={attributes.location.Country}/>
                    <ShelterAttribute label={"City"} value={attributes.location.City}/>
                    <ShelterAttribute label={"Address"} value={attributes.location.Address}/>
                    <ShelterAttribute label={"code"} value={attributes.code}/>
                    <div className="shelter-description">
                        <span>{attributes.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shelter;
