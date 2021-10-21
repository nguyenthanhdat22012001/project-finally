import axisosClient from "./axisosClient";

const productApi = {
    getAll: (param)=>{
        const url = `/product`;
        return axisosClient.get(url,{param});
    },

    getById: (id)=>{
        const url = `/product/${id}`;
        return axisosClient.get(url);
    }
}



export default productApi;