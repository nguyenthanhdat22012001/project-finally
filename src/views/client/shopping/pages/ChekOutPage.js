import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkBreadcrumbs from '@mui/material/Link';
import StorefrontIcon from '@mui/icons-material/Storefront';
// notify
import { useSnackbar } from 'notistack';
//redux
import { useSelector, useDispatch } from "react-redux";
import { handleUseCouponStoreRedux, handleUseCouponSystemRedux, handlePaymentRedux,handleClearCartRedux } from "redux/actions/cartAction";
//api 
import couponApi from "api/couponApi";
import paymentApi from "api/paymentApi";
import shoppingApi from "api/shoppingApi";
//helper
import { fCurrencyVN } from 'helper/FormatNumber';
import { handleNotiDialog } from 'helper/notify';
import { scrollToTop } from 'helper/notify';
//validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkOutSchema } from "validates/clientValidate";

import "./ChekOutPage.scss";
import Stepper from "../components/Stepper";
import DialogCheckout from "../components/DialogCheckout";
import ProccessDialog from "components/dialog/ProccessDialog";

function ChekOutPage() {
    const user = useSelector(state => state.auth.user);
    const cart = useSelector(state => state.shopping.cart);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    /******state*******/
    const [isProccess, setIsProccess] = useState(false);
    const [openDialogChekout, setOpenDialogChekout] = useState(false);
    const [order, setOrder] = useState(null);
    const [coupons, setCoupon] = useState([]);
    const [payments, setPayment] = useState([]);

    //validate
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(checkOutSchema) });

    useEffect(async () => {
        Promise.all([getCouponUserCollection(), getMethodPayment()]);
        scrollToTop()
    }, [])
    /******* get all coupon user collecttion********/
    const getCouponUserCollection = async () => {
        try {
            const res = await couponApi.getCouponUserCollection(user.id);
            if (res.success) {
                setCoupon(res.data);
            }

        } catch (error) {
            console.log('error', error);
        }
    }
    /******* get all method payment********/
    const getMethodPayment = async () => {
        try {
            const res = await paymentApi.getPaymentAll();
            if (res.success) {
                setPayment(res.data);
            }

        } catch (error) {
            console.log('error', error);
        }
    }
    /******* handle condition coupon store********/
    const handleConditioncouponStore = (e) => {
        const target = e.target;
        const store_id = target.name;
        const coupon_id = target.value;

        try {
            const coupon = [...coupons].find(item => item.coupon.id === coupon_id);
            dispatch(handleUseCouponStoreRedux(enqueueSnackbar, store_id, coupon ? coupon.coupon : null));
        } catch (error) {
            console.log('error', error);
        }
    }
    /******* handle condition coupon system********/
    const handleConditioncouponSystem = (e) => {
        const target = e.target;
        const coupon_id = target.value;

        try {
            const coupon = [...coupons].find(item => item.coupon.id === coupon_id);
            dispatch(handleUseCouponSystemRedux(enqueueSnackbar, coupon ? coupon.coupon : null));
        } catch (error) {
            console.log('error', error);
        }
    }
    /******* handle payment********/
    const handlePayment = (e) => {
        const target = e.target;
        const payment_id = target.value;

        try {
            const payment = [...payments].find(item => item.id === payment_id);
            dispatch(handlePaymentRedux(payment ? payment : null));
        } catch (error) {
            console.log('error', error);
        }
    }

    const onLoginSubmit = async (data) => {
        if (!user) {
            handleNotiDialog(enqueueSnackbar, 'Bạn chưa đăng nhập', 'error');
            return;
        }
        setIsProccess(true);
        try {
            const newData = {
                ...data,
                user_id: user.id,
                cart: cart,
            }
            const res = await shoppingApi.checkout(newData);
            if (res.success) {
                dispatch(handleClearCartRedux());
                console.log('res.data',res.data);
                setOrder(res.data);
            }
            setIsProccess(false);
            setOpenDialogChekout(true);
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onLoginSubmit)}
        >
            {isProccess && <ProccessDialog />} {/* proccess page */}
            <DialogCheckout
                openDialogChekout={openDialogChekout}
                order={order}
            />
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
                    <LinkBreadcrumbs underline="hover" color="inherit" href="/">
                        TADAHA
                    </LinkBreadcrumbs>
                    <Typography color="text.primary">Thanh Toán</Typography>
                </Breadcrumbs>
            </div>
            <div className="row wrapper_inner">
                <Stepper stepCart={1} />
                <div className="checkout">
                    <div className="checkout__col">
                        <h4 className="checkout__title">1. ĐỊA CHỈ THANH TOÁN VÀ GIAO HÀNG</h4>
                        <div className="checkout__content">
                            <h2 className="checkout__sub-title">Thông tin thanh toán</h2>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <TextField
                                        margin="normal"
                                        label="Họ tên"
                                        variant="outlined"
                                        defaultValue={user.name}
                                        {...register("name")}
                                        helperText={errors.name && `${errors.name?.message}`}
                                        error={errors.name && true}
                                    />
                                    <TextField
                                        margin="normal"
                                        label="số điện thoại"
                                        variant="outlined"
                                        defaultValue={user.phone}
                                        {...register("phone")}
                                        helperText={errors.phone && `${errors.phone?.message}`}
                                        error={errors.phone && true}
                                    />
                                    <TextField
                                        margin="normal"
                                        label="Địa chỉ giao hàng"
                                        variant="outlined"
                                        {...register("address")}
                                        helperText={errors.address && `${errors.address?.message}`}
                                        error={errors.address && true}
                                    />
                                    <TextField
                                        multiline
                                        rows={4}
                                        margin="normal"
                                        label="Ghi chú"
                                        variant="outlined"
                                        {...register("note")}
                                        helperText={errors.note && `${errors.note?.message}`}
                                        error={errors.note && true}
                                    />
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                    <div className="checkout__col">
                        <h4 className="checkout__title">2. THANH TOÁN</h4>
                        <div className="checkout__content">
                            <h2 className="checkout__sub-title">Phương thức thanh toán</h2>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="demo-simple-select-label">Phương thức thanh toán</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        defaultValue={0}
                                        label="Phuong thuc Thanh toan"
                                        {...register("payment_id")}
                                        error={errors.payment_id && true}
                                        onChange={handlePayment}
                                    >
                                        <MenuItem value={0}>Chọn phương thức</MenuItem>
                                        {
                                            [...payments].map(item => {
                                                return (<MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)
                                            })
                                        }

                                    </Select>
                                    {errors.payment_id && <p style={{ color: 'red', fontSize: '12px', marginLeft: '15px' }}>{errors.payment_id?.message}</p>}
                                </FormControl>
                            </Box>
                            <h2 className="checkout__sub-title">Mã giảm giá</h2>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="demo-simple-select-label">Voucher</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        defaultValue={0}
                                        label="Mã giảm giá"
                                        onChange={handleConditioncouponSystem}
                                    >
                                        <MenuItem value={0}>Chọn Voucher</MenuItem>
                                        {
                                            [...coupons].map(item => {
                                                if (item.coupon.store_id === null) {
                                                    return (
                                                        <MenuItem key={item.coupon.id} value={item.coupon.id}>{item.coupon.sku}</MenuItem>
                                                    )
                                                }
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                    <div className="checkout__col">
                        <h4 className="checkout__title">3. THÔNG TIN ĐƠN HÀNG</h4>
                        <div className="checkout__content">
                            <div className="checkout__order-info">
                                {
                                    cart ?
                                        [...cart.stores].map(stor => {
                                            return (
                                                <div key={stor.store.id} className="checkout__order-box">
                                                    <div className="checkout__order-store">
                                                        <StorefrontIcon />
                                                        <span>{stor.store.name}</span>
                                                    </div>
                                                    {
                                                        [...stor.products].map(prd => {
                                                            return [...prd.attributes].map(attribute => {
                                                                return (
                                                                    <div key={attribute.id} className="checkout__order">
                                                                        <div className="checkout__order-img">
                                                                            <img src={prd.product.img} alt="" />
                                                                        </div>
                                                                        <div className="checkout__order-content">
                                                                            <h6 className="checkout__order-name">{prd.product.name}</h6>
                                                                            <div className="checkout__order-bottom">
                                                                                <p className="checkout__order-quanty">
                                                                                    <span>{attribute.name}</span> x <span>{attribute.quantity}</span>
                                                                                </p>
                                                                                <p className="checkout__order-price">
                                                                                    {fCurrencyVN((prd.product.price * attribute.quantity))}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            });
                                                        })
                                                    }
                                                    <Box >
                                                        <FormControl fullWidth margin="normal">
                                                            <InputLabel id="demo-simple-select-label">Voucher</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                defaultValue={0}
                                                                label="Mã giảm giá"
                                                                name={`${stor.store.id}`}
                                                                onChange={handleConditioncouponStore}
                                                            >
                                                                <MenuItem value={0}>Chọn Voucher</MenuItem>
                                                                {
                                                                    [...coupons].map(item => {
                                                                        if (item.coupon.store_id === stor.store.id) {
                                                                            return (<MenuItem key={item.coupon.id} value={item.coupon.id}>{item.coupon.sku}</MenuItem>)
                                                                        }
                                                                    })
                                                                }
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <div className="checkout__payment">
                                                        <span> Thành tiền</span>
                                                        <span className="checkout__used-coupon">{stor.coupon && Object.keys(stor.coupon).length > 0 ? fCurrencyVN(stor.totalPrice + stor.coupon.price) : ''}</span>
                                                        <span> {fCurrencyVN(stor.totalPrice)}</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : ""
                                }

                            </div>

                            <div className="checkout__payment">
                                <span> phí ship</span>
                                <span>{cart ? fCurrencyVN(cart.feeShip) : '0đ'} </span>
                            </div>
                            {
                                cart && cart.coupon ?
                                    <div className="checkout__payment">
                                        <span> {cart.coupon.sku}</span>
                                        <span>- {fCurrencyVN(cart.coupon.price)} </span>
                                    </div>
                                    : ""
                            }
                            <div className="checkout__payment checkout__total-payment">
                                <span> Thanh toán</span>
                                <span className="checkout__used-coupon">{cart && cart.coupon && Object.keys(cart.coupon).length > 0 ? fCurrencyVN(cart.totalPrice + cart.coupon.price) : ''}</span>
                                <span>{cart ? fCurrencyVN(cart.totalPrice) : '0đ'}</span>
                            </div>
                            <div className="checkout__btn">
                                <Button
                                    type='submit'
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    disabled={cart && cart.totalPrice > 0 ? false : true }
                                >Đặt hàng</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default ChekOutPage;