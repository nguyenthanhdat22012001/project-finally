// api
import userApi from "api/userApi";
//type auth redux
import typeAuth from "../contains/typeAuth";
//helper
import { setUserLocalStorage, removeUserLocalStorage ,getUserLocalStorage} from "helper/auth";
import { handleNotiDialog } from 'helper/notify';

/**********login user****************/
export const LoginUserRedux = (enqueueSnackbar, history, data) => async (dispatch, getState) => {
    try {
        const res = await userApi.LoginUser(data);

        if (res.success) {
            const result = {
                user: res.data,
                access_token: res.access_token,
                expires_in: res.expires_in,
            }
            dispatch({ type: typeAuth.LOGIN_USER, payload: result });
            handleNotiDialog(enqueueSnackbar, res.message, 'success');
            setUserLocalStorage(result);
            history.goBack();
        } else {
            handleNotiDialog(enqueueSnackbar, res.message, 'error');
        }

        console.log(res);
    } catch (error) {
        console.log('error: ' + error);
    }

}

/**********login admin****************/
export const LoginAdminRedux = (enqueueSnackbar, history, data) => async (dispatch, getState) => {
    try {
        const res = await userApi.LoginAdmin(data);

        if (res.success) {
            const result = {
                user: res.data,
                access_token: res.access_token,
                expires_in: res.expires_in,
            }
            dispatch({ type: typeAuth.LOGIN_USER, payload: result });
            handleNotiDialog(enqueueSnackbar, res.message, 'success');
            setUserLocalStorage(result);
            history.push('/admin');
        } else {
            handleNotiDialog(enqueueSnackbar, res.message, 'error');
        }

        console.log(res);
    } catch (error) {
        console.log('error: ' + error);
    }

}
/**********login out****************/
export const LogOutUserRedux = (enqueueSnackbar,history) => async (dispatch, getState) => {
    try {
        const res = await userApi.LogoutUser();

        if (res.success) {
            dispatch({ type: typeAuth.LOGOUT_USER });
            removeUserLocalStorage();
            history.push('/');
        } else {
            handleNotiDialog(enqueueSnackbar, res.message, 'error');
        }
        
    } catch (error) {
        console.log('error: ' + error);
    }
}

/**********update user****************/
export const updateUserRedux = () => async (dispatch, getState) => {
    try {
        const res = await userApi.getProfileUser();

        if (res.success) {
            const localSorage_user = getUserLocalStorage();
            const result = {
                ...localSorage_user,
                user: res.data,
            }
            dispatch({ type: typeAuth.UPDATE_USER, payload: result });
            setUserLocalStorage(result);
        } else {
            console.log(res);
        }
    } catch (error) {
        console.log('error: ' + error);
    }

}
