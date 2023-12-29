import AdopterApi from "../Apis/AdopterApi";
import MasterApi from "../Apis/MasterApi";

export const dashboardTypes = async (filters,viewComponentIndex,page,rowsPerPage) => {
    let response=0;
    if (viewComponentIndex === 1) {///allPets
        return  await AdopterApi.post("dashboard/" + page + "/" + rowsPerPage, filters);
    } else {//allApplications
        return  await handleApplications(page,rowsPerPage);
    }
};
const handleApplications=async (page,rowsPerPage)=>{
    const userType = 1;
    if (userType === 1) {
        return await AdopterApi.get("getApplications/" + page + "/" + rowsPerPage + "/" + 1)
    } else {
        return  await MasterApi.get("getPendingApplicationByShelterID/" + page + "/" + rowsPerPage + "/" + 1)
    }
}
