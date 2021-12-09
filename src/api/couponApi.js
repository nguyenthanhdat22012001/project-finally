import axisosClient from "./axisosClient";

const couponApi = {
    getCouponAll: ()=>{
        const url = `/coupons`;
        return axisosClient.get(url);
    },
    getCouponById: (id)=>{
        const url = `/coupons/${id}`;
        return axisosClient.get(url);
    },
    addCoupon: (data)=>{
        const url = `/coupons`;
        return axisosClient.post(url,{...data});
    },
    updateCoupon: (id,data)=>{
        const url = `/coupons/${id}`;
        return axisosClient.put(url,{...data});
    },
    deleteCoupon: (id)=>{
        const url = `/coupons/${id}`;
        return axisosClient.delete(url);
    },
}



export default couponApi;