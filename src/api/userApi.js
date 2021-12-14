import axisosClient from "./axisosClient";

const userApi = {
    registerUser: (data)=>{
        const url = `/register`;
        return axisosClient.post(url,{...data});
    },
    LoginUser: (data)=>{
        const url = `/login`;
        return axisosClient.post(url,{...data});
    },
    LoginGoogle: (data)=>{
        const url = `/loginGoogle`;
        return axisosClient.post(url,{...data});
    },
    forgotPassword: (data)=>{
        const url = `/forgot-password`;
        return axisosClient.post(url,{...data});
    },
    resetPassword: (data)=>{
        const url = `/reset-password`;
        return axisosClient.post(url,{...data});
    },
    getProfileUser: ()=>{
        const url = `/profile`;
        return axisosClient.get(url);
    },
    changePassword: (data)=>{
        const url = `/profile/change-password`;
        return axisosClient.post(url,{...data});
    },
    refreshToken: ()=>{
        const url = `/refresh-token`;
        return axisosClient.get(url);
    },
    LogoutUser: ()=>{
        const url = `/logout`;
        return axisosClient.get(url);
    },
    /*****admin*****/
    LoginAdmin: (data)=>{
        const url = `/admin/login`;
        return axisosClient.post(url,{...data});
    },
    LogoutAdmin: ()=>{
        const url = `/admin/logout`;
        return axisosClient.get(url);
    },
}

export default userApi;