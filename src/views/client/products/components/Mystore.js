import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import StoreIcon from '@mui/icons-material/Store';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Skeleton from '@mui/material/Skeleton';
//api 
import storeApi from "api/storeApi";
//redux
import { useSelector } from "react-redux";
//noti
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from "helper/notify";

import "./Mystore.scss";

Mystore.propTypes = {
    store: PropTypes.object,
};
Mystore.defaultProps = {
    store: {},
};


function Mystore(props) {
    const { store } = props;
    const user = useSelector(state => state.auth.user);
    const { enqueueSnackbar } = useSnackbar();
    /*******state********/
    const [isFollow, setIsFollow] = useState(false);

    useEffect(async () => {
        if (user && Object.keys(store).length > 0) {
            await hanldeCheckUserFollowStore(store.id);
        }
    }, [store])

    /***************handle check user follow store****************/
    const hanldeCheckUserFollowStore = async (store_id) => {
        if (!user) {
            return;
        }

        try {
            const params = {
                user_id: user.id,
                store_id: store_id,
            };
            const res = await storeApi.checkUserFollowStore(params);
            if (res.success) {
                setIsFollow(true);
            }

        } catch (error) {
            console.log('error', error);
        }
    }

    /************** handle collection store ***************/
    const handleCollectionStore = async (store_id) => {
        if (!user) {
            handleNotiDialog(enqueueSnackbar, 'Bạn chưa đăng nhập', 'error');
            return;
        }

        try {
            const newData = {
                store_id: store_id,
                user_id: user.id,
            }

            const res = await storeApi.collectionStore(newData);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
                setIsFollow(true);
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }

        } catch (error) {
            console.log('error: ' + error);
        }
    };
    /************** handle remove collection store ***************/
    const handleRemoveCollectionStore = async (store_id) => {
        if (!user) {
            handleNotiDialog(enqueueSnackbar, 'Bạn chưa đăng nhập', 'error');
            return;
        }

        try {
            const newData = {
                store_id: store_id,
                user_id: user.id,
            }

            const res = await storeApi.deleteStoreUserCollection(newData);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
                setIsFollow(false);
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }

        } catch (error) {
            console.log('error: ' + error);
        }
    };


    return (
        <div>
            {
                Object.keys(store).length > 0 ?
                    <div className="mystore">

                        <div className="mystore__item">
                            <img src={Object.keys(store).length > 0 ? store.img : ""} alt="" />
                        </div>
                        <div className="mystore__item">
                            <h4 className="mystore__name">{Object.keys(store).length > 0 ? store.name : ""}</h4>
                            <span className="mystore__numfollow">1234 luot theo doi</span>
                        </div>
                        <div className="mystore__item">
                            <div className=" flexBoxColunm mystore__chat">
                                <IconButton aria-label="chat" color="primary" >
                                    <ChatIcon sx={{ fontSize: 30 }} />
                                </IconButton>
                                <span>Nhắn tin</span>
                            </div>
                            {
                                isFollow ?
                                    <div className="flexBoxColunm mystore__follow">
                                        <IconButton
                                            aria-label="chat"
                                            sx={{ color: "orangered" }}
                                            onClick={() => handleRemoveCollectionStore(store.id)}
                                        >
                                            <StoreIcon sx={{ fontSize: 30 }} />
                                        </IconButton>
                                        <span>Đã theo dõi</span>
                                    </div>
                                    :
                                    <div className="flexBoxColunm mystore__follow">
                                        <IconButton
                                            aria-label="chat"
                                            sx={{ color: "gray" }}
                                            onClick={() => handleCollectionStore(store.id)}
                                        >
                                            <AddBusinessIcon sx={{ fontSize: 30 }} />
                                        </IconButton>
                                        <span>Theo dõi</span>
                                    </div>
                            }

                        </div>
                    </div>
                    :
                    <Skeleton
                        sx={{ height: 103, width: '100%' }}
                        variant="rect"
                        animation="wave" />
            }
        </div>


    );

}



export default Mystore;
