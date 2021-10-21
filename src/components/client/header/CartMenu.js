import React from 'react';
// import PropTypes from 'prop-types';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import "./CartMenu.scss";

function CartMenu(props) {
    return (
        <IconButton size="large" aria-label="" color="inherit" className="cart-menu__icon">
        <Badge badgeContent={4} color="error" >
            <Link to="/cart">
                <ShoppingCartIcon sx={{ color: '#fff', fontSize: '28px' }} />
            </Link>
        </Badge>
        <div className="cart-menu__wrapper">
            <h5 className="cart-menu__title">Ban hien co 5 san pham</h5>
            <div className="cart-menu__list-product">
                <div className="cart-menu__item-product">
                    <div className="cart-menu__col-img">
                        <IconButton
                            size="small"
                            sx={{ mr: 1 }}
                        >
                            <CloseIcon color="disabled" />
                        </IconButton>
                        <img src="../assets/img1.jpg" alt="" />
                    </div>
                    <div className="cart-menu__col-text">
                        <Link to="/as.html" className="cart-menu__link">Đầm body cá tình với nhiều màu sắc hiện đại, trẻ trung</Link>
                        <p className="cart-menu__price">400.000₫</p>
                        <p className="cart-menu__quanty">Số lượng: 1</p>
                    </div>
                </div>
            </div>
            <div className="cart-menu__order-total">
                <span>Tổng tiền</span>
                <span>400.000₫</span>
            </div>
            <div className="cart-menu__btn">
                <Link to="/checkout" >  <Button variant="contained" color="primary" size="small">Thanh toan</Button></Link>
            </div>
        </div>
    </IconButton>
    )
}

// CartMenu.propTypes = {

// }

export default CartMenu

