import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
//api
import shoppingApi from 'api/shoppingApi';
//helper
import { formatdateDMY } from "helper/FormatDate";
import { fCurrencyVN } from 'helper/FormatNumber';

import "./DetailOrderPage.scss";
import ButtonStatus from "../components/ButtonStatus";

function DetailOrderPage(props) {
    const { id } = useParams();
    /******state*******/
    const [order, setOrder] = useState(null);


    useEffect(async () => {
        await getOrderById();
    }, [id])

    /**********get order by id*********/
    const getOrderById = async () => {
        try {
            const res = await shoppingApi.getOrderById(id);
            if (res.success) {
                const sub_orders = [...res.data.sub_order].map(ord => {
                    if (ord.status === 0) {
                        ord.name_status = 'Đã hủy';
                    } else if (ord.status === 1) {
                        ord.name_status = 'Đang chờ xác nhận'
                    } else if (ord.status === 2) {
                        ord.name_status = 'Đã xác nhận'
                    } else if (ord.status === 3) {
                        ord.name_status = 'Đang giao hàng'
                    } else {
                        ord.name_status = 'Đã giao hàng'
                    }
                    return ord;
                })
                const newData = {
                    ...res.data,
                    statusObj: {
                        id: res.data.id,
                        status: res.data.status,
                    },
                    sub_order: sub_orders,
                }

                setOrder(newData);
            }
        } catch (error) {
            console.log('error', error);
        }
    }



    return (
        <Grid container spacing={3}>
        
            <Grid item xs={12} >
                <Grid container justifyContent="space-evenly">
                    <Typography variant='h5'>
                        Mã Đơn Hàng #{order ? order.id : ''}
                    </Typography>
                    <ButtonStatus
                        statusObj={order ? order.statusObj : null}
                        getOrderById={getOrderById}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} >
                <div className="table-info">
                    <table cellSpacing="0">
                        <tr>
                            <td>
                                <span>Họ tên:</span>
                                <span>{order ? order.name : ''}</span>
                            </td>
                            <td>
                                <span>Địa chỉ:</span>
                                <span>{order ? order.address : ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Số điện thoại:</span>
                                <span>{order ? order.phone : ''}</span>
                            </td>
                            <td>
                                <span>Ngày đặt:</span>
                                <span>{order ? formatdateDMY(order.created_at) : ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Ghi chú:</span>
                                <span>{order ? order.note : ''}</span>
                            </td>
                            <td>
                                <p>
                                    <span>Voucher {order ? order.coupon_sku : ''}:</span>
                                    <span>{order ? fCurrencyVN(order.coupon_price) : ''}</span>
                                </p>
                                <p>
                                    <span>Phí ship:</span>
                                    <span>{order ? order.shippingprice : ''}</span>
                                </p>
                                <p>
                                    <span>Số lượng:</span>
                                    <span>{order ? order.totalQuantity : 0}</span>
                                </p>
                                <p>
                                    <span>Tổng tiền:</span>
                                    <span>{order ? fCurrencyVN(order.totalprice) : 0}</span>
                                </p>
                                <p>
                                    <span>Phương thức thanh toán:</span>
                                    <span>{order ? order.payment.name : ''}</span>
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </Grid>
            <Grid item xs={12}>
                {
                    order && [...order.sub_order].length > 0 ?
                        [...order.sub_order].map(ord => {
                            return (
                                <div key={ord.id} className="table-order">
                                    <div className="header">Mã đơn #{ord.id}</div>
                                    <table cellSpacing="0">
                                        <tr>
                                            <th>Hình ảnh</th>
                                            <th >Tên sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>thành tiền</th>
                                        </tr>
                                        {
                                            [...order.product].length > 0 ?
                                                [...order.product].map(prd => {
                                                    if (prd.order_id === ord.id) {
                                                        return (
                                                            <tr key={prd.id}>
                                                                <td><img src={prd.product_img} alt="" /></td>
                                                                <td>
                                                                    <p>{prd.product_name}</p>
                                                                    <p style={{ color: "gray" }}>x {prd.attribute_name}</p>
                                                                </td>
                                                                <td>{fCurrencyVN(prd.product_price)}</td>
                                                                <td>{prd.amount}</td>
                                                                <td>{fCurrencyVN(prd.product_price * prd.amount)} </td>
                                                            </tr>
                                                        );
                                                    }
                                                }) : ""
                                        }
                                        <tfoot>
                                            <tr>
                                                <td colSpan={2}>
                                                    {
                                                        [...order.stores].length > 0 ?
                                                            [...order.stores].map(stor => {
                                                                if (ord.store_id === stor.id) {
                                                                    return (
                                                                        <p key={stor.id}>
                                                                            <span>Tên cửa hàng:</span>
                                                                            <span>{stor.name}</span>
                                                                        </p>
                                                                    )
                                                                }
                                                            }) : ""
                                                    }
                                                    {
                                                        [...order.stores].length > 0 ?
                                                            [...order.stores].map(stor => {
                                                                if (ord.store_id === stor.id) {
                                                                    return (
                                                                        <p key={stor.id}>
                                                                            <span>Số điện thoại:</span>
                                                                            <span>{stor.phone}</span>
                                                                        </p>
                                                                    )
                                                                }
                                                            }) : ""
                                                    }
                                                    {
                                                        [...order.stores].length > 0 ?
                                                            [...order.stores].map(stor => {
                                                                if (ord.store_id === stor.id) {
                                                                    return (
                                                                        <p key={stor.id}>
                                                                            <span>Địa chỉ cửa hàng:</span>
                                                                            <span>{stor.address}</span>
                                                                        </p>
                                                                    )
                                                                }
                                                            }) : ""
                                                    }
                                                    <p>
                                                        <span>Trạng thái đơn hàng:</span>
                                                        <span>{ord.name_status}</span>
                                                    </p>
                                                </td>
                                                <td colSpan={3}>
                                                    {
                                                        ord.coupon_sku ?
                                                            <p>
                                                                <span>Voucher {ord.coupon_sku}:</span>
                                                                <span>{fCurrencyVN(ord.coupon_price)}</span>
                                                            </p>
                                                            : ""
                                                    }
                                                    <p>
                                                        <span>Số lượng:</span>
                                                        <span>{ord.totalQuantity}</span>
                                                    </p>
                                                    <p>
                                                        <span>Tổng tiền:</span>
                                                        <span>{fCurrencyVN(ord.totalprice)}</span>
                                                    </p>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            )
                        })
                        : ""
                }

            </Grid>
        </Grid>
    )
}

export default DetailOrderPage

