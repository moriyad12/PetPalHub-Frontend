import React from 'react';

function RadioButtons({selectedRadio, setSelectedRadio}) {
    const handleChange = (e) => {
        setSelectedRadio(e.target.id);
        // alert(e.target.id);
    };
    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <div className={'signUpComponentDivRadio'}>
                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="ADOPTER"
                    autoComplete="off"
                    onChange={handleChange}
                    checked={selectedRadio === 'ADOPTER'}
                />
                <label className="btn rounded-5 btn-outline-primary" htmlFor="ADOPTER">
                    ADOPTER
                </label>
            </div>
            <div className={'signUpComponentDivRadio'}>
                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="STAFF"
                    autoComplete="off"
                    onChange={handleChange}
                    checked={selectedRadio === 'STAFF'}
                />
                <label className="btn rounded-5 btn-outline-primary" htmlFor="STAFF">
                    STAFF
                </label>
            </div>
            <div className={'signUpComponentDivRadio'}>
                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="MANAGER"
                    autoComplete="off"
                    onChange={handleChange}
                    checked={selectedRadio === 'MANAGER'}
                />
                <label className="btn rounded-5 btn-outline-primary" htmlFor="MANAGER">
                    MANAGER
                </label>
            </div>
        </div>
    );
}

export default RadioButtons;