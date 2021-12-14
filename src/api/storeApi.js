import axisosClient from "./axisosClient";

const storeApi = {
    createStore: (data) => {
        const url = `/stores`;
        return axisosClient.post(url, {...data});
    },
    getStoreByIdUser: (id) => {
        const url = `/stores/${id}`;
        return axisosClient.get(url);
    },
    getStoreUserCollection: (id)=>{
        const url = `/collection-store/user/${id}`;
        return axisosClient.get(url);
    },
    collectionStore: (data)=>{
        const url = `/collection-store`;
        return axisosClient.post(url,{...data});
    },
    deleteStoreUserCollection: (params)=>{
        const url = `/collection-store`;
        return axisosClient.delete(url,{params});
    },
    checkUserFollowStore: (params)=>{
        const url = `/collection-store/user-follow-store`;
        return axisosClient.get(url,{params});
    },
}



export default storeApi;