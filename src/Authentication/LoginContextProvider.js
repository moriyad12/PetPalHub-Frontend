import React, { createContext, useContext, useState } from 'react';
import {isUserIdFound} from "./UserAuthentication";

const MyLoginContext = createContext();

const LOCAL_STORAGE_ID = "id";
const LOCAL_STORAGE_TOKEN = "token";
const LOCAL_STORAGE_ROLE = "role";
const LOCAL_STORAGE_SHELTER_ID = "shelterId";

export const LoginContextProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(isUserIdFound());

    function login(id, token, role, shelterId){
        localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(id))
        localStorage.setItem(LOCAL_STORAGE_TOKEN, JSON.stringify(token))
        localStorage.setItem(LOCAL_STORAGE_ROLE, JSON.stringify(role))
        localStorage.setItem(LOCAL_STORAGE_SHELTER_ID, JSON.stringify(shelterId))
        setIsUserLoggedIn(true);
    }

    function logout() {
        localStorage.removeItem(LOCAL_STORAGE_ID);
        localStorage.removeItem(LOCAL_STORAGE_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_ROLE);
        setIsUserLoggedIn(false);
    }

    return (
        <MyLoginContext.Provider value={
            { isUserLoggedIn, login, logout }
            }>
            {children}
        </MyLoginContext.Provider>
    );
};

export const useMyLoginContext = () => useContext(MyLoginContext);