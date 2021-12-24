import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
//helper
import {fCurrencyVN,PriceSale} from "helper/FormatNumber"

import "./Product2.scss";

const baseUrl = '/client/product/';

Product2.propTypes = {
    product: PropTypes.object,
}

Product2.defaultProps = {
    product: null
}

function Product2(props) {
    const { product } = props;

    return (
        <div className="product2 flexBoxColunm">
            <Link to={`${baseUrl + product.slug}.html`}>
                <div className="product2__image">
                    <img src={product ? product.img : ''} alt="" />
                </div>
                <div className="product2__content">
                    <h3 className="product2__title" >{product ? product.name : ''}</h3>
                    {
                           product.discount > 0 ? 
                           <div className="product2__price">{PriceSale(product.price, product.discount)} </div>
                           :
                           <div className="product2__price">{fCurrencyVN(product.price)} </div>
                    }
               
                    <div className="product2__rating">
                        <Rating name="half-rating-read" defaultValue={product ? product.totalRating : 0} precision={1} size="small" readOnly />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Product2;