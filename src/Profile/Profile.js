import React, {useEffect} from 'react';
import './Profile.css'
import userApis from "../Apis/UserApis/UserApis";

import {getUserId, getUserToken} from "../Authentication/UserAuthentication";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProfileDetails} from "./ProfileDetails";
import {ProfileHead} from "./ProfileHead";
import {ProfileImage} from "./ProfileImage";
import {EditProfile} from "./EditProfile";


function Profile() {

    const [profileAttributes, setProfileAttributes] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        role:"",
        gender:"",
        phoneNumber:"",
    });

    useEffect(() => {
        const sendInformationRequest = async() => {
            try {
                console.log(getUserToken())
                const response = await userApis.get("getUserDto/"+getUserId(),{ headers: {"Authorization" : `Bearer ${getUserToken()}`} });
                console.log(response);
                setProfileAttributes(response.data)
            } catch (error) {
                alert(error.response.data.message)
            }
        }
        sendInformationRequest()
    }, []);

    return (
        <div className="container bg-light emp-profile">
                <div className="row">
                    <div className="col-md-4">
                       <ProfileImage />
                    </div>
                    <div className="col-md-6">
                       <ProfileHead profileAttributes={profileAttributes}/>
                    </div>
                    <div className="col-md-2" >
                       <EditProfile profileAttributes={profileAttributes} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <span  className="text-secondary fs-2">My Profile</span>
                    </div>
                    <div className="col-md-8">
                        <ProfileDetails profileAttributes={profileAttributes}/>
                    </div>
                </div>
        </div>
    );
}

export default Profile;