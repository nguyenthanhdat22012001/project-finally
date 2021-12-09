import React from 'react';
import PropTypes from 'prop-types';
import ButtonAddCart from './ButtonAddCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { fCurrencyVN, fPercent, PriceSale } from "helper/FormatNumber";

import "./Product.scss";
import ProductSkeleton from "./ProductSkeleton";

Product.propTypes = {
    product: PropTypes.object,
}

Product.defaultProps = {
    product: null
}

const baseUrl = '/client/product/';

function Product(props) {
    const { product } = props;

    return (
        <Link to={`${baseUrl + product.slug}.html`}>
            <div className="product__box">
                <div className="product__favorit">
                    <IconButton aria-label="delete" color="error" >
                        <FavoriteBorderIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                </div>
                {
                    product.discount > 0 ?

                        <div className="product__sale">
                            <span className="saleIcon">{fPercent(product.discount)}</span>
                        </div>
                        :
                        ""
                }
                <div className="product__image">
                    <Link to={`${baseUrl + product.slug}.html`}>
                        <img src={product.img} alt="" />
                    </Link>
                </div>
                <div className="product__content">
                    <Link to={`${baseUrl + product.slug}.html`}>
                        <h3 className="product__title">
                            {product.name}
                        </h3>
                    </Link>

                    {
                        product.discount > 0 ?
                            <div className="product__price">
                                <span>{PriceSale(product.price,product.discount)}</span>
                                <span>{fCurrencyVN(product.price)}</span>
                            </div>
                            :
                            <div className="product__price">
                                <span>{fCurrencyVN(product.price)}</span>
                                <span></span>
                            </div>
                    }

                    <div className="product__btn">
                        <ButtonAddCart title="Mua ngay" />
                    </div>
                    <div className="product__buyRating">
                        <span className="product__buy">Đã bán: 1200</span>
                        <span className="product__rating">
                            <Rating name="half-rating-read" size="small" defaultValue={5} precision={0.5} readOnly />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}



export default Product;