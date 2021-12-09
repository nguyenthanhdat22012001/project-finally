import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import "../user.scss";
import Sidebar from "../components/Sidebar";


class CouponPage extends React.Component {
    render() {
        return (
            <div className="wrapper_inner">
                <div className="user__wrapper">
                    <div className="user__col-left">
                        <Sidebar />
                    </div>
                    <div className="user__col-right">
                        <h2 className="user__title-page">Mã giảm giá</h2>
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
                                        <td>LAZ13238665d62031 </td>
                                        <td> 22/11/18 14:56 </td>
                                        <td> 22/11/19 23:59 </td>
                                        <td> 143.500₫</td>
                                    </tr>
                                    <tr class="">
                                        <td>  No </td>
                                        <td>  2 </td>
                                        <td>LAZ1499038665d62031 </td>
                                        <td> 22/11/18 14:56 </td>
                                        <td> 22/11/19 23:59 </td>
                                        <td> 543.500₫</td>
                                    </tr>
                                    <tr class="">
                                        <td>  No </td>
                                        <td>  3 </td>
                                        <td>LAZ132038665d62031 </td>
                                        <td> 22/11/18 14:56 </td>
                                        <td> 22/11/19 23:59 </td>
                                        <td> 443.500₫</td>
                                    </tr>
                                    <tr class="">
                                        <td>  No </td>
                                        <td>  4 </td>
                                        <td>LAZ1320965649903866 </td>
                                        <td> 22/11/18 14:56 </td>
                                        <td> 22/11/19 23:59 </td>
                                        <td> 63.500₫</td>
                                    </tr>
                                    <tr class="">
                                        <td>  No </td>
                                        <td>  5 </td>
                                        <td>LAZ13209656499038665d620 </td>
                                        <td> 22/11/18 14:56 </td>
                                        <td> 22/11/19 23:59 </td>
                                        <td> 33.500₫</td>
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
        )
    }
}

export default CouponPage;