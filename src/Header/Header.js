/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import {Link} from "react-router-dom";
import {
    isUserAdopter,
    isUserLoggedIn,
    isUserStaffOrManager,
    removeUserLocalStorageData
} from "../Authentication/UserAuthentication";

export default function Header({isloggedUseState, setIsLoggedIn}) {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        setCount(count+1)
        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);// Assuming initial state is logged in

    useEffect(() => {
        setCount(count+1)
    }, [isloggedUseState]);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
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
                    {isUserLoggedIn() ?
                        <Link to="/login">
                            <button onClick={
                                () => {
                                    removeUserLocalStorageData();
                                    setIsLoggedIn(false);
                                }
                            }>Sign out</button>
                        </Link>
                        :
                        <Link to="/login">
                            <button>Sign in</button>
                        </Link>
                    }
                </nav>
            </CSSTransition>
        </header>
    );
}