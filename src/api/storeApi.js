import axisosClient from "./axisosClient";

const storeApi = {
    createStore: (data) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'content-type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
            }
        }
        const url = `/stores`;
        return axisosClient.post(url, {...data});
    },

    getStoreByIdUser: (id) => {
        const url = `/stores/${id}`;
        return axisosClient.get(url);
    },
}



export default storeApi;