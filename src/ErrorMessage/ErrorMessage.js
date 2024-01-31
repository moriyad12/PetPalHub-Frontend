import React, {useEffect, useState} from 'react';
import "./ErrorMessage.css";

export default function Profile({triggerAnimation, setTriggerAnimation}) {

    useEffect(() => {
        if (triggerAnimation) {
            const timeoutId = setTimeout(() => {
                setTriggerAnimation(false);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [triggerAnimation]);

    return (
        <div className={`slide-fade-container ${triggerAnimation ? 'visible' : ''}`}>
            <div className="slide-fade-content">
                <div className="alert alert-warning my-error-message" role="alert">
                    <strong>This is a danger alert—check it out!</strong>
                </div>
            </div>
        </div>
    );
}
