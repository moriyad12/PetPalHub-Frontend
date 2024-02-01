import React, {useEffect} from "react";
import axios from "axios";
import UserApis from "../Apis/UserApis/UserApis";
import {getUserId} from "../Authentication/UserAuthentication";
import {useMyContext} from "../ErrorMessage/ErrorMessageContextProvider";

export const ImageUpdate = ({ setProfileImage, isUserProfile }) => {

    const [tempProfileImage, setTempProfileImage] = React.useState(null)
    const { makeAlert } = useMyContext();

    const makeUserUpdateImageRequest = async () => {
        try {
            await UserApis.post("updateUserProfilePicture" + "/" + getUserId(), { image: tempProfileImage})
            setProfileImage(tempProfileImage)
        } catch (error) {
            makeAlert(error.response.data.message)
        }
    }

    useEffect(() => {
        if (tempProfileImage) {
            makeUserUpdateImageRequest()
        }
    }, [tempProfileImage])

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
        setTempProfileImage(response.data.data.display_url)
    }

    return (
        <div className="file btn btn-lg btn-primary ">
            Change Photo
            <input type="file" name="file" onInput={handleProfilePictureChange}/>
        </div>
    )
}