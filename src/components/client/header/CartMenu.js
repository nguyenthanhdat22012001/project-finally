import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
//helper
import { fCurrencyVN } from 'helper/FormatNumber';
//redux
import { useSelector, useDispatch } from "react-redux";
import { handleDeleteProductCartredux } from "redux/actions/cartAction";

import "./CartMenu.scss";

const baseUrl = '/client';

function CartMenu(props) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.shopping.cart);


    /*************handle delete product in cart**************/
    const handleDeleteProductInCart = (store_id, product_id, attribute_id) => {

        try {
            const newData = {
                store_id: store_id,
                product_id: product_id,
                attribute_id: attribute_id,
            };

            dispatch(handleDeleteProductCartredux(newData));

        } catch (error) {
            console.log('error: ' + error);
        }
    }

    return (
        <IconButton size="large" aria-label="" color="inherit" className="cart-menu__icon">
            <Badge badgeContent={4} color="error" >
                <Link to={`${baseUrl}`}>
                    <ShoppingCartIcon sx={{ color: '#fff', fontSize: '28px' }} />
                </Link>
            </Badge>
            <div className="cart-menu__wrapper">
                <h5 className="cart-menu__title">Bạn hiện có  {cart ? cart.totalQuantity : 0} sản phẩm</h5>
                <div className="cart-menu__list-product">
                    {
                        cart ?
                            [...cart.stores].map(stor => {
                                return [...stor.products].map(prd => {
                                    return [...prd.attributes].map(attribute => {
                                        return (
                                            <div className="cart-menu__item-product">
                                                <div className="cart-menu__col-img">
                                                    <IconButton
                                                        size="small"
                                                        sx={{ mr: 1 }}
                                                        onClick={() => handleDeleteProductInCart(stor.store.id, prd.product.id, attribute.id)}
                                                    >
                                                        <CloseIcon color="disabled" />
                                                    </IconButton>
                                                    <img src={prd.product.img} alt="" />
                                                </div>
                                                <div className="cart-menu__col-text">
                                                    <Link to={`${baseUrl}/product/${prd.product.slug}.html`} className="cart-menu__link">{prd.product.name}</Link>
                                                    <p className="cart-menu__price">{fCurrencyVN((prd.product.price * attribute.quantity))}</p>
                                                    <p style={{ fontSize: '12px', color: 'gray' }}>x  {attribute.name}</p>
                                                    <p className="cart-menu__quanty">Số lượng: {attribute.quantity}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                })
                            })
                            : ''
                    }
                </div>
                <div className="cart-menu__order-total">
                    <span>Tổng tiền</span>
                    <span> {cart ? fCurrencyVN(cart.totalPrice) : fCurrencyVN(0)}</span>
                </div>
                <div className="cart-menu__btn">
                    <Link to={`${baseUrl}/shopping/checkout`} >  <Button variant="contained" color="primary" size="small">Thanh toán</Button></Link>
                </div>
            </div>
        </IconButton>
    )
}

export default CartMenu

