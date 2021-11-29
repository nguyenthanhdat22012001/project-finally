import typeAuth from "../contains/typeAuth";
//helper
import { getUserLocalStorage} from "helper/auth";

const localSorage_user = getUserLocalStorage();
const initState = localSorage_user ? {
    user: localSorage_user.user,
    access_token: localSorage_user.access_token,
    expires_in:localSorage_user.expires_in,
} : {
    user: null,
    access_token: null,
    expires_in:null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case typeAuth.LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
                access_token: action.payload.access_token,
                expires_in:action.payload.expires_in,
            }
        case typeAuth.UPDATE_USER:
            return {
                ...state,
                user: action.payload.user,
                access_token: action.payload.access_token,
                expires_in:action.payload.expires_in,
            }
        case typeAuth.LOGOUT_USER:
            return {
                ...state,
                user: null,
                access_token: null,
                expires_in:null,
            }
        default:
            return state
    }
}

export default authReducer;