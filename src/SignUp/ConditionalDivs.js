import React from 'react';
import './signUpComponent.css';

function ConditionalDivs({selectedRadio, shelterId, setShelterId, shelterCode, setShelterCode}) {
    return (
        <div className={"inputDiv"}>
            {
                selectedRadio === 'STAFF' ?
                    <div >
                        <input type='number' min={0} value={shelterId}
                               onChange={(e) => setShelterId(e.target.value)}
                               placeholder={"Shelter Id"} required/>
                    </div>
                    : null
            }
            {
                selectedRadio === 'ADOPTER' ?
                    null :
                    <div>
                        <input type='text' value={shelterCode} onChange={(e) => setShelterCode(e.target.value)}
                               placeholder={"Shelter Code"} required/>
                    </div>
            }
        </div>
    );
}

export default ConditionalDivs;