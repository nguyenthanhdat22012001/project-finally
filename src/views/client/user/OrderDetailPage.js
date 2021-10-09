import React from 'react';
import { Link } from "react-router-dom";

import "./user.scss";
import Header from "../../../components/client/header/Header";
import Footer from "../../../components/client/footer/Footer";
import ScrollToTop from "../../../components/client/header/ScrollToTop";
import Chat from "../../../components/client/chat/Chat";
import Sidebar from "./Sidebar";


class OrderDetailPage extends React.Component {
    render() {
        return (
            <div className="client">
                <ScrollToTop />
                <Chat />
                <Header />
                <main className="client__inner">
                    <div className="wrapper_inner">
                        <div className="user__wrapper">
                            <div className="user__col-left">
                                <Sidebar />
                            </div>
                            <div className="user__col-right">
                                <h2 className="user__title">Chi tiet don hang</h2>
                                <div className="">
                                    <ul className="user__order__list">
                                        <li className="user__order__item">
                                            <div className="user__order__head">
                                                <div className="user__order__store">
                                                    da dat hang ngay 13 thg 9
                                                </div>
                                                <div className="user__order__date">
                                                    da giao hang ngay 13 thg 9
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
                                                        <span>Ho ten:</span>
                                                        <span>Nguyen dat</span>
                                                    </p>
                                                    <p>
                                                        <span>so dien thoai:</span>
                                                        <span>01232435</span>
                                                    </p>
                                                    <p>
                                                        <span>Dia chi:</span>
                                                        <span>123 bach dang, p24 quan binh thanh TP.HCM</span>
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
                                                        <span>Phuong yhuc thanh toán:</span>
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
                </main>
                <Footer />
            </div>

        )
    }
}

export default OrderDetailPage;