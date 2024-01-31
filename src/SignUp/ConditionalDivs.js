import React from 'react';
import './signUpComponent.css';

function ConditionalDivs({selectedRadio, shelterId, setShelterId, shelterCode, setShelterCode,error}) {
    return (
        <div className={"row  inputDiv"}>
            {
                selectedRadio === 'STAFF' ?
                    <div className={`p-0 ${selectedRadio === 'STAFF' ? 'col' : ''}`} >
                        <input type='number' min={0} value={shelterId}
                               onChange={(e) => setShelterId(e.target.value)}
                               placeholder={"Shelter Id"} />
                        {error.shelterId ? <span className={"errorSpan"}>{error.shelterId}</span> : null}
                    </div>
                    : null
            }
            {
                selectedRadio === 'ADOPTER' ?
                    null :
                    <div className={`p-0 ${selectedRadio === 'STAFF' ? 'col' : ''}`}>
                        <input  type='text' value={shelterCode} onChange={(e) => setShelterCode(e.target.value)}
                               placeholder={"Shelter Code"} />
                        {error.shelterCode ? <span className={"errorSpan"}>{error.shelterCode}</span> : null}
                    </div>
            }
        </div>
    );
}

export default ConditionalDivs;