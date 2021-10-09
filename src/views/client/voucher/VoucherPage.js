import React from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';

import Header from "../../../components/client/header/Header";
import Footer from "../../../components/client/footer/Footer";
import ScrollToTop from "../../../components/client/header/ScrollToTop";
import Chat from "../../../components/client/chat/Chat";
import "./VoucherPage.scss";

class VoucherPage extends React.Component {
    render() {
        return (
            <div className="client">
                <ScrollToTop />
                <Chat />
                <Header />
                <main className="client__inner">
                    <div role="presentation">
                        <Breadcrumbs aria-label="breadcrumb">
                            <LinkBreadcrumbs underline="hover" color="inherit" href="/">
                                MUI
                            </LinkBreadcrumbs>
                            <LinkBreadcrumbs
                                underline="hover"
                                color="inherit"
                                href="/getting-started/installation/"
                            >
                                Core
                            </LinkBreadcrumbs>
                            <Typography color="text.primary">detai</Typography>
                        </Breadcrumbs>
                    </div>
                    <div className="wrapper_inner voucher">
                        <h2 className="voucher__title">voucher tadahaha</h2>
                        <div className="voucher__list">
                            <div className="voucher__item">
                                <div className="voucher__system">
                                    <div className="voucher__system-title">
                                        Dành Cho Khách Mới
                                    </div>
                                    <div className="voucher__system-content">
                                        <div className="voucher__system-price">
                                            <span>30.000</span>
                                            <span>₫</span>
                                        </div>
                                        <div className="voucher__system-desc">
                                            Không áp dụng giá trị đơn hàng
                                        </div>
                                        <div className="voucher__system-expired">
                                            Hết hạn trong 3 ngày!
                                        </div>
                                        <div className="voucher__system-btn">
                                            Thu Thập
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="voucher__title">voucher cac cua hang</h2>
                        <div className="voucher__list">
                            <div className="voucher__item">
                                <div className="voucher__store">
                                    <div className="voucher__store-top">
                                        <Link>
                                            <img src="../assets/img1.jpg" alt="" />
                                            <span>Jinshu Shop voucher cac cua hang voucher cac cua hang voucher cac cua hang</span>
                                        </Link>
                                    </div>
                                    <div className="voucher__store-body">
                                        <img src="../assets/img1.jpg" alt="" />
                                        <div className="flexBoxColunm">
                                            <div className="voucher__store-price">
                                            <span>30.000</span>
                                            <span>₫</span>
                                            </div>
                                            <div className="voucher__store-condition">
                                                Đơn hàng từ  499.000₫
                                            </div>
                                        </div>
                                        <div className="voucher__store-button">
                                             Thu Thập
                                        </div>
                                    </div>
                                    <div className="voucher__store-bottom">
                                        Cho toàn gian hàng Có hiệu lực: 2021.07.01-2021.10.31 Cho toàn gian hàng Có hiệu lực: 2021.07.01-2021.10.31
                                    </div>
                                </div>
                            </div>
                            <div className="voucher__item">
                                <div className="voucher__store">
                                    <div className="voucher__store-top">
                                        <Link>
                                            <img src="../assets/img1.jpg" alt="" />
                                            <span>Jinshu Shop voucher cac cua hang voucher cac cua hang voucher cac cua hang</span>
                                        </Link>
                                    </div>
                                    <div className="voucher__store-body">
                                        <img src="../assets/img1.jpg" alt="" />
                                        <div className="flexBoxColunm">
                                            <div className="voucher__store-price">
                                            <span>30.000</span>
                                            <span>₫</span>
                                            </div>
                                            <div className="voucher__store-condition">
                                                Đơn hàng từ  499.000₫
                                            </div>
                                        </div>
                                        <div className="voucher__store-button">
                                             Thu Thập
                                        </div>
                                    </div>
                                    <div className="voucher__store-bottom">
                                        Cho toàn gian hàng Có hiệu lực: 2021.07.01-2021.10.31 Cho toàn gian hàng Có hiệu lực: 2021.07.01-2021.10.31
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    };
}

export default VoucherPage;