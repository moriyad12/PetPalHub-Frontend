import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signUpComponent.css';
import ProxyApi from "../Apis/ProxyApis/ProxyApis";
import {setUserLocalStorageData} from "../Authentication/UserAuthentication";
import {useNavigate} from "react-router-dom";

function SignUpComponent({setIsUserLoggedIn}) {
    const navigate = useNavigate();
    const [selectedRadio, setSelectedRadio] = useState('ADOPTER');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [shelterId, setShelterId] = useState('');
    const [shelterCode, setShelterCode] = useState('');


    const handleChange = (e) => {
        setSelectedRadio(e.target.id);
        // alert(e.target.id);
    };
    const handleSubmit = async (e) => {
        const userDto = {
            "id": 0,
            "firstName": firstName,
            "lastName": lastName,
            "phoneNumber": phoneNumber,
            "email": email,
            "password": password,
            "role": selectedRadio,
            "shelterCode": shelterCode,
            "shelterId": shelterId,
            "gender": "MALE",
            "signInWithEmail": false
        }
        try {
            const response = await ProxyApi.post("basicSignUp", userDto)
            setUserLocalStorageData(response.data.id, response.data.token, response.data.role, response.data.shelterId)
            alert("Please check your email for validation")
            setIsUserLoggedIn(true)
            navigate("/validation");
            console.log(response)
        } catch (error) {
            // actions.resetForm();
            alert(error.response.data.message)
        }
    };

    return (
        <div className={"logoutComponentDiv"}>
            <div>
                <form className="bg-white shadow-5-strong p-5" onSubmit={handleSubmit}>
                    <h2>SignUp</h2>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <div className={'logoutComponentDivRadio'}>
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
                        <div className={'logoutComponentDivRadio'}>
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
                        <div className={'logoutComponentDivRadio'}>
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
                    <div>
                        <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}
                               placeholder={"First Name"}/>
                    </div>
                    <div>
                        <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}
                               placeholder={"Last Name"}/>
                    </div>
                    <div>
                        <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                               placeholder={"Phone Number"}/>
                    </div>
                    <div>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}
                               placeholder={"Email"}/>
                    </div>
                    <div>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}
                               placeholder={"Password"}/>
                    </div>
                    <div>
                        <input type='password' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}
                               placeholder={"Confirm Password"}/>
                    </div>
                    {
                        selectedRadio === 'STAFF' ?
                            <div>
                                <input type='number' min={0} value={shelterId}
                                       onChange={(e) => setShelterId(e.target.value)}
                                       placeholder={"Shelter Id"}/>
                            </div>
                            : null
                    }
                    {
                        selectedRadio === 'ADOPTER' ?
                            null :
                            <div>
                                <input type='text' value={shelterCode} onChange={(e) => setShelterCode(e.target.value)}
                                       placeholder={"Shelter Code"}/>
                            </div>
                    }
                    <button className="btn btn-primary" type="submit">SignOut</button>
                    <div className={"hiDiv"}>
                        <label className={"logoutComponentDivLabel"}>Already have an account</label>
                        <a href={"#"}>
                            SignIn
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpComponent;
