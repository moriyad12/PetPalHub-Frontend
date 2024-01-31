import React, { createContext, useContext, useState } from 'react';

const MyLoginContext = createContext();

const LOCAL_STORAGE_ID = "id";
const LOCAL_STORAGE_TOKEN = "token";
const LOCAL_STORAGE_ROLE = "role";
const LOCAL_STORAGE_SHELTER_ID = "shelterId";

export const LoginContextProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(isUserIdFound());

    function getUserId() {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID))
    }

    function getUserToken() {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN))
    }

    function getUserRole() {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ROLE))
    }

    function getShelterId() {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SHELTER_ID))
    }

    function setUserLocalStorageData(id, token, role){
        localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(id))
        localStorage.setItem(LOCAL_STORAGE_TOKEN, JSON.stringify(token))
        localStorage.setItem(LOCAL_STORAGE_ROLE, JSON.stringify(role))
        localStorage.setItem(LOCAL_STORAGE_SHELTER_ID, JSON.stringify(shelterId))
        setIsUserLoggedIn(true);
    }

    function removeUserLocalStorageData() {
        localStorage.removeItem(LOCAL_STORAGE_ID);
        localStorage.removeItem(LOCAL_STORAGE_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_ROLE);
        localStorage.removeItem(LOCAL_STORAGE_SHELTER_ID);
        setIsUserLoggedIn(false);
    }

    function isTheUserAnOrganizer(){
        return (getUserRole() === "ROLE_ORGANIZER");
    }

    function isTheUserAnAdmin(){
        return (getUserRole() === "ROLE_ADMIN");
    }

    function isUserIdFound(){
        return (typeof getUserId() === "number")
    }

    return (
        <MyLoginContext.Provider value={
            { isUserLoggedIn,
                getUserId, getUserToken, getUserRole, getShelterId,
                setUserLocalStorageData, removeUserLocalStorageData,
                isTheUserAnOrganizer, isTheUserAnAdmin, isUserIdFound
            }}>
            {children}
        </MyLoginContext.Provider>
    );
};

export const useMyContext = () => useContext(MyLoginContext);