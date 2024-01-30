import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signUpComponent.css';
import ProxyApi from "../Apis/ProxyApis/ProxyApis";
import {setUserLocalStorageData} from "../Authentication/UserAuthentication";
import {useNavigate} from "react-router-dom";
import RadioButtons from "./RadioButtons";
import ConditionalDivs from "./ConditionalDivs";

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
        if (password !== confirmPass) {
            alert("Password and Confirm Password are not same")
            return;
        }
        try {
            const response = await ProxyApi.post("basicSignUp", userDto)
            setUserLocalStorageData(response.data.id, response.data.token, response.data.role, response.data.shelterId)
            alert("Please check your email for validation")
            setIsUserLoggedIn(true)
            navigate("/validation");
            // console.log(userDto)
            console.log(response)
        } catch (error) {
            // actions.resetForm();
            alert(error.response.data.message)
        }
    };

    return (
        <div className={"signUpComponentDiv"}>
            <div>
                <form className="bg-white shadow-5-strong p-5" onSubmit={handleSubmit}>
                    <h2>SignUp</h2>
                    <RadioButtons selectedRadio={selectedRadio} setSelectedRadio={setSelectedRadio}/>
                    <div className={"inputDiv"}>
                        <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}
                               placeholder={"First Name"} required/>
                    </div >
                    <div className={"inputDiv"}>
                        <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}
                               placeholder={"Last Name"} required/>
                    </div>
                    <div className={"inputDiv"}>
                        <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                               placeholder={"Phone Number"} required/>
                    </div>
                    <div className={"inputDiv"}>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}
                               placeholder={"Email"} required/>
                    </div>
                    <div className={"inputDiv"}>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}
                               placeholder={"Password"} required/>
                    </div>
                    <div className={"inputDiv"}>
                        <input type='password' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}
                               placeholder={"Confirm Password"} required/>
                    </div>
                    <ConditionalDivs selectedRadio={selectedRadio} shelterCode={shelterCode}
                                     setShelterCode={setShelterCode} setShelterId={setShelterId} shelterId={shelterId}/>
                    <button className="btn btn-primary" type="submit">SignUp</button>
                    <div className={"hiDiv"}>
                        <label className={"signUpComponentDivLabel"}>Already have an account</label>
                        <a href={"/login"}>
                            SignIn
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpComponent;
