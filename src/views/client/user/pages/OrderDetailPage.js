import React from 'react';
import { Link } from "react-router-dom";

import "../user.scss";
import Sidebar from "../components/Sidebar";


class OrderDetailPage extends React.Component {
    render() {
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
                                        Đã đặt hàng ngày 13 thg 9
                                        </div>
                                        <div className="user__order__date">
                                        Đã giao hàng ngày 24 thg 9
                                        </div>
                                    </div>
                                    <div className="user__order__body">
                                        <p> <img src="../assets/img1.jpg" alt="" /></p>
                                        <Link to="/ad.html"> <p className="user__order__title-product">1kg Thập cẩm sấy 100% thành phần thiên nhiên, thơm ngọt, không hóa chất, phẩm màu, đảm bảo vệ sinh an thơm ngọt, không hóa chất, phẩm màu, đảm bảo vệ sinh an</p></Link>
                                        <p>₫ 37.000</p>
                                        <p>Qty: <span className="text-trong"> 2</span></p>
                                    </div>
                                    <div className="user__order__body">
                                        <p> <img src="../assets/img1.jpg" alt="" /></p>
                                        <Link to="/ad.html"> <p className="user__order__title-product">1kg Thập cẩm sấy 100% thành phần thiên nhiên, thơm ngọt, không hóa chất, phẩm màu, đảm bảo vệ sinh an thơm ngọt, không hóa chất, phẩm màu, đảm bảo vệ sinh an</p></Link>
                                        <p>₫ 37.000</p>
                                        <p>Qty: <span className="text-trong"> 2</span></p>
                                    </div>
                                    <div className="user__order__bottom">
                                        <div className="user__order__col-2">
                                            <p>
                                                <span>Họ tên:</span>
                                                <span>Nguyen dat</span>
                                            </p>
                                            <p>
                                                <span>Số điện thoại:</span>
                                                <span>01232435</span>
                                            </p>
                                            <p>
                                                <span>Địa chỉ:</span>
                                                <span>123 Bạch đằng, p24 quận Bình thạnh TP.HCM</span>
                                            </p>
                                        </div>
                                        <div className="user__order__col-2">
                                            <h3>Tổng cộng</h3>
                                            <p>
                                                <span>Tổng Tiền(2 Sản phẩm):</span>
                                                <span>74.000 ₫</span>
                                            </p>
                                            <p>
                                                <span>Phí vận chuyển:</span>
                                                <span>74.000 ₫</span>
                                            </p>
                                            <p>
                                                <span>Voucher Miễn Phí Vận Chuyển:</span>
                                                <span>-74.000 ₫</span>
                                            </p>
                                            <p>
                                                <span>Voucher Tahaha:</span>
                                                <span>-74.000 ₫</span>
                                            </p>
                                            <p>
                                                <span>Tổng cộng:</span>
                                                <span className="text-18 text-trong">74.000 ₫</span>
                                            </p>
                                            <p>
                                                <span>Phương thức thanh toán:</span>
                                                <span>Thanh toán khi nhận hàng</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderDetailPage;