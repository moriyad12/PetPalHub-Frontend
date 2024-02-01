import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signUpComponent.css';
import ProxyApi from "../Apis/ProxyApis/ProxyApis";
import {useNavigate} from "react-router-dom";
import RadioButtons from "./RadioButtons";
import ConditionalDivs from "./ConditionalDivs";
import {useMyContext} from "../ErrorMessage/ErrorMessageContextProvider";
import {useMyLoginContext} from "../Authentication/LoginContextProvider";

function SignUpComponent() {
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
    const { makeAlert } = useMyContext();
    const { makeNormalMessage } = useMyContext();
    const { login } = useMyLoginContext();

    const [error, setError] = useState({"email": "", "password": ""});

    const isStrongPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        return passwordRegex.test(password);
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationError = {}
        if (!firstName.trim()) {
            validationError.firstName = 'First Name is required';
        } else if (firstName.length < 3) {
            validationError.firstName = 'First Name must be at least 3 characters long';
        }
        if (!lastName.trim()) {
            validationError.lastName = 'Last Name is required';
        } else if (lastName.length < 3) {
            validationError.lastName = 'Last Name must be at least 3 characters long';
        }
        if (!phoneNumber.trim()) {
            validationError.phoneNumber = 'Phone Number is required';
        } else if (phoneNumber.length !== 11) {
            validationError.phoneNumber = 'Phone Number must be 11 digits long';
        } else if (!/^\d+$/.test(phoneNumber)) {
            validationError.phoneNumber = 'Phone Number must contain only digits';
        }
        if (!email.trim()) {
            validationError.email = 'Email is required';
        } else if (!isValidEmail(email)) {
            validationError.email = 'Invalid email format';
        }
        if (!password.trim()) {
            validationError.password = 'Password is required';
        } else if (password.length < 8) {
            validationError.password = 'Password must be at least 8 characters long';
        } else if (!isStrongPassword(password)) {
            validationError.password = 'Password must be stronger';
        }
        if (!(confirmPass === password)) {
            validationError.confirmPass = 'Confirm Password is required';
        }
        if (!shelterCode.trim()) {
            validationError.shelterCode = 'Shelter Code is required';
        } else if (shelterCode.length < 6) {
            validationError.shelterCode = 'Shelter Code must be at least 6 characters long';
        }
        if (!shelterId.trim()) {
            validationError.shelterId = 'Shelter Id is required';
        }
        if (Object.keys(validationError).length > 0) {
            setError(validationError);
            return;
        }
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
            makeAlert("Password and Confirm Password are not same")
            return;
        }
        try {
            const response = await ProxyApi.post("basicSignUp", userDto)
            login(response.data.id, response.data.token, response.data.role, response.data.shelterId)

            makeNormalMessage("Please check your email for validation")
            navigate("/validation");
          
        } catch (error) {
            makeAlert(error.response.data.message)
        }
    };

    return (<div className={"signUpComponentDiv container-fluid"}>
            <div>
                <form className="bg-white shadow-5-strong p-5" onSubmit={handleSubmit}>
                    <h2>SignUp</h2>
                    <RadioButtons selectedRadio={selectedRadio} setSelectedRadio={setSelectedRadio}/>
                    <div className={"row inputDiv"}>
                        <div className={"col p-0"}>
                            <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                   placeholder={"First Name"}/>
                            {error.firstName && <span className="errorSpan">{error.firstName}</span>}
                        </div>
                        <div className={"col p-0"}>
                            <input type='text' value={lastName}
                                   onChange={(e) => setLastName(e.target.value)}
                                   placeholder={"Last Name"}/>
                            {error.lastName && <span className="errorSpan">{error.lastName}</span>}
                        </div>
                    </div>
                    <div className={"inputDiv"}>
                        <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                               placeholder={"Phone Number"}/>
                        {error.phoneNumber && <span className="errorSpan">{error.phoneNumber}</span>}
                    </div>
                    <div className={"inputDiv"}>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}
                               placeholder={"Email"}/>
                        {error.email && <span className="errorSpan">{error.email}</span>}
                    </div>

                    <div className={"row inputDiv"}>
                        <div className={"col p-0"}>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}
                                   placeholder={"Password"}/>
                            {error.password && <span className="errorSpan">{error.password}</span>}
                        </div>
                        <div className={"col p-0"}>
                            <input type='password' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}
                                   placeholder={"Confirm Password"}/>
                            {error.confirmPass && <span className="errorSpan">{error.confirmPass}</span>}
                        </div>
                    </div>
                    <ConditionalDivs selectedRadio={selectedRadio} shelterCode={shelterCode}
                                     setShelterCode={setShelterCode} setShelterId={setShelterId}
                                     shelterId={shelterId}
                                     error={error}/>
                    <div>
                        <button className="btn btn-primary" type="submit">SignUp</button>
                    </div>
                    <div className={"hiDiv"}>
                        <label className={"signUpComponentDivLabel"}>Already have an account</label>
                        <a href={"/login"}>
                            SignIn
                        </a>
                    </div>
                </form>
            </div>
        </div>);
}

export default SignUpComponent;
