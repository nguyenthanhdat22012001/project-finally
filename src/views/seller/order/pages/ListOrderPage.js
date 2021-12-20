import React, { useState, useEffect } from 'react';
//api
import shoppingApi from 'api/shoppingApi';
//redux
import { useSelector } from "react-redux";

import TableOrder from "../components/TableOrder";


function ListOrderPage() {
    const user = useSelector(state => state.auth.user);
    /*********state*********/
    const [orders, setOrders] = useState([]);

    useEffect(async () => {
        await getAllOrderStore();
    }, [])

    const getAllOrderStore = async () => {
        try {
            const res = await shoppingApi.getOrdersByStoreId(user.store_id);
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
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div>
            <TableOrder orders={orders} />
        </div>
    );
}

export default ListOrderPage;