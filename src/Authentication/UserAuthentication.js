const LOCAL_STORAGE_ID = "id";
const LOCAL_STORAGE_TOKEN = "token";
const LOCAL_STORAGE_ROLE = "role";
const LOCAL_STORAGE_SHELTER_ID = "shelterId";

export function getUserId() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID))
}

export function getUserToken() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN))
}

export function getUserRole() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ROLE))
}
export function getShelterId() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SHELTER_ID))
}

export function setUserLocalStorageData(id, token, role,shelterId){
    localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(id))
    localStorage.setItem(LOCAL_STORAGE_TOKEN, JSON.stringify(token))
    localStorage.setItem(LOCAL_STORAGE_ROLE, JSON.stringify(role))
    localStorage.setItem(LOCAL_STORAGE_SHELTER_ID, JSON.stringify(shelterId))
}

export function removeUserLocalStorageData()
{
    localStorage.removeItem(LOCAL_STORAGE_ID);
    localStorage.removeItem(LOCAL_STORAGE_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_ROLE);
    localStorage.removeItem(LOCAL_STORAGE_SHELTER_ID);
}

export function isUserLoggedIn() {
    return (typeof getUserId() === "number")
}
