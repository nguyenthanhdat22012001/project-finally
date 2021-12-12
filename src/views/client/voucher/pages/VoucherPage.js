import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
//redux
import { useSelector } from "react-redux";
//api 
import couponApi from "api/couponApi";
// notify
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from 'helper/notify';
import { fCurrencyVN } from "helper/FormatNumber";
import { formatdateDMY } from "helper/FormatDate";

import "./VoucherPage.scss";
import ProccessDialog from "components/dialog/ProccessDialog";

function VoucherPage() {
    const user = useSelector(state => state.auth.user);
    const { enqueueSnackbar } = useSnackbar();
    /*******state********/
    const [coupons, setCoupon] = useState([]);
    const [isProccess, setIsProccess] = useState(false);

    useEffect(async () => {
        await getAllCoupon();
    }, [])
    /******* get all coupon********/
    const getAllCoupon = async () => {
        try {
            const res = await couponApi.getCouponAll();
            if (res.success) {
                setCoupon(res.data);

            }
            console.log('res', res)
        } catch (error) {
            console.log('error', error);
        }
    }

    /************** handle add coupon ***************/
    const handleAddCouponUserCollection = async (coupon_id) => {
        if (!user) {
            handleNotiDialog(enqueueSnackbar, 'Bạn chưa đăng nhập', 'error');
            return;
        }
        const newData = {
            coupon_id: coupon_id,
            user_id: user.id
        }
        try {
            setIsProccess(true);

            const res = await couponApi.collectionCoupon(newData);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }
            setIsProccess(false);

        } catch (error) {
            console.log('error: ' + error);
        }
    };

    return (
        <div>
            {isProccess && <ProccessDialog />} {/* proccess page */}
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <LinkBreadcrumbs underline="hover" color="inherit" href="/">
                        TADAHA
                    </LinkBreadcrumbs>
                    <Typography color="text.primary">Voucher</Typography>
                </Breadcrumbs>
            </div>
            <div className="wrapper_inner voucher">
                <h2 className="voucher__title">voucher TADAHA</h2>
                <div className="voucher__list">
                    {
                        [...coupons].length > 0 ?
                            [...coupons].map(item => {
                                if (item.store_id === null) {
                                    return (
                                        <div key={item.id} className="voucher__item">
                                            <div className="voucher__system">
                                                <div className="voucher__system-title">
                                                    {item.name}
                                                </div>
                                                <div className="voucher__system-content">
                                                    <div className="voucher__system-price">
                                                        <span>{fCurrencyVN(item.price)}</span>
                                                    </div>
                                                    <div className="voucher__system-desc">
                                                        Đơn hàng từ {fCurrencyVN(item.condition)}
                                                    </div>
                                                    <div className="voucher__system-expired">
                                                        Áp dụng: {formatdateDMY(item.date_begin)} - {formatdateDMY(item.date_end)}
                                                    </div>
                                                    <div
                                                        className="voucher__system-btn"
                                                        onClick={() => handleAddCouponUserCollection(item.id)}
                                                    >
                                                        Thu Thập
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                            : ""
                    }

                </div>
                <h2 className="voucher__title">voucher các cửa hàng</h2>
                <div className="voucher__list">
                    {
                        [...coupons].length > 0 ?
                            [...coupons].map(item => {
                                if (item.store_id !== null) {
                                    return (
                                        <div key={item.id} className="voucher__item">
                                            <div className="voucher__store">
                                                <div className="voucher__store-top">
                                                    <Link to={`/client/product/store/${item.store.slug}`}>
                                                        <img src={item.store.img} alt="" />
                                                        <span>{item.store.name}</span>
                                                    </Link>
                                                </div>
                                                <div className="voucher__store-body">
                                                    <img src={item.store.img} alt="" />
                                                    <div className="flexBoxColunm">
                                                        <div className="voucher__store-price">
                                                            <span>{fCurrencyVN(item.price)}</span>
                                                            {/* <span>₫</span> */}
                                                        </div>
                                                        <div className="voucher__store-condition">
                                                            Đơn hàng từ  {fCurrencyVN(item.condition)}
                                                        </div>
                                                    </div>
                                                    <div 
                                                    className="voucher__store-button"
                                                    onClick={() => handleAddCouponUserCollection(item.id)}
                                                    >
                                                        Thu Thập
                                                    </div>
                                                </div>
                                                <div className="voucher__store-bottom">
                                                    Áp dụng: {formatdateDMY(item.date_begin)} - {formatdateDMY(item.date_end)}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                            : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default VoucherPage;