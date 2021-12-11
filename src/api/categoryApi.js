import axisosClient from "./axisosClient";

const categoryApi = {
    getCategoryAll: ()=>{
        const url = `/admin/category`;
        return axisosClient.get(url);
    },
    getCategoryById: (id)=>{
        const url = `/admin/category/${id}`;
        return axisosClient.get(url);
    },
    addCategory: (data)=>{
        const url = `/admin/category/`;
        return axisosClient.post(url,{...data});
    },
    updateCategory: (id,data)=>{
        const url = `/admin/category/${id}`;
        return axisosClient.put(url,{...data});
    },
    deleteCategory: (id)=>{
        const url = `/admin/category/${id}`;
        return axisosClient.delete(url);
    },
}



export default categoryApi;