import React, { useState } from 'react';
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
//helper
import { fCurrencyVN, PriceSale, fPercent } from "helper/FormatNumber";

import "../user.scss";
import ConfirmDialog from 'components/dialog/ConfirmDialog';
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

BasicTabs.propTypes = {
    handleRemoveProductUserCollection: PropTypes.func,
    productFavorite: PropTypes.array,
    storeFollow: PropTypes.array,
};

BasicTabs.defaultProps = {
    productFavorite: [],
    storeFollow: [],
};

const baseUrl = '/client/product/';

export default function BasicTabs(props) {
    const { productFavorite, storeFollow, handleRemoveProductUserCollection } = props;
    /********state***********/
    const [dialogDelete, setDialogDelete] = useState({ openDialog: false, message: '', isDelete: false, idDelete: null });
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    /************** handle report delete dialogDelete ***************/
    const hanldeReportDeleteDialog = (openDialog, message = '', id = null) => {
        setDialogDelete({ ...dialogDelete, openDialog: openDialog, message: message, idDelete: id });
    }
    /************** handle accept delete dialogDelete ***************/
    const hanldeAcceptDelete = () => {
        hanldeReportDeleteDialog(false);
        handleRemoveProductUserCollection(dialogDelete.idDelete);
    }

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
                        {
                            [...productFavorite].length > 0 ?
                                [...productFavorite].map(item => {
                                    return (
                                        <div className="user__favorite-item">
                                            <Link to={`${baseUrl + item.product.slug}.html`}>
                                                <img className="user__favorite-img" src={item.product.img} alt="" />
                                            </Link>
                                            <div className="user__favorite-info">
                                                <Link to={`${baseUrl + item.product.slug}.html`}>
                                                    <h3>{item.product.name}</h3>
                                                </Link>
                                                <IconButton
                                                    aria-label="delete"
                                                    size="small"
                                                    onClick={() => hanldeReportDeleteDialog(true, `Bạn có chắc muốn xóa "${item.product.name}" ra khỏi danh mục yêu thích ?`, item.product.id)}
                                                >
                                                    <DeleteIcon color="disabled" />
                                                </IconButton>
                                            </div>
                                            {
                                                item.product.discount > 0 ?
                                                    <div className="user__favorite-price flexBoxColunm">
                                                        <div className="user__favorite-priceCur">
                                                            {PriceSale(item.product.price, item.product.discount)}
                                                        </div>
                                                        <div className="user__favorite-priceOr">
                                                            <span>{fCurrencyVN(item.product.price)}</span>
                                                            <span>{fPercent(item.product.discount)}</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="user__favorite-price flexBoxColunm">
                                                        <div className="user__favorite-priceCur">
                                                            {fCurrencyVN(item.product.price)}
                                                        </div>
                                                    </div>
                                            }
                                            <div className="user__favorite-addcart">
                                                <Button sx={{ color: '#f57224' }} size="small">
                                                    <AddShoppingCartIcon />
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                })
                                : ""
                        }

                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h2 className="user__title">Gian hàng đang theo dõi</h2>
                    <div className="user__follow">
                        {
                            [...storeFollow].length > 0 ?
                                [...storeFollow].map(item => {
                                    return (
                                        <div className="user__follow-item">
                                            <div className="user__follow-left">
                                                <img className="user__follow-img" src={item.store.img} alt="" />
                                                <div className="user__follow-title">
                                                    {item.store.name}
                                                </div>
                                            </div>
                                            <div className="user__follow-right">
                                                <span>ĐANG THEO DÕI</span>
                                                <span>|</span>
                                                <Link to={`${baseUrl}store/${item.store.slug}`}>
                                                    <span style={{ color: '#1a9cb7' }}>THAM QUAN</span>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })
                                : ""
                        }
                    </div>
                </TabPanel>
            </Box>
            {/* dialogDelete delete */}
            <ConfirmDialog
                dialogDelete={dialogDelete}
                hanldeReportDeleteDialog={hanldeReportDeleteDialog}
                hanldeAcceptDelete={hanldeAcceptDelete}
            />
        </div>
    );
}
