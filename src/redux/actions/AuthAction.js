// api
import userApi from "api/userApi";

export  const  LoginAuthAction = (isLogin) => {
    return {
        type: "LOGIN",
        payload: isLogin,
    }
}

export  const  ProfileAction = (user) => {
    return {
        type: "PROFILE",
        payload: user,
    }
}

export  const  LoginGoogleAuthAction = (user) => {
    return {
        type: "LOGIN_GOOGLE",
        payload: user,
    }
}

// Thunk function
  export async function updateProfileUser(dispatch, getState) {
    try {
        const res = await userApi.getProfileUser();

        if (res.success) {

            const result = {
                user: res.data
            };
            dispatch({ type: "PROFILE", payload: result })
        }

        console.log(res);
    } catch (error) {
        console.log('error: ' + error);
    }
    
  }