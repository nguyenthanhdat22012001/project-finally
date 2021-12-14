import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import StorefrontIcon from '@mui/icons-material/Storefront';
//redux
import { useSelector, useDispatch } from "react-redux";
import { handleDeleteProductCartredux, handleUpdateQuantityCartredux } from "redux/actions/cartAction";
//helper
import { fCurrencyVN } from 'helper/FormatNumber';

import "./CartPage.scss";
import Stepper from "../components/Stepper";
import InputQuantity from "../components/InputQuantity";

const baseUrl = '/client';

function CartPage() {
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

  /*************handle update quantity product in cart**************/
  const handleUpdateQuantityProductInCart = (store_id, product_id, attribute_id, quantity) => {
    console.log(store_id, product_id, attribute_id, quantity);
    try {
      dispatch(handleUpdateQuantityCartredux(store_id, product_id, attribute_id, quantity))

    } catch (error) {
      console.log('error: ' + error);
    }
  }

  return (
    <div>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/client">
            TADAHA
          </Link>
          <Typography color="text.primary">Giỏ hàng</Typography>
        </Breadcrumbs>
      </div>
      <div className="row wrapper_inner">
        <Stepper stepCart={0} />
        <div className="cart">
          <div className="cart__info table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  cart ?
                    [...cart.stores].map(stor => {
                      return (
                        <tr key={stor.store.id}>
                          <td colspan="6">
                            <div className=" cart__store">
                              <td colspan="6">
                                <Link to={`${baseUrl}/product/store/${stor.store.slug}`}>
                                  <StorefrontIcon />
                                  <span>{stor.store.name}</span>
                                </Link>
                              </td>
                            </div>
                            {
                              [...stor.products].map(prd => {
                                return [...prd.attributes].map(attribute => {
                                  return (<div className="cart__product-item">
                                    <td className="cart__product__image">
                                      <Link to={`${baseUrl}/product/${prd.product.slug}.html`}>
                                        <img className="img-responsive" src={prd.product.img} alt="" />
                                      </Link>
                                    </td>
                                    <td className="cart__product__desc">
                                      <Link to={`${baseUrl}/product/${prd.product.slug}.html`} className="ng-binding">{prd.product.name}</Link>
                                      <span >{attribute.name}</span>
                                    </td>
                                    <td className="cart__product__price"> {fCurrencyVN(prd.product.price)}</td>
                                    <td className="cart__product__quanty">
                                      <InputQuantity
                                        store_id={stor.store.id}
                                        product_id={prd.product.id}
                                        attribute_id={attribute.id}
                                        quantity={attribute.quantity}
                                        maxQuantity={attribute.maxQuantity}
                                        handleUpdateQuantityProductInCart={handleUpdateQuantityProductInCart}
                                      />
                                    </td>
                                    <td className="cart__product__amount">
                                      {
                                        fCurrencyVN((prd.product.price * attribute.quantity))
                                      }
                                    </td>
                                    <td className="cart__product__delete">
                                      <IconButton
                                        aria-label="delete"
                                        size="small"
                                        onClick={() => handleDeleteProductInCart(stor.store.id, prd.product.id, attribute.id)}
                                      >
                                        <DeleteIcon color="disabled" />
                                      </IconButton>
                                    </td>
                                  </div>)
                                })
                              })
                            }
                          </td>
                        </tr>
                      )
                    })
                    : ''
                }

              </tbody>
            </table>
          </div>
          <div className="cart__total-price">
            <span>Tổng thanh toán:</span>
            <span className="pay-price">
              {cart ? fCurrencyVN(cart.totalPrice) : fCurrencyVN(0)}
            </span>
          </div>
          <div className="" style={{ textAlign: 'right' }}>
            <Link to={`${baseUrl}/product`}> <Button variant="contained" color="secondary" size="large" sx={{ marginRight: 1 }}>Tiếp tục mua hàng</Button> </Link>
            <Link to={`${baseUrl}/shopping/checkout`}>  <Button variant="contained" color="primary" size="large">Thanh toán</Button></Link>
          </div>
        </div>
      </div>
    </div >
  )

}

export default CartPage;