import React, { useEffect, useState } from 'react';
//api 
import shoppingApi from "api/shoppingApi";
//redux
import { useSelector } from "react-redux";

import "../user.scss";
import Sidebar from "../components/Sidebar";
import TabOrder from "../components/TabOrder";


function HistoryOrderPage() {
    const user = useSelector(state => state.auth.user);
    /******state********/
    const [orders, setOrders] = useState();

    useEffect( async () => {
        await getOrdersUser();
    }, [])


    const getOrdersUser = async () => {
        try {
            const res = await shoppingApi.getOrderByUserId(user.id);
            if (res.success) {
                const newOrder = [...res.data].map(item =>{
                    if(item.status === 0){
                        item.name_status = 'Đã hủy';
                        item.color = 'red';
                    }else if(item.status === 1){
                        item.name_status = 'Đang chờ xác nhận'
                        item.color = 'orange';
                    }else if(item.status === 2){
                        item.name_status = 'Đã xác nhận'
                        item.color = 'blue';
                    }else if(item.status === 3){
                        item.name_status = 'Đang giao hàng'
                        item.color = 'purple';
                    }else{
                        item.name_status = 'Đã giao hàng'
                        item.color = 'green';
                    }
                    return item;
                })
                setOrders(newOrder);
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div className="wrapper_inner">
            <div className="user__wrapper">
                <div className="user__col-left">
                    <Sidebar />
                </div>
                <div className="user__col-right">
                    <h2 className="user__title-page">Đơn hàng của tôi</h2>
                    <div className="row">
                        <TabOrder orders={orders}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HistoryOrderPage;