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

export function isUserLoggedIn() {
    return (typeof getUserId() === "number")
}

export function isUserIdFound() {
    return (typeof getUserId() === "number")
}

export function isUserAdopter() {
    return (getUserRole() === "ROLE_ADOPTER")
}
export function isUserStaffOrManager() {
    return (getUserRole() === "ROLE_STAFF" || getUserRole() === "ROLE_MANAGER")
}
