import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pet from "./Pet/Pet";
import Shelter from "./Shelter/Shelter";
import Dashboard from "./Dashboard/Dashboard";
import {Route , Routes} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Profile from "./Profile/Profile";
import ValidationPage from "./validation/validationPage";
import Header from "./Header/Header";
import React, {useState} from "react";
import {ErrorMessageContextProvider} from "./ErrorMessage/ErrorMessageContextProvider";
import LoginComponent from "./LogIn/loginComponent";
import SignUpComponent from "./SignUp/signUpComponent";
import {LoginContextProvider} from "./Authentication/LoginContextProvider";

function App() {
    return (
        <div className="App">
            <Router >
                <ErrorMessageContextProvider >
                    <LoginContextProvider >
                        <Header />
                        <Routes>
                            <Route path={"/"} element={<Dashboard filterEnabled={true}  viewComponentIndex={1}/>} />
                            <Route path={"/myApplications"} element={<Dashboard filterEnabled={false}  viewComponentIndex={2}/>}  />
                            <Route path={"/myPets"} element={<Dashboard filterEnabled={true}  viewComponentIndex={3}/>} />
                            <Route path={"/login"} element={<LoginComponent />} />
                            <Route path={"/signUp"} element={<SignUpComponent />} />
                            <Route path={"/profile/:id"} element={<Profile />} />
                            <Route path={"/myApplications/profile/:id"} element={<Profile />} />
                            <Route path={"/validation"} element={<ValidationPage />} />
                            <Route path={"/shelter/:id"} element={<Shelter />} />
                            <Route path={"/petview/:id/:ViewComponentIndex"} element={<Pet />} />
                            <Route path={"/myApplications/petview/:id/:ViewComponentIndex"} element={<Pet />} />
                        </Routes>
                    </LoginContextProvider>
                </ErrorMessageContextProvider>
            </Router>
        </div>
  );
}

export default App;
