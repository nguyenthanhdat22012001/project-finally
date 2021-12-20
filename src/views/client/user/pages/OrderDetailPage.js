import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
//api 
import shoppingApi from "api/shoppingApi";
//redux
import { useSelector } from "react-redux";
//helper
import { formatdateDMY } from "helper/FormatDate";
import { fCurrencyVN } from 'helper/FormatNumber';

import "../user.scss";
import Sidebar from "../components/Sidebar";

const baseUrl = '/client/product/';

function OrderDetailPage() {
    const user = useSelector(state => state.auth.user);
    const { id } = useParams();
    /********state***********/
    const [order, setOrder] = useState(null);
    const [loadingButton, setLoadingButton] = useState(false);

    useEffect(async () => {
        await getOrderByid();
    }, [id])
    /**********get order by id************/
    const getOrderByid = async () => {
        try {
            const params = {
                user_id: user.id,
                id: id
            }
            const res = await shoppingApi.getOrderByUserIdAndOrderId(params);
            if (res.success) {

                if (res.data.status === 0) {
                    res.data.name_status = 'Đã hủy';
                    res.data.color = 'red';
                } else if (res.data.status === 1) {
                    res.data.name_status = 'Đang chờ xác nhận'
                    res.data.color = 'orange';
                } else if (res.data.status === 2) {
                    res.data.name_status = 'Đã xác nhận'
                    res.data.color = 'blue';
                } else if (res.data.status === 3) {
                    res.data.name_status = 'Đang giao hàng'
                    res.data.color = 'purple';
                } else {
                    res.data.name_status = 'Đã giao hàng'
                    res.data.color = 'green';
                }
                console.log('res.data', res.data);
                setOrder(res.data);
            }
        } catch (error) {
            console.log('error', error);
        }
    }
   /**********handle update status order************/
    const handleUpdateStatus = async (id, status) => {
        try {
            setLoadingButton(true);
            const data = {
                status: status
            }
            const res = await shoppingApi.updateStatusOrder(id, data);
            if (res.success) {
                await getOrderByid();
            }
            setLoadingButton(false);
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
                    <h2 className="user__title-page">Chi tiết đơn hàng</h2>
                    <div className="">
                        <ul className="user__order__list">
                            <li className="user__order__item">
                                <div className="user__order__head">
                                    <div className="user__order__store">
                                        Đã đặt hàng ngày {order ? formatdateDMY(order.created_at) : ""}
                                    </div>
                                    <div className="user__order__date" style={{ color: `${order ? order.color : ""}` }}>
                                        {order ? order.name_status : ''} {order && order.status === 4 ? formatdateDMY(order.updated_at) : ""}
                                    </div>
                                </div>

                                {
                                    order ?
                                        [...order.product].map(prd => {
                                            return (
                                                <div className="user__order__body">
                                                    <p> <img src={prd.product_img} alt="" /></p>
                                                    <Link to={`${baseUrl + prd.product_slug}.html`} > <p className="user__order__title-product">{prd.product_name}</p></Link>
                                                    <p>{fCurrencyVN(prd.product_price)}</p>
                                                    <p>Qty: <span className="text-trong"> {prd.amount}</span></p>
                                                </div>
                                            )
                                        }) : ""
                                }

                                <div className="user__order__bottom">
                                    <div className="user__order__col-2">
                                        <p>
                                            <span>Họ tên:</span>
                                            <span>{order ? order.name : ""}</span>
                                        </p>
                                        <p>
                                            <span>Số điện thoại:</span>
                                            <span>{order ? order.phone : ""}</span>
                                        </p>
                                        <p>
                                            <span>Địa chỉ:</span>
                                            <span>{order ? order.address : ""}</span>
                                        </p>
                                    </div>
                                    <div className="user__order__col-2">
                                        <h3>Tổng cộng</h3>
                                        <p>
                                            <span>Phí vận chuyển:</span>
                                            <span>{fCurrencyVN(order ? order.shippingprice : 0)}</span>
                                        </p>
                                        {
                                            order && [...order.sub_order].length > 0 ?
                                                [...order.sub_order].map(item => {
                                                    return (
                                                        <p>
                                                            <span>Voucher {item.coupon_sku}:</span>
                                                            <span>-{fCurrencyVN(item.coupon_price)}</span>
                                                        </p>
                                                    )
                                                }) : ""
                                        }

                                        {
                                            order && order.coupon_sku ?
                                                <p>
                                                    <span>Voucher {order.coupon_sku}:</span>
                                                    <span>-{fCurrencyVN(order.coupon_price)}</span>
                                                </p>
                                                : ""
                                        }
                                        <p>
                                            <span>Tổng cộng:</span>
                                            <span className="text-18 text-trong">{fCurrencyVN(order ? order.totalprice : 0)}</span>
                                        </p>
                                        <p>
                                            <span>Phương thức thanh toán:</span>
                                            <span>{order ? order.payment.name : ""}</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <Box
                            component="div"
                            sx={{
                                display: 'flex',
                                justifyContent: "flex-end"
                            }}
                        >
                            <LoadingButton
                                variant="outlined"
                                color='error'
                                size='medium'
                                loading={loadingButton}
                                disabled={order && order.status !== 1 ? true : false}
                                // loadingPosition="end"
                                onClick={() => handleUpdateStatus(order.id, 0)}
                            >
                                Hủy đơn
                            </LoadingButton>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailPage;