import AdopterApi from "../Apis/AdopterApi";
import MasterApi from "../Apis/MasterApi";

export const dashboardTypes = async (filters,viewComponentIndex,page,rowsPerPage,tabIndex) => {
    let response=0;
    if (viewComponentIndex === 1) {///allPets
        return  await AdopterApi.post("dashboard/" + page + "/" + rowsPerPage, filters);
    } else if(viewComponentIndex === 2) {//allApplications
        return  await handleApplications(page,rowsPerPage,tabIndex);
    }
    else {
        return await MasterApi.post("getFilteredPetsHeadersListByShelterId/" + page + "/" + rowsPerPage + "/" + 1, filters);
    }
};
const handleApplications=async (page,rowsPerPage,tabIndex)=>{
    const userType = 2;
    if (userType === 1) {
        return await AdopterApi.get("getApplications/" + page + "/" + rowsPerPage + "/" + 1)
    }
    else {
        return await handleApllicationForShelter(page,rowsPerPage,tabIndex);
    }
}
const handleApllicationForShelter=async (page,rowsPerPage,tabIndex)=>{
    if(tabIndex==="1"){
        return await MasterApi.get("getPendingApplicationByShelterID/" + page + "/" + rowsPerPage + "/" + 1)
    }else if(tabIndex==="2"){
        return await MasterApi.get("getAcceptedApplicationByShelterID/" + page + "/" + rowsPerPage + "/" + 1)
    }else if(tabIndex==="3"){
        return await MasterApi.get("getRejectedApplicationByShelterID/" + page + "/" + rowsPerPage + "/" + 1)
    }
}
