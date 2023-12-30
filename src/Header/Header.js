/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import {Link} from "react-router-dom";
import {isUserAdopter, isUserStaffOrManager, removeUserLocalStorageData} from "../Authentication/UserAuthentication";
import Filter from "../Dashboard/Filter";

export default function Header({isLoggedIn, setIsLoggedIn}) {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);// Assuming initial state is logged in

    useEffect(() => {
    }, [isLoggedIn]);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <div className="title">
                <img src={require("./pets3.PNG")} className="Logo" alt="logo" />
                <div className="HeaderTitle">PetPal Hub</div>
          </div>
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <a href="/">Home</a>
                    {isUserStaffOrManager()||isUserAdopter() ?
                        <a href="/profile">Profile</a>
                        : null}
                    {isUserStaffOrManager() ?
                            <a href="/shelter">Shelter</a>
                        : null}
                    {isUserStaffOrManager() ?
                            <a href="/myPets">My Pets</a>
                        : null}
                    {isUserStaffOrManager()||isUserAdopter() ?
                        <a href="/myApplications">My Applications</a>
                        : null}
                    <Link to="/login">
                        <button onClick={
                            () => {
                                removeUserLocalStorageData();
                                setIsLoggedIn(false);
                            }
                        }>Logout </button>
                    </Link>
                </nav>
            </CSSTransition>
        </header>
    );
}