import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
//api 
import shoppingApi from "api/shoppingApi";
//redux
import { useSelector } from "react-redux";
//helper
import { formatdateDMY } from "helper/FormatDate";
import { fCurrencyVN } from 'helper/FormatNumber';

import "./CheckoutSuccessPage.scss";

function CheckoutSuccessPage() {
    const user = useSelector(state => state.auth.user);
    const { id } = useParams();
    /********state***********/
    const [order, setOrder] = useState(null);

    useEffect(async () => {
        await getOrderByid();
    }, [id])

    const getOrderByid = async () => {
        try {
            const params = {
                user_id: user.id,
                id: id
            }
            const res = await shoppingApi.getOrderByUserIdAndOrderId(params);
            if (res.success) {
                setOrder(res.data);
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div>
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
                    <LinkBreadcrumbs underline="hover" color="inherit" href="/">
                        TADAHA
                    </LinkBreadcrumbs>
                    <Typography color="text.primary">Đơn hàng</Typography>
                </Breadcrumbs>
            </div>
            <div className="row wrapper_inner">
                <div className="payment-order">
                    <h3 className="payment-order__sku">Mã đơn hàng của bạn: <b className="text-trong">#{order ? order.id : ""}</b></h3>
                    <p className="payment-order__date">
                        <b className="text-trong">Ngày đặt: </b>
                        <i>{order ? formatdateDMY(order.created_at) : ""}</i>
                    </p>
                    <p className="payment-order__date">
                        <b className="text-trong">Phương thức thanh toán: </b>
                        <i>{order ? order.payment.name : ""}</i>
                    </p>
                    <h1 className="payment-order__title">Thông tin đơn hàng</h1>
                    <div class="payment-order__info table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    order ?
                                        [...order.product].map(prd => {
                                            return (
                                                <tr class="payment-order__product-item">
                                                    <td class="payment-order__product__image">
                                                        <img class="img-responsive" src={prd.product_img} alt="" />
                                                    </td>
                                                    <td class="payment-order__product__desc">
                                                        <p> {prd.product_name}</p>
                                                        <span >{prd.attribute_name}</span>
                                                    </td>
                                                    <td class="payment-order__product__price">{fCurrencyVN(prd.product_price)}</td>
                                                    <td class="payment-order__product__quanty">
                                                    {prd.amount}
                                                    </td>
                                                    <td class="payment-order__product__amount">
                                                    {fCurrencyVN(prd.product_price * prd.amount)}
                                                    </td>
                                                </tr>
                                            )
                                        }) : ""
                                }

                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Phí ship</td>
                                    <td>{order ? fCurrencyVN(order.shippingprice) : ""}</td>
                                </tr>
                                {
                                    order ?
                                        [...order.sub_order].map(item => {
                                            return (
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{item.coupon_sku}</td>
                                                    <td>- {fCurrencyVN(item.coupon_price)}</td>
                                                </tr>
                                            )
                                        }) : ""
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>  {order  ? order.coupon_sku : ""}</td>
                                    <td>- {order ? fCurrencyVN(order.coupon_price) : "0 đ"}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class="payment-order__total-price">
                        <span><b className="text-trong">Tổng thanh toán:</b></span>
                        <span class="pay-price">
                            {order ? fCurrencyVN(order.totalprice) : "0 đ"}
                        </span>
                    </div>
                    <div className="" style={{ textAlign: 'right' }}>
                        <Link to={`/client/user/order`}>  <Button variant="contained" color="primary" size="large">Đơn hàng của tối</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSuccessPage;