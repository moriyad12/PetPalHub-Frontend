import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./loginComponent.css";
import ProxyApi from "../Apis/ProxyApis/ProxyApis";
import {setUserLocalStorageData} from "../Authentication/UserAuthentication";
import {useNavigate} from "react-router-dom";

function LoginComponent({setIsUserLoggedIn}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        e.preventDefault();
        const validationError = {}
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
        if (Object.keys(validationError).length > 0) {
            setError(validationError);
            return;
        }
        const authenticationRequest = {
            "email": email,
            "password": password
        }
        console.log(authenticationRequest)
        try {
            const response = await ProxyApi.post("basicSignIn", authenticationRequest)
            setUserLocalStorageData(response.data.id, response.data.token, response.data.role, response.data.shelterId)
            console.log(response)
            setIsUserLoggedIn(true)
            navigate("/");
        } catch (error) {
            // actions.resetForm();
            alert(error.response.data.message)
        }
    }

    return (
        <div className={"loginComponentDiv"}>
            <form className="bg-white shadow-5-strong p-5" onSubmit={handleSubmit}>
                <h2>SignIn</h2>
                <div>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"Email"}/>
                    {error.email && <span className={"errorSpan"}>{error.email}</span>}
                </div>
                <div>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}
                           placeholder={"Password"}/>
                    {error.password && <span className={"errorSpan"}>{error.password}</span>}
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">SignIn</button>
                </div>
                <div className={"hiDiv"}>
                    <label>Don't have an account</label>
                    <a href={"/signUp"}>
                        SignUp
                    </a>
                </div>
            </form>
        </div>
    );
}

export default LoginComponent;
