import React, { useState, useEffect } from 'react';
//api
import shoppingApi from 'api/shoppingApi';
//redux
import { useSelector } from "react-redux";


import TableOrders from "../components/TableOrders";
import TableSkeleton from "components/skeleton/TableSkeleton";

function ListOrderAdminPage() {
    const user = useSelector(state => state.auth.user);
    /*********state*********/
    const [isLoadFetchApiSuccess, setIsLoadFetchApiSuccess] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(async () => {
        await getAllOrderStore();
    }, [])

    const getAllOrderStore = async () => {
        try {
            if (isLoadFetchApiSuccess) {
                setIsLoadFetchApiSuccess(false);
            }

            const res = await shoppingApi.getOrdersAdmin();
            if (res.success) {
                const newData = [...res.data].map(item => {
                    item.or_action = item.id;
                    item.statusObj = {
                        id: item.id,
                        status: item.status,
                    }
                    return item;
                })
                setOrders(newData);
            }
            setIsLoadFetchApiSuccess(true);

        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div>
            {
                isLoadFetchApiSuccess ?
                    <TableOrders orders={orders} />
                    :
                    <TableSkeleton />
            }
        </div>
    );
}

export default ListOrderAdminPage;