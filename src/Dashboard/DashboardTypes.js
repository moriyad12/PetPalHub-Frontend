import AdopterApi from "../Apis/AdopterApi";
import MasterApi from "../Apis/MasterApi";
import {getShelterId, getUserId, isUserAdopter} from "../Authentication/UserAuthentication";

export const dashboardTypes = async (filters,viewComponentIndex,page,rowsPerPage,tabIndex) => {
    if (viewComponentIndex === 1) {
        return  await AdopterApi.post("dashboard/" + page + "/" + rowsPerPage, filters);
    } else if(viewComponentIndex === 2) {//allApplications
        return  await handleApplications(page,rowsPerPage,tabIndex);
    }
    else {
        return await MasterApi.post("getFilteredPetsHeadersListByShelterId/" + page + "/" + rowsPerPage + "/" + getShelterId(), filters);
    }
};
const handleApplications=async (page,rowsPerPage,tabIndex)=>{
    if (isUserAdopter()) {

        return await AdopterApi.get("getApplications/" + page + "/" + rowsPerPage + "/" + getUserId())
    }
    else {
        return await handleApllicationForShelter(page,rowsPerPage,tabIndex);
    }
}
const handleApllicationForShelter=async (page,rowsPerPage,tabIndex)=>{
    if(tabIndex==="1"){
        return await MasterApi.get("getPendingApplicationByShelterID/" + page + "/" + rowsPerPage + "/" + getShelterId())
    }else if(tabIndex==="2"){
        return await MasterApi.get("getAcceptedApplicationByShelterID/" + page + "/" + rowsPerPage + "/" + getShelterId())
    }else if(tabIndex==="3"){
        return await MasterApi.get("getRejectedApplicationByShelterID/" + page + "/" + rowsPerPage + "/" + getShelterId())
    }
}
