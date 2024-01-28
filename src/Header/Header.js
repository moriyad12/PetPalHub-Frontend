/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {isUserAdopter, isUserStaffOrManager, removeUserLocalStorageData} from "../Authentication/UserAuthentication";
import {Link} from "react-router-dom";
import "../MyUtilities/Colors.css";
import "../MyUtilities/CustomComponents.css";

export default function Header({ isLoggedIn, setIsLoggedIn }) {

    useEffect(() => {
    }, [isLoggedIn]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid ms-auto">
                <a className="navbar-brand" href="#">Navbar scroll</a>
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
                                <a className="nav-link active text-primary fw-bold" href="/profile">Profile</a>
                            </li>
                        : null}
                        {isUserStaffOrManager() ?
                            <li className="nav-item">
                                <a className="nav-link active text-primary fw-bold" href="/shelter">Shelter</a>
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
                        <Link to="/login">
                            <button className="btn bg-brown custom-btn-font" onClick={
                                () => {
                                    removeUserLocalStorageData();
                                    setIsLoggedIn(false);
                                }
                            }>Logout
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
