import axisosClient from "./axisosClient";

const userApi = {
    registerUser: (data)=>{
        const url = `/register`;
        return axisosClient.post(url,{...data});
    },
    LoginUser: (data)=>{
        const url = `/login`;
        return axisosClient.post(url,{...data});
    }
}

export default userApi;