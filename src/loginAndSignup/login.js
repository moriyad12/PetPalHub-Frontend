import * as React from "react";
import {useState, useEffect} from 'react';
import './login.css';
import {FaGoogle} from "react-icons/fa";
import classNames from "classnames";
import {loginValidation} from "./validations/loginValidation";
import {signupValidation} from "./validations/signupValidation";
import {useFormik} from "formik";
import ProxyApi from "../Apis/ProxyApis/ProxyApis";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useNavigate} from "react-router-dom";
import {setUserLocalStorageData} from "../Authentication/UserAuthentication";
// import {isUserLoggedIn, setUserLocalStorageData} from "../Authentication/UserAuthentication";
// import {RoutePathNames} from "../Routes/RoutePathNames";


function Login() {
    const navigate = useNavigate();

    const [isLoginActive, setIsLoginActive] = useState(false);
    const loginFormik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginValidation,
        onSubmit: async (values, actions) => {
            const authenticationRequest = {
                "email": values.email,
                "password": values.password
            }
            try {
                const response = await ProxyApi.post("basicSignIn", authenticationRequest)
                setUserLocalStorageData(response.data.id, response.data.token, response.data.role)
                navigate("/");
            } catch (error) {
               // actions.resetForm();
                alert(error.response.data.message)
            }
        }
    });

    const signupFormik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            shelterCode: "",
            shelterId: 0,
            role: "ADOPTER"
        },
        validationSchema: signupValidation,
        onSubmit: async (values, actions) => {
            alert(JSON.stringify(values))
            const userDto = {
                "id": 0,
                "firstName": values.firstName,
                "lastName": values.lastName,
                "phoneNumber": values.phoneNumber,
                "email": values.email,
                "password": values.password,
                "role": values.role,
                "shelterCode": values.shelterCode,
                "shelterId": values.shelterId,
                "gender": "MALE",
                "signInWithEmail": false
            }
            try {
                const response =await ProxyApi.post("basicSignUp", userDto)
                setUserLocalStorageData(response.data.id, response.data.token, response.data.role)
                alert("Please check your email for validation")
                navigate("/validation");
                console.log(userDto)
            } catch (error) {
               // actions.resetForm();
                alert(error.response.data.message)
            }
        },
    });

    return (
        <div className="Body">
            <div className={classNames({"Container": true, "active": isLoginActive})} id="container">
                <div className="form-container sign-up-container">
                    <form style={{
                        backgroundColor: "#F5F7F8",
                    }} onSubmit={signupFormik.handleSubmit}>
                        <h2>Sign Up</h2>
                        <FormControl sx={{minWidth: 300}}>
                            <Select
                                required={true}
                                value={signupFormik.values.role}
                                onChange={signupFormik.handleChange}
                                onBlur={signupFormik.handleBlur}
                                name={"role"}>

                                <MenuItem value="ADOPTER"> ADOPTER </MenuItem>
                                <MenuItem value="STAFF">STAFF</MenuItem>
                                <MenuItem value="MANAGER"> MANAGER </MenuItem>
                            </Select>
                        </FormControl>

                        <input name={"firstName"}
                               onChange={signupFormik.handleChange}
                               onBlur={signupFormik.handleBlur}
                               className={
                                   signupFormik.touched.firstName && signupFormik.errors.firstName ? "Input error" : "Input"
                               }
                               type="text" placeholder="First Name"/>
                        {signupFormik.touched.firstName && signupFormik.errors.firstName ? (
                            <div className=" text-error">{signupFormik.errors.firstName}</div>) : null}
                        <input name={"lastName"}
                               onChange={signupFormik.handleChange}
                               onBlur={signupFormik.handleBlur}
                               className={
                                   signupFormik.touched.lastName && signupFormik.errors.lastName ? "Input error" : "Input"
                               }
                               type="text" placeholder="Last Name"/>
                        {signupFormik.touched.lastName && signupFormik.errors.lastName ? (
                            <div className=" text-error">{signupFormik.errors.lastName}</div>) : null}
                        <input name={"phoneNumber"}
                               onChange={signupFormik.handleChange}
                               onBlur={signupFormik.handleBlur}
                               className={
                                   signupFormik.touched.phoneNumber && signupFormik.errors.phoneNumber ? "Input error" : "Input"
                               }
                               type="text" placeholder="Phone Number "/>
                        {signupFormik.touched.phoneNumber && signupFormik.errors.phoneNumber ? (
                            <div className=" text-error">{signupFormik.errors.phoneNumber}</div>) : null}
                        <input
                            name={"email"}
                            onChange={signupFormik.handleChange}
                            onBlur={signupFormik.handleBlur}
                            className={
                                signupFormik.touched.email && signupFormik.errors.email ? "Input error" : "Input"
                            }
                            type="email" placeholder="Email"/>
                        {signupFormik.touched.email && signupFormik.errors.email ? (
                            <div className=" text-error">{signupFormik.errors.email}</div>) : null}
                        <input name={"password"}
                               onChange={signupFormik.handleChange}
                               onBlur={signupFormik.handleBlur}
                               className={
                                   signupFormik.touched.password && signupFormik.errors.password ? "Input error" : "Input"
                               }
                               type="password" placeholder="Password"/>
                        {signupFormik.touched.password && signupFormik.errors.password ? (
                            <div className=" text-error">{signupFormik.errors.password}</div>) : null}

                        <input name={"confirmPassword"} onChange={signupFormik.handleChange}
                               onBlur={signupFormik.handleBlur}
                               className={
                                   signupFormik.touched.confirmPassword && signupFormik.errors.confirmPassword ? "Input error" : "Input"
                               } type="password" placeholder="Confirm Password"/>

                        {signupFormik.touched.confirmPassword && signupFormik.errors.confirmPassword ? (
                            <div className=" text-error">{signupFormik.errors.confirmPassword}</div>) : null}
                        {
                            signupFormik.values.role === "STAFF" ?
                                (
                                    <>
                                        <input name={"shelterId"}
                                               onChange={signupFormik.handleChange}
                                               onBlur={signupFormik.handleBlur}
                                               className={
                                                   signupFormik.touched.shelterId && signupFormik.errors.shelterId ? "Input error" : "Input"
                                               }
                                               type="number" placeholder={"Shelter Id"}/>
                                        {signupFormik.touched.shelterId && signupFormik.errors.shelterId ? (
                                            <div className="text-error">{signupFormik.errors.shelterId}</div>
                                        ) : null}
                                    </>
                                ):null
                        }
                        {
                            (signupFormik.values.role === "STAFF" || signupFormik.values.role === "MANAGER") ? (
                                <>
                                    <input
                                        name={"shelterCode"}
                                        onChange={signupFormik.handleChange}
                                        onBlur={signupFormik.handleBlur}
                                        className={
                                            signupFormik.touched.shelterCode && signupFormik.errors.shelterCode
                                                ? "Input error"
                                                : "Input"
                                        }
                                        type="text"
                                        placeholder="Shelter Code"
                                    />
                                    {signupFormik.touched.shelterCode && signupFormik.errors.shelterCode ? (
                                        <div className="text-error">{signupFormik.errors.shelterCode}</div>
                                    ) : null}
                                </>
                            ) : null
                        }

                        <Button style={{
                            borderRadius: 30,
                            backgroundColor: "#495e57",
                            padding: "18px 36px",
                        }} variant="contained" type="submit">Sign up</Button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form style={{
                        backgroundColor: "#F5F7F8",
                    }} onSubmit={loginFormik.handleSubmit}>
                        <h2>Sign In</h2>
                        <input
                            name={"email"}
                            value={loginFormik.values.email}
                            onChange={loginFormik.handleChange}
                            onBlur={loginFormik.handleBlur}
                            className={
                                loginFormik.touched.email && loginFormik.errors.email ? "Input error" : "Input"
                            } type="email" placeholder="Email "/>
                        {loginFormik.touched.email && loginFormik.errors.email ? (
                            <div className=" text-error">{loginFormik.errors.email}</div>) : null}
                        <input
                            name={"password"}
                            value={loginFormik.values.password}
                            onChange={loginFormik.handleChange}
                            onBlur={loginFormik.handleBlur}
                            className={loginFormik.touched.password && loginFormik.errors.password ? "Input error" : "Input"}
                            type="password" placeholder="Password"/>
                        {loginFormik.touched.password && loginFormik.errors.password ? (
                            <div className=" text-error">{loginFormik.errors.password}</div>) : null}
                        <Button style={{
                            borderRadius: 30,
                            backgroundColor: "#495e57",
                            padding: "18px 36px",
                        }}
                                variant="contained" type="submit">
                            Sign In</Button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h2 style={{ fontFamily: '"Lucida Console", "Courier New", monospace' }}>Hey There, Buddy!</h2>
                            <Button style={{
                                borderRadius: 30,
                                backgroundColor: "#495e57",
                                padding: "18px 36px",
                            }} variant="contained" className="ghost" id="signIn"
                                    onClick={() => setIsLoginActive(false)}>Login Gateway</Button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h2 style={{ fontFamily: '"Lucida Console", "Courier New", monospace' }}>Hi Again!</h2>
                            <Button style={{
                                borderRadius: 30,
                                backgroundColor: "#495e57",
                                padding: "18px 36px",
                            }} variant="contained" className="ghost" id="signUp"
                                    onClick={() => setIsLoginActive(true)}>Sign Up and Explore</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;