import React from 'react';
import Button from '@mui/material/Button';
import { Link, useRouteMatch } from "react-router-dom";

import "../user.scss";
import Sidebar from "../components/Sidebar";


function InfoPage(props) {
    const match = useRouteMatch();

    return (
        <div className="wrapper_inner">
            <div className="user__wrapper">
                <div className="user__col-left">
                    <Sidebar />
                </div>
                <div className="user__col-right">
                    <h2 className="user__title-page">Thông tin tài khoản</h2>
                    <div className="user__info">
                        <div className="user__col-2">
                            <h3 className="user__field">Họ tên</h3>
                            <p className="user__value">Nguyễn đạt</p>
                        </div>
                        <div className="user__col-2">
                            <h3 className="user__field">Số điện thoại</h3>
                            <p className="user__value">012425345</p>
                        </div>
                        <div className="user__col-2">
                            <h3 className="user__field">Địa chỉ</h3>
                            <p className="user__value">123 bạch đằng quận Bình thạnh, TP.HCM</p>
                        </div>
                        <div className="user__col-2">
                            <h3 className="user__field">Email</h3>
                            <p className="user__value">Nguyendat@gmail.com</p>
                        </div>
                        <div className="group-btn-cart mt-5rem">
                            <Link to={`${match.url}/edit-info`}>
                                <Button variant="contained" color="secondary" size="small" sx={{ marginRight: 1 }}>Chỉnh sửa thông tin</Button>
                            </Link>
                            <Link to={`${match.url}/change-password`}>
                                <Button variant="contained" color="primary" size="small" sx={{ marginRight: 1 }}>Đổi mật khẩu</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default InfoPage

