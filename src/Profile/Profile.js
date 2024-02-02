import React, {useEffect, useState} from 'react';
import './Profile.css'
import userApis from "../Apis/UserApis/UserApis";
import {useLocation, useParams,} from "react-router-dom";
import {getUserId} from "../Authentication/UserAuthentication";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProfileDetails} from "./ProfileDetails";
import {ProfileHead} from "./ProfileHead";
import {ProfileImage} from "../ProfileImages/ProfileImage";
import {EditProfile} from "./EditProfile";
import {useMyContext} from "../ErrorMessage/ErrorMessageContextProvider";

import Loading from "../Loading/Loading";


function Profile() {
    const {makeAlert} = useMyContext();
    const [profileAttributes, setProfileAttributes] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        gender: "",
        phoneNumber: "",
    });
    const [profileImage, setProfileImage] = React.useState("");

    const value = useParams();
    const userId = Number(value.id)
    const isOwner = userId === getUserId()
    const [isLoading,setIsLoading] = useState(false);


    useEffect(() => {
        const sendInformationRequest = async () => {
            try {
                const response = await userApis.get("getUserDto/" + userId);
                setProfileAttributes(response.data)
                setProfileImage(response.data.profilePicturePath)
            } catch (error) {
                makeAlert(error.response.data.message)
            }
        }
        sendInformationRequest()
    }, []);

    return (
   <div>
            <div className="container bg-light emp-profile">
                <div className="row">
                    <div className="col-md-4">
                        <ProfileImage
                            isProfile={1}
                            profileImage={profileImage} setProfileImage={setProfileImage} isUserProfile={true}
                            setIsLoading={setIsLoading}
                        />
                    </div>
                    <div className="col-md-5 offset-1">
                        <ProfileHead profileAttributes={profileAttributes}/>
                    </div>
                    <div className="col-md-2" >
                        {isOwner?
                            <EditProfile profileAttributes={profileAttributes} />
                            :null}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <span  className="text-secondary fs-2 " >My Profile</span>
                    </div>
                    <div className="col-md-7">
                        <ProfileDetails profileAttributes={profileAttributes}/>
                    </div>
                </div>
            </div>
            <div>
                {
                    isLoading ? <Loading/> :null
                }
            </div>
        </div>
);
}

export default Profile;