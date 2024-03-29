import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getUserId, isUserAdopter, isUserStaffOrManager} from "../Authentication/UserAuthentication";
import {Link} from "react-router-dom";
import "../MyUtilities/Colors.css";
import "../MyUtilities/CustomComponents.css";
import "./Header.css";
import {useMyLoginContext} from "../Authentication/LoginContextProvider";
import {getMyShelterId} from "../Authentication/UserAuthentication";

export default function Header() {
    const { isUserLoggedIn, logout } = useMyLoginContext();

    useEffect(() => {
    }, [isUserLoggedIn]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 sticky-top">
            <div className="container-fluid ms-auto">
                <img src={require("./brownpaw.jpeg")} className="my-logo"/>
                <h1 className="text-primary">Petpal Hub</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarScroll">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-primary fw-bold" href="/">Home</a>
                        </li>
                        {isUserStaffOrManager() || isUserAdopter() ?
                            <li className="nav-item">
                                <a className="nav-link active text-primary fw-bold" href={`/profile/${getUserId()}`}>Profile</a>
                            </li>
                        : null}
                        {isUserStaffOrManager() ?
                            <li className="nav-item">
                                <a className="nav-link active text-primary fw-bold" href={`/shelter/${getMyShelterId()}`}>Shelter</a>
                            </li>
                        : null}
                        {isUserStaffOrManager() ?
                            <li className="nav-item">
                                <a className="nav-link active text-primary fw-bold" href="/myPets">My Pets</a>
                            </li>
                            : null}
                        {isUserStaffOrManager() || isUserAdopter() ?
                            <li className="nav-item">
                                <a className="nav-link active text-primary fw-bold" href="/myApplications">My Applications</a>
                            </li>
                        : null}

                        {isUserLoggedIn ? (
                            <Link to="/login">
                                <button className="btn bg-brown custom-btn-font" onClick={() => logout()}>Log Out</button>
                            </Link>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="btn bg-brown custom-btn-font me-2" >Log In</button>
                                </Link>
                                <Link to="/signUp">
                                    <button className="btn bg-brown custom-btn-font" >Sign Up</button>
                                </Link>
                            </>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
}
