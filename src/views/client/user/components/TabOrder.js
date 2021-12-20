import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
//helper
import { formatdateDMY } from "helper/FormatDate";
import { fCurrencyVN } from 'helper/FormatNumber';

import "../user.scss";

const baseUrl = '/client/user/order'

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


TabOrder.propTypes = {
    orders: PropTypes.array
};
TabOrder.defaultProps = {
    orders: null,
};

export default function TabOrder(props) {
    const { orders } = props;
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
                    <Tab label="Đã xác nhận" {...a11yProps(3)} />
                    <Tab label="Đơn hàng đang giao" {...a11yProps(4)} />
                    <Tab label="Đơn hàng đã giao" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div>
                    <ul className="user__order__list">
                        {
                            orders ?
                                [...orders].map(item => {
                                    return (
                                        <Link to={`${baseUrl}/${item.id}`}>
                                            <li className="user__order__item">
                                                <div className="user__order__head">
                                                    <div className="user__order__store">
                                                        Đã đặt hàng ngày {formatdateDMY(item.created_at)}
                                                    </div>
                                                    <div className="user__order__date" style={{ color: `${item.color}` }}>
                                                        {item.name_status} {item.status === 4 ? formatdateDMY(item.updated_at) : ""}
                                                    </div>
                                                </div>
                                                <div className="user__order__body">
                                                    <p> <img src="" alt="" /></p>
                                                    <p>Địa chỉ: <span className="text-trong">{item.address}</span></p>
                                                    <p>Phương thức thanh toán: <span className="text-trong">{item.payment.name}</span></p>
                                                    <p>Qty: <span className="text-trong"> {item.totalQuantity}</span></p>
                                                    <p>tổng tiền: <span className="text-trong"> {fCurrencyVN(item.totalprice)}</span></p>
                                                </div>
                                            </li>
                                        </Link>
                                    );
                                }) : ""
                        }
                    </ul>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div>
                    <ul className="user__order__list">
                        {
                            orders ?
                                [...orders].map(item => {
                                    if (item.status === 0) {
                                        return (
                                            <Link to={`${baseUrl}/${item.id}`}>
                                                <li className="user__order__item">
                                                    <div className="user__order__head">
                                                        <div className="user__order__store">
                                                            Đã đặt hàng ngày {formatdateDMY(item.created_at)}
                                                        </div>
                                                        <div className="user__order__date" style={{ color: `${item.color}` }}>
                                                            {item.name_status} {item.status === 4 ? formatdateDMY(item.updated_at) : ""}
                                                        </div>
                                                    </div>
                                                    <div className="user__order__body">
                                                        <p> <img src="" alt="" /></p>
                                                        <p>Địa chỉ: <span className="text-trong">{item.address}</span></p>
                                                        <p>Phương thức thanh toán: <span className="text-trong">{item.payment.name}</span></p>
                                                        <p>Qty: <span className="text-trong"> {item.totalQuantity}</span></p>
                                                        <p>tổng tiền: <span className="text-trong"> {fCurrencyVN(item.totalprice)}</span></p>
                                                    </div>
                                                </li>
                                            </Link>
                                        );
                                    }
                                }) : ""
                        }
                    </ul>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                {
                    orders ?
                        [...orders].map(item => {
                            if (item.status === 1) {
                                return (
                                    <Link to={`${baseUrl}/${item.id}`}>
                                        <li className="user__order__item">
                                            <div className="user__order__head">
                                                <div className="user__order__store">
                                                    Đã đặt hàng ngày {formatdateDMY(item.created_at)}
                                                </div>
                                                <div className="user__order__date" style={{ color: `${item.color}` }}>
                                                    {item.name_status} {item.status === 4 ? formatdateDMY(item.updated_at) : ""}
                                                </div>
                                            </div>
                                            <div className="user__order__body">
                                                <p> <img src="" alt="" /></p>
                                                <p>Địa chỉ: <span className="text-trong">{item.address}</span></p>
                                                <p>Phương thức thanh toán: <span className="text-trong">{item.payment.name}</span></p>
                                                <p>Qty: <span className="text-trong"> {item.totalQuantity}</span></p>
                                                <p>tổng tiền: <span className="text-trong"> {fCurrencyVN(item.totalprice)}</span></p>
                                            </div>
                                        </li>
                                    </Link>
                                );
                            }
                        }) : ""
                }
            </TabPanel>
            <TabPanel value={value} index={3}>
                {
                    orders ?
                        [...orders].map(item => {
                            if (item.status === 2) {
                                return (
                                    <Link to={`${baseUrl}/${item.id}`}>
                                        <li className="user__order__item">
                                            <div className="user__order__head">
                                                <div className="user__order__store">
                                                    Đã đặt hàng ngày {formatdateDMY(item.created_at)}
                                                </div>
                                                <div className="user__order__date" style={{ color: `${item.color}` }}>
                                                    {item.name_status} {item.status === 4 ? formatdateDMY(item.updated_at) : ""}
                                                </div>
                                            </div>
                                            <div className="user__order__body">
                                                <p> <img src="" alt="" /></p>
                                                <p>Địa chỉ: <span className="text-trong">{item.address}</span></p>
                                                <p>Phương thức thanh toán: <span className="text-trong">{item.payment.name}</span></p>
                                                <p>Qty: <span className="text-trong"> {item.totalQuantity}</span></p>
                                                <p>tổng tiền: <span className="text-trong"> {fCurrencyVN(item.totalprice)}</span></p>
                                            </div>
                                        </li>
                                    </Link>
                                );
                            }
                        }) : ""
                }
            </TabPanel>
            <TabPanel value={value} index={4}>
                {
                    orders ?
                        [...orders].map(item => {
                            if (item.status === 3) {
                                return (
                                    <Link to={`${baseUrl}/${item.id}`}>
                                        <li className="user__order__item">
                                            <div className="user__order__head">
                                                <div className="user__order__store">
                                                    Đã đặt hàng ngày {formatdateDMY(item.created_at)}
                                                </div>
                                                <div className="user__order__date" style={{ color: `${item.color}` }}>
                                                    {item.name_status} {item.status === 4 ? formatdateDMY(item.updated_at) : ""}
                                                </div>
                                            </div>
                                            <div className="user__order__body">
                                                <p> <img src="" alt="" /></p>
                                                <p>Địa chỉ: <span className="text-trong">{item.address}</span></p>
                                                <p>Phương thức thanh toán: <span className="text-trong">{item.payment.name}</span></p>
                                                <p>Qty: <span className="text-trong"> {item.totalQuantity}</span></p>
                                                <p>tổng tiền: <span className="text-trong"> {fCurrencyVN(item.totalprice)}</span></p>
                                            </div>
                                        </li>
                                    </Link>
                                );
                            }
                        }) : ""
                }
            </TabPanel>
            <TabPanel value={value} index={4}>
                {
                    orders ?
                        [...orders].map(item => {
                            if (item.status === 4) {
                                return (
                                    <Link to={`${baseUrl}/${item.id}`}>
                                        <li className="user__order__item">
                                            <div className="user__order__head">
                                                <div className="user__order__store">
                                                    Đã đặt hàng ngày {formatdateDMY(item.created_at)}
                                                </div>
                                                <div className="user__order__date" style={{ color: `${item.color}` }}>
                                                    {item.name_status} {item.status === 4 ? formatdateDMY(item.updated_at) : ""}
                                                </div>
                                            </div>
                                            <div className="user__order__body">
                                                <p> <img src="" alt="" /></p>
                                                <p>Địa chỉ: <span className="text-trong">{item.address}</span></p>
                                                <p>Phương thức thanh toán: <span className="text-trong">{item.payment.name}</span></p>
                                                <p>Qty: <span className="text-trong"> {item.totalQuantity}</span></p>
                                                <p>tổng tiền: <span className="text-trong"> {fCurrencyVN(item.totalprice)}</span></p>
                                            </div>
                                        </li>
                                    </Link>
                                );
                            }
                        }) : ""
                }
            </TabPanel>
        </Box>
    );
}
