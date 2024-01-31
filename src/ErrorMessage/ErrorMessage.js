import React, {useEffect, useState} from 'react';
import "./ErrorMessage.css";

export default function Profile({triggerAnimation, setTriggerAnimation}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation when the prop changes
        if (triggerAnimation) {
            setIsVisible(true);

            // Reset visibility after 5 seconds
            const timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            // Clean up timeout to avoid memory leaks
            return () => {
                clearTimeout(timeoutId);
                setTriggerAnimation(false);
            }
        }
    }, [triggerAnimation]);

    return (
        <div className={`slide-fade-container ${isVisible ? 'visible' : ''}`}>
            <div className="slide-fade-content">
                <div className="alert alert-warning my-error-message" role="alert">
                    <strong>This is a danger alert—check it out!</strong>
                </div>
            </div>
        </div>
    );
}
