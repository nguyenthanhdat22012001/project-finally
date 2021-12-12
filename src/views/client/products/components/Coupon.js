import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
//helper
import { fCurrencyVN } from "helper/FormatNumber";
import { formatdateDMY } from "helper/FormatDate";

Coupon.propTypes = {
    coupon: PropTypes.object,
    handleAddCouponUserCollection: PropTypes.func,
}
Coupon.defaultProps = {
    coupon: {},
    handleAddCouponUserCollection: null,
}


function Coupon(props) {
    const { coupon, handleAddCouponUserCollection } = props;
    /*******state**** */
    const [showDescCoupon, setShowDescCoupon] = useState();

    /*************handle toggle coupon**************/
    const handleToggleDescCoupon = () => {
        setShowDescCoupon(!showDescCoupon)
    }

    return (
        <div onClick={handleToggleDescCoupon}>
            <div className="product__detail__infor__tag-coupon" >
                <div
                    className="product__detail__infor__tag-coupon-name product__detail__infor__tag-coupon-has-desc"
                >
                    {coupon.name}
                </div>
                <div className={showDescCoupon ? "product__detail__infor__tag-coupon-desc action-coupon" : "product__detail__infor__tag-coupon-desc"}>
                    <div className="backgroundColor-white">
                        <h5>{coupon.name}</h5>
                        <p>Giảm: <span>{fCurrencyVN(coupon.price)}</span> tổng đơn hàng </p>
                        <p>Áp dụng cho đơn hàng từ: <span>{fCurrencyVN(coupon.condition)}</span></p>
                        <Grid sx={{ padding: "0 5px" }} container justifyContent="space-between" alignItems="center">
                            <span style={{ color: "gray", fontSize: '10px' }}>HSD: {formatdateDMY(coupon.date_begin)} - {formatdateDMY(coupon.date_end)}</span>
                            <Button
                                size='small'
                                sx={{ color: 'orangered' }}
                                onClick={() => handleAddCouponUserCollection(coupon.id)}
                            >Sưu tập</Button>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Coupon

