import axisosClient from "./axisosClient";

const shoppingApi = {
    addCart: (data) => {
        const url = `/add-to-cart`;
        return axisosClient.post(url, {...data});
    },
    checkout: (data) => {
        const url = `/check-out`;
        return axisosClient.post(url, {...data});
    },
    getOrderByUserIdAndOrderId: (params)=>{
        const url = `/order/get-order-user-and-id`;
        return axisosClient.get(url,{params});
    },
    getOrderByUserId: (id)=>{
        const url = `/order/user/${id}`;
        return axisosClient.get(url);
    },
    getOrdersByStoreId: (id)=>{
        const url = `/order/store/${id}`;
        return axisosClient.get(url);
    },
    getOrdersAdmin: ()=>{
        const url = `/order/admin`;
        return axisosClient.get(url);
    },
    getOrderById: (id)=>{
        const url = `/order/${id}`;
        return axisosClient.get(url);
    },
    updateStatusOrder: (id,data)=>{
        const url = `/order/${id}`;
        return axisosClient.put(url,{...data});
    },
}



export default shoppingApi;