import React, { useState, useEffect } from 'react';
//api
import productApi from "api/productApi";
import storeApi from "api/storeApi";
//redux
import { useSelector } from "react-redux";
// notify
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from 'helper/notify';

import "../user.scss";
import Sidebar from "../components/Sidebar";
import TabFavoriteAndFollowPage from "../components/TabFavoriteAndFollow";


function FavoriteAndFollowPage() {
    const { enqueueSnackbar } = useSnackbar();
    const user = useSelector(state => state.auth.user);
    /*******state*******/
    const [productFavorite, setProductFavorite] = useState([]);
    const [storeFollow, setStoreFollow] = useState([]);

    useEffect(() => {
        Promise.all([getProductUserCollection(),getStoreUserFollow()]);
    }, [])

    /******* get product user favorite********/
    const getProductUserCollection = async () => {
        try {
            const res = await productApi.getProductUserCollection(user.id);
            if (res.success) {
                setProductFavorite(res.data);
            }

        } catch (error) {
            console.log('error', error);
        }
    }
    /******* get store user follow********/
    const getStoreUserFollow = async () => {
        try {
            const res = await storeApi.getStoreUserCollection(user.id);
            if (res.success) {
                setStoreFollow(res.data);
            }

        } catch (error) {
            console.log('error', error);
        }
    }

    /************** handle toggle collection product  ***************/
    const handleRemoveProductUserCollection = async (product_id) => {

        if (!user) {
            handleNotiDialog(enqueueSnackbar, 'Bạn chưa đăng nhập', 'error');
            return;
        }

        const newData = {
            product_id: product_id,
            user_id: user.id
        }

        try {
            const res = await productApi.deleteProductUserCollection(newData);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
                getProductUserCollection();
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }

        } catch (error) {
            console.log('error: ' + error);
        }
    };

    return (
        <div className="wrapper_inner">
            <div className="user__wrapper">
                <div className="user__col-left">
                    <Sidebar />
                </div>
                <div className="user__col-right">
                    <h2 className="user__title-page">Danh sách yêu thích và gian hàng đã theo dõi</h2>
                    <TabFavoriteAndFollowPage
                        productFavorite={productFavorite}
                        storeFollow={storeFollow}
                        handleRemoveProductUserCollection={handleRemoveProductUserCollection}
                    />
                </div>
            </div>
        </div>
    )
}

export default FavoriteAndFollowPage;