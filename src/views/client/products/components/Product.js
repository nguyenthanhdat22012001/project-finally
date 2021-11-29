import React from 'react';
import PropTypes from 'prop-types';
import ButtonAddCart from './ButtonAddCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

import "./Product.scss";
import imageProduct from "assets/images/img1.jpg";
import ProductSkeleton from "./ProductSkeleton";

Product.propTypes = {
    product: PropTypes.object,
}

Product.defaultProps = {
    product: null
}

function Product(props) {
    const { product } = props;
    console.log(product);
    return (
        <div>
            
                <div className="product__box">
                    <div className="product__favorit">
                        <IconButton aria-label="delete" color="error" >
                            <FavoriteBorderIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                    </div>
                    <div className="product__sale">
                        <span className="saleIcon">-40%</span>
                    </div>
                    <div className="product__image">
                        <Link to="/client/product/asd.html">
                            <img src={imageProduct} alt="" />
                        </Link>
                    </div>
                    <div className="product__content">
                        <Link to="/client/product/asd.html">
                            <h3 className="product__title">
                                myth time about fiftytheen! myth time about fiftytheen! fiftytheen! myth time about fiftytheen!
                            </h3>
                        </Link>
                        <div className="product__btn">
                            <ButtonAddCart title="Thêm giỏ hàng" />
                            <ButtonAddCart title="Mua ngay" />
                        </div>
                        <div className="product__buyRating">
                            <span className="product__buy">Đã bán: 1200</span>
                            <span className="product__rating">
                                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    );
}



export default Product;