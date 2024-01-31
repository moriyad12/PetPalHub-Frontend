import React, {useEffect, useState, createContext, useContext } from 'react';
import "./ErrorMessage.css";

const MyContext = createContext();

export function ErrorMessageContextProvider( {children} ) {
    const [trigger, setTrigger] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const makeAllert = (message) => {
        setErrorMessage(message);
        setTrigger(true);
    }

    useEffect(() => {
        if (trigger) {
            const timeoutId = setTimeout(() => {
                setTrigger(false);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [trigger]);

    return (
        <MyContext.Provider value={{makeAllert}}>
            { children }
            <div className={`slide-fade-container ${trigger ? 'visible' : ''}`}>
                <div className="slide-fade-content">
                    <div className="alert alert-warning my-error-message" role="alert">
                        <strong>{errorMessage}</strong>
                    </div>
                </div>
            </div>
        </MyContext.Provider>
    );
}

export const useMyContext = () => useContext(MyContext);
