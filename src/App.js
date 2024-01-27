import './App.css';

import Pet from "./Pet/Pet";
import PetHeader from "./Headers/PetHeader";
import ApplicationHeader from "./Headers/ApplicationHeader";
import Shelter from "./Shelter/Shelter";
import Dashboard from "./Dashboard/Dashboard";
import {Route , Routes} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Login from "./loginAndSignup/login";
import Profile from "./Profile/Profile";
import ValidationPage from "./validation/validationPage";
import Header from "./Header/Header";
import React, {useState} from "react";
import Photos from "./photos/photos";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
    <div className="App">
        <Photos/>
        {/*<Router >*/}
        {/*    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />*/}
        {/*    <Routes>*/}
        {/*        <Route path={"/"} element={<Dashboard filterEnabled={true}  viewComponentIndex={1}/>} />*/}
        {/*        <Route path={"/myApplications"} element={<Dashboard filterEnabled={false}  viewComponentIndex={2}/>}  />*/}
        {/*        <Route path={"/myPets"} element={<Dashboard filterEnabled={true}  viewComponentIndex={3}/>} />*/}
        {/*        <Route path={"/login"} element={<Login setIsUserLoggedIn={setIsLoggedIn}/>} />*/}
        {/*        <Route path={"/profile"} element={<Profile />} />*/}
        {/*        <Route path={"/validation"} element={<ValidationPage />} />*/}
        {/*        <Route path={"/shelter"} element={<Shelter />} />*/}
        {/*        <Route path={"/petview"} element={<Pet />} />*/}
        {/*        <Route path={"/myPets/petview"} element={<Pet />} />*/}
        {/*    </Routes>*/}
        {/*</Router>*/}
    </div>
  );
}

export default App;
