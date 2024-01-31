import React, {useEffect, useState, createContext } from 'react';
import "./ErrorMessage.css";

const MyContext = createContext();

export default function ErrorMessageContextProvider({triggerAnimation, setTriggerAnimation, errorMessage}) {

    useEffect(() => {
        if (triggerAnimation) {
            const timeoutId = setTimeout(() => {
                setTriggerAnimation(false);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [triggerAnimation]);

    return (
        <MyContext.Provider value={{}}>
            <div className={`slide-fade-container ${triggerAnimation ? 'visible' : ''}`}>
                <div className="slide-fade-content">
                    <div className="alert alert-warning my-error-message" role="alert">
                        <strong>{errorMessage}</strong>
                    </div>
                </div>
            </div>
        </MyContext.Provider>
    );
}
