import React from 'react';
import ButtonAddCart from './ButtonAddCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

import "./Product.scss";


class Product extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // };

    render() {
        return (
            <div className="product__box">
                <div className="product__favorit">
                    <IconButton aria-label="delete" color="error" >
                        <FavoriteBorderIcon sx={{ fontSize: 40 }}/>
                    </IconButton>
                </div>
                <div className="product__sale">
                    <span className="saleIcon">-40%</span>
                </div>
                <div className="product__image">
                <Link to="/product/asd.html">
                    <img src="../assets/img1.jpg" alt="" />
                    </Link>
                </div>
                <div class="product__content">
                     <Link to="/product/asd.html">
                        <h3 class="product__title">
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
        );
    }
}



export default Product;
