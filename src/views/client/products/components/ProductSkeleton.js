import React from 'react';
import Skeleton from '@mui/material/Skeleton';

import "./Product.scss";

function ProductSkeleton() {
    return (
        <div className="product__box">
            <div className="product__image">
                <Skeleton height={300} />
            </div>
            <div className="product__content">
                <Skeleton variant="h1" width={'100%'} />
                <div className="product__btn">
                    <Skeleton variant="body1" width={'100%'} />
                </div>
                <div className="product__buyRating">
                    <Skeleton variant="text"  width={'100%'} />
                </div>
            </div>
        </div>
    );
}



export default ProductSkeleton;