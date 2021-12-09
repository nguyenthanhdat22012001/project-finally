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
    getCouponAdmin: ()=>{
        const url = `/coupon/0`;
        return axisosClient.get(url);
    },
    getCouponStore: (id)=>{
        const url = `/coupon/${id}`;
        return axisosClient.get(url);
    },
    getCouponUserCollection: (id)=>{
        const url = `/collection-coupon/user/${id}`;
        return axisosClient.get(url);
    },
    collectionCoupon: (data)=>{
        const url = `/collection-coupon`;
        return axisosClient.post(url,{...data});
    },
    deleteCouponUserCollection: (id)=>{
        const url = `/collection-coupon/${id}`;
        return axisosClient.delete(url);
    },
}



export default couponApi;