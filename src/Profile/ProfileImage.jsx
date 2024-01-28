
import React from "react";

export const ProfileImage = () => {
    return (
        <div className="profile-img">
            <img src="/pet2.jpg" alt="Profile" />
            <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file"/>
            </div>
        </div>
    )
}