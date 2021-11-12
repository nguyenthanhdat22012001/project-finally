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
                    <h2 className="user__title-page">Thong tin tai khoan</h2>
                    <div className="user__info">
                        <div className="user__col-2">
                            <h3 className="user__field">Ho ten</h3>
                            <p className="user__value">Nguyen dat</p>
                        </div>
                        <div className="user__col-2">
                            <h3 className="user__field">So dien thoai</h3>
                            <p className="user__value">012425345</p>
                        </div>
                        <div className="user__col-2">
                            <h3 className="user__field">Dia chi</h3>
                            <p className="user__value">123 bach dang quan binh thanh</p>
                        </div>
                        <div className="user__col-2">
                            <h3 className="user__field">email</h3>
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

