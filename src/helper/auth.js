// api
import userApi from "api/userApi";

export const setToken = (token) => {
    localStorage.setItem('token', token);
}

export const getToken = () => {
    const localStorage_tokenString = localStorage.getItem('token');
   
    if (localStorage_tokenString) {
        const localStorage_token = JSON.parse(localStorage_tokenString);
        return localStorage_token;
    } else {
        return null;
    }
}

export const isTokenExpried = (token) => {
    const dateObj = new Date();
    const current = dateObj.getTime();
    if (current >= token.expires_in) {
        return true;
    } else {
        return false;
    }
}

export const handleRefreshToken = async () => {
    try {
        const res = await userApi.refreshToken();
        console.log('handleRefreshToken',res);
        if (res.success) {
            setToken(res.access_token)
            return true;
        }
    } catch (error) {
        console.log('error: ' + error);
    }
}