import Api from "../axios/Api.js";
const USER_API="users"

export const signup=async(user)=> {
    return await Api.post(USER_API + "/register",user);
}
export const signin=async(user)=> {
    return await Api.post(USER_API+"/login", user);
}