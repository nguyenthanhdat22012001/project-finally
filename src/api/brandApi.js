import axisosClient from "./axisosClient";

const brandApi = {
    getBrandAll: ()=>{
        const url = `/brands`;
        return axisosClient.get(url);
    },
    getBrandById: (id)=>{
        const url = `/brands/${id}`;
        return axisosClient.get(url);
    },
    addBrand: (data)=>{
        const url = `/brands`;
        return axisosClient.post(url,{...data});
    },
    updateBrand: (id,data)=>{
        const url = `/brands/${id}`;
        return axisosClient.put(url,{...data});
    },
    deleteBrand: (id)=>{
        const url = `/brands/${id}`;
        return axisosClient.delete(url);
    },
}



export default brandApi;