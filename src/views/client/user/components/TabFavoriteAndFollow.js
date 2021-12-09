import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
 import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';

import "../user.scss";
import store1 from 'assets/images/store-1.jpg';
import store2 from 'assets/images/store-2.jpg';

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
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Danh sách yêu thích" {...a11yProps(0)} />
                        <Tab label="Gian hàng đang theo dõi" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <h2 className="user__title">Danh sách yêu thích</h2>
                    <div className="user__favorite">
                        <div className="user__favorite-item">
                            <img className="user__favorite-img" src={store1} alt="" />
                            <div className="user__favorite-info">
                                <h3>MÁ ĐÙI GÀ TƯƠI 3F 1KG [Giao nội thành HCM và Hà Nội]</h3>
                                <IconButton aria-label="delete" size="small"  >
                                    <DeleteIcon color="disabled" />
                                </IconButton>
                            </div>
                            <div className="user__favorite-price flexBoxColunm">
                                <div className="user__favorite-priceCur">
                                    ₫ 90.000
                                </div>
                                <div className="user__favorite-priceOr">
                                    <span>₫ 104.000</span>
                                    <span>13%</span>
                                </div>
                            </div>
                            <div className="user__favorite-addcart">
                                <Button sx={{ color: '#f57224' }} size="small">
                                    <AddShoppingCartIcon />
                                </Button>
                            </div>
                        </div>
                        <div className="user__favorite-item">
                            <img className="user__favorite-img" src={store2} alt="" />
                            <div className="user__favorite-info">
                                <h3>MÁ ĐÙI GÀ TƯƠI 3F 1KG [Giao nội thành HCM và Hà Nội]</h3>
                                <IconButton aria-label="delete" size="small"  >
                                    <DeleteIcon color="disabled" />
                                </IconButton>
                            </div>
                            <div className="user__favorite-price flexBoxColunm">
                                <div className="user__favorite-priceCur">
                                    ₫ 90.000
                                </div>
                                <div className="user__favorite-priceOr">
                                    <span>₫ 104.000</span>
                                    <span>13%</span>
                                </div>
                            </div>
                            <div className="user__favorite-addcart">
                                <Button sx={{ color: '#f57224' }} size="small">
                                    <AddShoppingCartIcon />
                                </Button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h2 className="user__title">Gian hàng đang theo dõi</h2>
                    <div className="user__follow">
                        <div className="user__follow-item">
                            <div className="user__follow-left">
                                <img className="user__follow-img" src={store1} alt="" />
                                <div className="user__follow-title">
                                    Gà Ngon 3F
                                </div>
                            </div>
                            <div className="user__follow-right">
                                <Link> <span>ĐANG THEO DÕI</span> </Link>
                                <span>|</span>
                                <Link> <span style={{color:'#1a9cb7'}}>THAM QUAN</span> </Link>
                            </div>
                        </div>
                        <div className="user__follow-item">
                            <div className="user__follow-left">
                                <img className="user__follow-img" src={store2} alt="" />
                                <div className="user__follow-title">
                                    Gà Ngon 3F
                                </div>
                            </div>
                            <div className="user__follow-right">
                                <Link> <span>ĐANG THEO DÕI</span> </Link>
                                <span>|</span>
                                <Link> <span style={{color:'#1a9cb7'}}>THAM QUAN</span> </Link>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
}
