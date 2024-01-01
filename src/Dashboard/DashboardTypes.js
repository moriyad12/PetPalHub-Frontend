import AdopterApi from "../Apis/AdopterApi";
import MasterApi from "../Apis/MasterApi";
import {getShelterId, getUserId, getUserToken, isUserAdopter} from "../Authentication/UserAuthentication";

export const dashboardTypes = async (filters, viewComponentIndex, page, rowsPerPage, tabIndex) => {
    if (viewComponentIndex === 1) {
        return await AdopterApi.post("dashboard/" + page + "/" + rowsPerPage, filters);
    } else if (viewComponentIndex === 2) {//allApplications
        return await handleApplications(page, rowsPerPage, tabIndex);
    } else {
        console.log(getUserToken())
        return await MasterApi.post("getFilteredPetsHeadersListByShelterId/" + page + "/" + rowsPerPage + "/" + getShelterId(), filters, {headers: {"Authorization": `Bearer ${getUserToken()}`}});
    }
};
const handleApplications = async (page, rowsPerPage, tabIndex) => {
    if (isUserAdopter()) {
        console.log(getUserToken())
        return await AdopterApi.get("getApplications/" + page + "/" + rowsPerPage + "/" + getUserId(), {headers: {"Authorization": `Bearer ${getUserToken()}`}})
    } else {
        return await handleApllicationForShelter(page, rowsPerPage, tabIndex);
    }
}
const handleApllicationForShelter = async (page, rowsPerPage, tabIndex) => {
    if (tabIndex === "1") {
        console.log(getUserToken())
        return await MasterApi.get("getPendingApplicationByShelterID/" + page + "/" + rowsPerPage + "/" + getShelterId(), {headers: {"Authorization": `Bearer ${getUserToken()}`}})
    } else if (tabIndex === "2") {
        console.log(getUserToken())
        return await MasterApi.get("getAcceptedApplicationByShelterID/" + page + "/" + rowsPerPage + "/" + getShelterId(), {headers: {"Authorization": `Bearer ${getUserToken()}`}})
    } else if (tabIndex === "3") {
        console.log(getUserToken())
        return await MasterApi.get("getRejectedApplicationByShelterID/" + page + "/" + rowsPerPage + "/" + getShelterId(), {headers: {"Authorization": `Bearer ${getUserToken()}`}})
    }
}
