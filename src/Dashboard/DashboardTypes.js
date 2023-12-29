import AdopterApi from "../Apis/AdopterApi";
import MasterApi from "../Apis/MasterApi";

export const dashboardTypes = async (filters,viewComponentIndex,page,rowsPerPage) => {
    let response=0;
    if (viewComponentIndex === 1) {///allPets
        response = await AdopterApi.post("dashboard/" + page + "/" + rowsPerPage, filters);
    } else {//allApplications
        const userType = 1;
        if (userType === 1) {
            response
                = await AdopterApi.get("getApplications/" + page + "/" + rowsPerPage + "/" + 1)
        } else {
            response
                = await MasterApi.get("getPendingApplicationByShelterID/" + page + "/" + rowsPerPage + "/" + 1)
        }
    }
    return response;
};