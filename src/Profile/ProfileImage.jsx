
import React from "react";

export const ProfileImage = ({viewComponentIndex,isProfile}) => {
    return (
        <div className="profile-img">
            <img src="/pet2.jpg" alt="Profile" />
            {viewComponentIndex===3 ||isProfile===1?
            <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file"/>
            </div>
            :null}
        </div>
    )
}