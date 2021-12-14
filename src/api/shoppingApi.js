import axisosClient from "./axisosClient";

const shoppingApi = {
    addCart: (data) => {
        const url = `/add-to-cart`;
        return axisosClient.post(url, {...data});
    },
}



export default shoppingApi;