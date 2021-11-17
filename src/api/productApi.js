import axisosClient from "./axisosClient";

const productApi = {
    getAllProducts: (param)=>{
        const url = `/products`;
        return axisosClient.get(url,{param});
    },

    getById: (id)=>{
        const url = `/product/${id}`;
        return axisosClient.get(url);
    }
}



export default productApi;