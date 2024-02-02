import React, {useEffect} from "react";
import axios from "axios";
import {ImageUpdate} from "./ImageUpdate";

export const ProfileImage = ({ viewComponentIndex, isProfile,
                                 profileImage, setProfileImage,
                                    isUserProfile, id
                                 ,setIsLoading}) => {

    useEffect(() => {
    }, [profileImage]);


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

    const getProfileImageOrDefault = () => {
        if (profileImage && profileImage !== "")
            return profileImage
        else if (isUserProfile)
            return "https://i.ibb.co/w4rYzVR/unkownuser.jpg";
        else
            return "https://i.ibb.co/ccSKFsq/unknownpet.jpg";
    }

    return (
        <div className="profile-img">
            <img src={getProfileImageOrDefault()} alt="Profile" />
            {viewComponentIndex===3 ||isProfile===1?
                ( <ImageUpdate setProfileImage={setProfileImage} isUserProfile={isUserProfile} id={id}
                               setIsLoading={setIsLoading}/>)
            :null}
        </div>
    )
}