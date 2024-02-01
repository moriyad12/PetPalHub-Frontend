import React from "react";
import axios from "axios";

export const ProfileImage = ({ viewComponentIndex, isProfile, profileImage, setProfileImage }) => {

    const handleProfilePictureChange = async (e) => {
        const picture = e.target.files[0];

        let body = new FormData()
        body.set('key', '009c2e2d0b0020235da85697cf777339')
        body.append('image', picture)

        const response = await axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        })
        setProfileImage(response.data.data.display_url)
    }

    return (
        <div className="profile-img">
            <img src={profileImage} alt="Profile" />
            {viewComponentIndex===3 ||isProfile===1?
            <div className="file btn btn-lg btn-primary ">
                Change Photo
                <input type="file" name="file" onInput={handleProfilePictureChange}/>
            </div>
            :null}
        </div>
    )
}