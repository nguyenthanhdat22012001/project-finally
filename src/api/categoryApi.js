import axisosClient from "./axisosClient";

const categoryApi = {
    getCategory: ()=>{
        const url = `/category`;
        return axisosClient.get(url);
    },
    getCategoryAll: ()=>{
        const url = `/category`;
        return axisosClient.get(url);
    },
    getCategoryById: (id)=>{
        const url = `/category/${id}`;
        return axisosClient.get(url);
    },
    addCategory: (data)=>{
        const url = `/category`;
        return axisosClient.post(url,{...data});
    },
    updateCategory: (id,data)=>{
        const url = `/category/${id}`;
        return axisosClient.put(url,{...data});
    },
    deleteCategory: (id)=>{
        const url = `/category/${id}`;
        return axisosClient.delete(url);
    },
}



export default categoryApi;