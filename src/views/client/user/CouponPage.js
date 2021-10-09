import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import "./user.scss";
import Header from "../../../components/client/header/Header";
import Footer from "../../../components/client/footer/Footer";
import ScrollToTop from "../../../components/client/header/ScrollToTop";
import Chat from "../../../components/client/chat/Chat";
import Sidebar from "./Sidebar";


class CouponPage extends React.Component {
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
                        <h2 className="user__title">Ma giam gia</h2>
                        <div className="user__coupon">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Kích hoạt</th>
                                        <th>Lượt sử dụng</th>
                                        <th>Mã</th>
                                        <th>Hiệu lực từ</th>
                                        <th>Hiệu lực đến</th>
                                        <th>Giá trị</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="">
                                        <td>  No </td>
                                        <td>  1 </td>
                                        <td>LAZ13209656499038665d62031 </td>
                                        <td> 22/11/18 14:56 </td>
                                        <td> 22/11/19 23:59 </td>
                                        <td> 343.500₫</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="pagin-right">
                                <Stack spacing={2}>
                                    <Pagination count={10} variant="outlined" shape="rounded" />
                                </Stack>
                            </div>
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

export default CouponPage;