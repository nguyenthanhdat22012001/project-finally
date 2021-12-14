import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonAddCart from './ButtonAddCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { fCurrencyVN, fPercent, PriceSale } from "helper/FormatNumber";
//api 
import productApi from "api/productApi";
//redux
import { useSelector } from "react-redux";
// notify
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from 'helper/notify';

import "./Product.scss";


Product.propTypes = {
    product: PropTypes.object,
}

Product.defaultProps = {
    product: null
}

const baseUrl = '/client/product/';

function Product(props) {
    const { enqueueSnackbar } = useSnackbar();
    const user = useSelector(state => state.auth.user);
    const { product } = props;
    /*******state********/
    const [favorite, setFavorite] = useState(false);

    /************** handle toggle collection product  ***************/
    const handleAddProductUserCollection = async (boolean, product_id) => {

        if (!user) {
            handleNotiDialog(enqueueSnackbar, 'Bạn chưa đăng nhập', 'error');
            return;
        }

        const newData = {
            product_id: product_id,
            user_id: user.id
        }

        try {
            if (boolean) {
                const res = await productApi.collectionProduct(newData);
                if (res.success) {
                    handleNotiDialog(enqueueSnackbar, res.message, 'success');
                    setFavorite(boolean);
                } else {
                    handleNotiDialog(enqueueSnackbar, res.message, 'error');
                }
            }else{
                const res = await productApi.deleteProductUserCollection(newData);
                if (res.success) {
                    handleNotiDialog(enqueueSnackbar, res.message, 'success');
                    setFavorite(boolean);
                } else {
                    handleNotiDialog(enqueueSnackbar, res.message, 'error');
                }
            }
           

        } catch (error) {
            console.log('error: ' + error);
        }
    };

    return (
        <div className="product__box">
            <div className="product__favorit">
                <IconButton
                    aria-label="delete"
                    color={favorite ? "error" : "inherit"}
                    onClick={() => handleAddProductUserCollection(!favorite,product.id)}
                >
                    {
                        favorite ? <FavoriteIcon sx={{ fontSize: 30 }} /> : <FavoriteBorderIcon sx={{ fontSize: 30 }} />
                    } 
                    
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
                            <span>{PriceSale(product.price, product.discount)}</span>
                            <span>{fCurrencyVN(product.price)}</span>
                        </div>
                        :
                        <div className="product__price">
                            <span>{fCurrencyVN(product.price)}</span>
                            <span></span>
                        </div>
                }

                <div className="product__btn">
                    <ButtonAddCart title="Mua ngay" slug={product.slug} />
                </div>
                <div className="product__buyRating">
                    <span className="product__buy">Đã bán: 1200</span>
                    <span className="product__rating">
                        <Rating name="half-rating-read" size="small" defaultValue={5} precision={0.5} readOnly />
                    </span>
                </div>
            </div>
        </div>
    );
}



export default Product;