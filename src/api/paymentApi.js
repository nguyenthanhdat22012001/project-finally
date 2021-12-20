import axisosClient from "./axisosClient";

const paymentApi = {
    getPaymentAll: ()=>{
        const url = `/payment`;
        return axisosClient.get(url);
    },
    getPaymentById: (id)=>{
        const url = `/payment/${id}`;
        return axisosClient.get(url);
    },
    addPayment: (data)=>{
        const url = `/payment`;
        return axisosClient.post(url,{...data});
    },
    updatePayment: (id,data)=>{
        const url = `/payment/${id}`;
        return axisosClient.put(url,{...data});
    },
    deletePayment: (id)=>{
        const url = `/payment/${id}`;
        return axisosClient.delete(url);
    },
}



export default paymentApi;