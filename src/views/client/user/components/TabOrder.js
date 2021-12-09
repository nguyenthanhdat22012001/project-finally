import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

import "../user.scss";

const baseUrl = '/user/order'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Tất cả" {...a11yProps(0)} />
                    <Tab label="Đơn hàng đã hủy" {...a11yProps(1)} />
                    <Tab label="Chờ xác nhận" {...a11yProps(2)} />
                    <Tab label="Đơn hàng đang giao" {...a11yProps(3)} />
                    <Tab label="Đơn hàng đã giao" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div>
                    <ul className="user__order__list">
                        <Link to={`${baseUrl}/1`}>
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
                                    <p>Dia chi: <span className="text-trong">215 cộng hòa p24 quận bình thạnh, TP.HCM</span></p>
                                    <p>Phương thức thanh toán: <span className="text-trong"> thanh toán sau khi nhận hàng</span></p>
                                    <p>Qty: <span className="text-trong"> 2</span></p>
                                    <p>tổng tiền: <span className="text-trong"> 200.000đ</span></p>
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>
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
                                <p className="user__order__title-product">1kg Thập cẩm sấy 100% thành phần thiên nhiên, thơm ngọt, không hóa chất, phẩm màu, đảm bảo vệ sinh an thơm ngọt, không hóa chất, phẩm màu, đảm bảo vệ sinh an</p>
                                <p>₫ 37.000</p>
                                <p>Qty: <span className="text-trong"> 2</span></p>
                            </div>
                            <div className="user__order__body">
                                <p> <img src="../assets/img1.jpg" alt="" /></p>
                                <p className="user__order__title-product">1kg Thập cẩm sấy 100% thành phần thiên nhiên, thơm ngọt, không hóa chất, phẩm màu, đảm bảo vệ sinh an thơm ngọt, không hóa chất, phẩm màu, đảm bảo vệ sinh an</p>
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
                                        <span>74.000 ₫</span>
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
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three2
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Three3
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Three4
            </TabPanel>
        </Box>
    );
}
