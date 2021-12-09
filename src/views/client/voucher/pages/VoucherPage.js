import React from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';

import "./VoucherPage.scss";

import imgStore1 from "assets/images/store-1.jpg";
import imgStore2 from "assets/images/store-2.jpg";

class VoucherPage extends React.Component {
    render() {
        return (
            <div>
                    <div role="presentation">
                        <Breadcrumbs aria-label="breadcrumb">
                            <LinkBreadcrumbs underline="hover" color="inherit" href="/">
                            TADAHA
                            </LinkBreadcrumbs>
                            <Typography color="text.primary">Voucher</Typography>
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
                        <h2 className="voucher__title">voucher các cửa hàng</h2>
                        <div className="voucher__list">
                            <div className="voucher__item">
                                <div className="voucher__store">
                                    <div className="voucher__store-top">
                                        <Link>
                                            <img src={imgStore1} alt="" />
                                            <span>Jinshu Shop voucher</span>
                                        </Link>
                                    </div>
                                    <div className="voucher__store-body">
                                        <img src={imgStore1} alt="" />
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
                                            <img src={imgStore1} alt="" />
                                            <span>Jinshu Shop voucher cac cua hang voucher cac cua hang voucher cac cua hang</span>
                                        </Link>
                                    </div>
                                    <div className="voucher__store-body">
                                        <img src={imgStore1} alt="" />
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
            </div>
        );
    };
}

export default VoucherPage;