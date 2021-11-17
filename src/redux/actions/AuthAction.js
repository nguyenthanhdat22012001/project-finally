// api
import userApi from "api/userApi";
//type auth redux
import typeAuth from "../contains/typeAuth";
//helper
import { setUserLocalStorage ,removeUserLocalStorage} from "helper/auth";
import { handleNotiDialog } from 'helper/notify';

// Thunk function
export const LoginUserRedux = (enqueueSnackbar, data) => async (dispatch, getState) => {
    try {
        const res = await userApi.LoginUser(data);

        if (res.success) {
            const result = {
                user: res.data,
                access_token: res.access_token,
                expires_in: res.expires_in,
            }
            dispatch({ type: typeAuth.LOGIN_USER, payload: result });
            setUserLocalStorage(result);
        } else {
            handleNotiDialog(enqueueSnackbar, res.message, 'error');
        }

        console.log(res);
    } catch (error) {
        console.log('error: ' + error);
    }

}

export const LogOutUserRedux = (enqueueSnackbar) => async (dispatch, getState) => {
    try {
        const res = await userApi.LogoutUser();

        if (res.success) {
            dispatch({ type: typeAuth.LOGOUT_USER});
            removeUserLocalStorage();
        } else {
            handleNotiDialog(enqueueSnackbar, res.message, 'error');
        }

        console.log(res);
    } catch (error) {
        console.log('error: ' + error);
    }

}

// export const LoginUser = () => async (dispatch, getState) => {
//     try {
//         const res = await userApi.getProfileUser();

//         if (res.success) {
//             const result = {
//                 user: res.data
//             };
//             dispatch({ type: typeAuth.LOGIN_USER, payload: result })
//         }

//         console.log(res);
//     } catch (error) {
//         console.log('error: ' + error);
//     }

// }