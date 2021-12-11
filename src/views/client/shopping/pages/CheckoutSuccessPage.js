import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';


import "./CheckoutSuccessPage.scss";

class CheckoutSuccessPage extends React.Component {
    render() {
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
                        <h3 className="payment-order__sku">Mã đơn hàng của bạn: <b className="text-trong">#100000129</b></h3>
                        <p className="payment-order__date">
                            <b className="text-trong">Ngày đặt: </b>
                            <i>02/10/2021</i>
                        </p>
                        <p className="payment-order__date">
                            <b className="text-trong">Phương thức thanh toán: </b>
                            <i>Thanh toán khi nhận hàng</i>
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
                                    <tr className="payment-order__store">
                                        <td colspan="5">
                                            <StorefrontIcon />
                                            <span>Coop food-Oganic</span>
                                        </td>
                                    </tr>
                                    <tr class="payment-order__product-item">
                                        <td class="payment-order__product__image">
                                            <img class="img-responsive" src="../assets/img1.jpg" alt="" />
                                        </td>
                                        <td class="payment-order__product__desc">
                                            <p> Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung trẻ trung Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung</p>
                                            <span >Đỏ</span>
                                        </td>
                                        <td class="payment-order__product__price">400,000đ</td>
                                        <td class="payment-order__product__quanty">
                                            1
                                        </td>
                                        <td class="payment-order__product__amount">
                                            1,200,000đ
                                        </td>
                                    </tr>
                                    <tr className="text-trong">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Voucher</td>
                                        <td>-15,000đ</td>
                                    </tr>
                                    <tr className="text-trong">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Tạm tính</td>
                                        <td>300,000đ</td>
                                    </tr>
                                    <tr className="payment-order__store">
                                        <td colspan="5">
                                            <StorefrontIcon />
                                            <span>Coop food-Oganic</span>
                                        </td>
                                    </tr>
                                    <tr class="payment-order__product-item">
                                        <td class="payment-order__product__image">
                                            <img class="img-responsive" src="../assets/img1.jpg" alt="" />
                                        </td>
                                        <td class="payment-order__product__desc">
                                            <p> Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung trẻ trung Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung</p>
                                            <span >Đỏ</span>
                                        </td>
                                        <td class="payment-order__product__price">400,000đ</td>
                                        <td class="payment-order__product__quanty">
                                            1
                                        </td>
                                        <td class="payment-order__product__amount">
                                            1,200,000đ
                                        </td>
                                    </tr>
                                    <tr className="text-trong">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Voucher</td>
                                        <td>-15,000đ</td>
                                    </tr>
                                    <tr className="text-trong">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Tạm tính</td>
                                        <td>300,000đ</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Phí ship</td>
                                        <td>15,000đ</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Voucher Tadahaha</td>
                                        <td>-15,000đ</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Tổng tiền</td>
                                        <td>515,000đ</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="payment-order__total-price">
                            <span><b className="text-trong">Tổng thanh toán:</b></span>
                            <span class="pay-price">
                                1,390,000đ
                            </span>
                        </div>
                        <div className="" style={{ textAlign: 'right' }}>
                            <Link to="/my-order">  <Button variant="contained" color="primary" size="large">Đơn hàng của tối</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutSuccessPage;