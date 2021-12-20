// api
import shoppingApi from "api/shoppingApi";
//type auth redux
import typeCart from "../contains/typeCart";
//helper
import {
    handleUpdateTotalCartInLocalStorage,
    handleAddCartInLocalStorage, getCartLocalStorage,
    handleDeleteProductInLocalStorage,
    handleUpdateQuantityProductInLocalStorage,
    handleUseCouponSystemInLocalStorage,
    handleUseCouponStoreInLocalStorage,
    handlePaymentInLocalStorage,
    removeCartLocalStorage
} from "helper/cart";
import { handleNotiDialog } from 'helper/notify';



/**********handle add cart****************/
export const handleAddCartRedux = (enqueueSnackbar, data) => async (dispatch, getState) => {
    try {
        const res = await shoppingApi.addCart(data);

        if (res.success) {
            handleAddCartInLocalStorage(res.data);
            handleUpdateTotalCartInLocalStorage();
            const cartLocalStorage = getCartLocalStorage();

            dispatch({ type: typeCart.SET_CART, payload: cartLocalStorage });
            handleNotiDialog(enqueueSnackbar, res.message, 'success');
        } else {
            handleNotiDialog(enqueueSnackbar, res.message, 'error');
        }

    } catch (error) {
        console.log('error: ' + error);
    }
}

/**********handle delete product cart****************/
export const handleDeleteProductCartredux = (data) => async (dispatch, getState) => {
    try {
        handleDeleteProductInLocalStorage(data.store_id, data.product_id, data.attribute_id);
        handleUpdateTotalCartInLocalStorage();
        const cartLocalStorage = getCartLocalStorage();

        dispatch({ type: typeCart.SET_CART, payload: cartLocalStorage });

    } catch (error) {
        console.log('error: ' + error);
    }
}
/**********handle update quantity product cart****************/
export const handleUpdateQuantityCartredux = (store_id, product_id, attribute_id, quantity) => async (dispatch, getState) => {
    try {
        handleUpdateQuantityProductInLocalStorage(store_id, product_id, attribute_id, quantity);
        handleUpdateTotalCartInLocalStorage();
        const cartLocalStorage = getCartLocalStorage();
        dispatch({ type: typeCart.SET_CART, payload: cartLocalStorage });

    } catch (error) {
        console.log('error: ' + error);
    }
}

/**********handle use coupon store****************/
export const handleUseCouponStoreRedux = (enqueueSnackbar, store_id, coupon) => async (dispatch, getState) => {
    try {
        const isUseCoupon = handleUseCouponStoreInLocalStorage(store_id, coupon);

        if (!isUseCoupon) {
            handleNotiDialog(enqueueSnackbar, "Đơn hàng của bạn chưa đủ điều kiện để sử dụng voucher này", 'error');
        }else{
            handleUpdateTotalCartInLocalStorage();
            const cartLocalStorage = getCartLocalStorage();
            dispatch({ type: typeCart.SET_CART, payload: cartLocalStorage });
        }

    } catch (error) {
        console.log('error: ' + error);
    }
}

/**********handle use coupon system****************/
export const handleUseCouponSystemRedux = (enqueueSnackbar, coupon) => async (dispatch, getState) => {
    try {
        const isUseCoupon = handleUseCouponSystemInLocalStorage(coupon);

        if (!isUseCoupon) {
            handleNotiDialog(enqueueSnackbar, "Đơn hàng của bạn chưa đủ điều kiện để sử dụng voucher này", 'error');
        }else{
            handleUpdateTotalCartInLocalStorage();
            const cartLocalStorage = getCartLocalStorage();
            dispatch({ type: typeCart.SET_CART, payload: cartLocalStorage });
        }

    } catch (error) {
        console.log('error: ' + error);
    }
}

/**********handle payment****************/
export const handlePaymentRedux = (payment) => async (dispatch, getState) => {
    try {
        handlePaymentInLocalStorage(payment);
        handleUpdateTotalCartInLocalStorage();
        const cartLocalStorage = getCartLocalStorage();
        dispatch({ type: typeCart.SET_CART, payload: cartLocalStorage });

    } catch (error) {
        console.log('error: ' + error);
    }
}

/**********handle clear cart****************/
export const handleClearCartRedux = () => async (dispatch, getState) => {
    try {
        removeCartLocalStorage();
        dispatch({ type: typeCart.CLEAR_CART });

    } catch (error) {
        console.log('error: ' + error);
    }
}