// api
import userApi from "api/userApi";

export const setUserLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const removeUserLocalStorage = () => {
    localStorage.removeItem('user');
}

export const getUserLocalStorage = () => {
    const localStorage_userString = localStorage.getItem('user');

    if (localStorage_userString) {
        const localStorage_user = JSON.parse(localStorage_userString);
        return localStorage_user;
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
        const userLocalStorage = getUserLocalStorage();
        if (userLocalStorage) {
            const res = await userApi.refreshToken();
            console.log('handleRefreshToken', res);

            if (res.success) {
                userLocalStorage.access_token = res.access_token;
                userLocalStorage.expires_in = res.expires_in;
                setUserLocalStorage(userLocalStorage);
                return true;
            }
        }

    } catch (error) {
        console.log('error: ' + error);
    }
}