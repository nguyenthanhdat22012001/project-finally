import axisosClient from "./axisosClient";

const doashBoardSellerApi = {
    statisticsGeneralOfStore: (store_id)=>{
        const url = `/dash-board/general/store/${store_id}`;
        return axisosClient.get(url);
    },
    statisticsRevenueMonthOfStore: (store_id)=>{
        const url = `/dash-board/revenue-month/store/${store_id}`;
        return axisosClient.get(url);
    },
    statisticsProductHotTrendByMonth: (store_id)=>{
        const url = `/dash-board/product-trend/store/${store_id}`;
        return axisosClient.get(url);
    },
}



export default doashBoardSellerApi;