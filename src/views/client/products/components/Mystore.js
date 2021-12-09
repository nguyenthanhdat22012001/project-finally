import React from 'react';
import PropTypes from 'prop-types';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import StoreIcon from '@mui/icons-material/Store';
import Skeleton from '@mui/material/Skeleton';

import "./Mystore.scss";

Mystore.propTypes = {
    store: PropTypes.object,
};
Mystore.defaultProps = {
    store: {},
};


function Mystore(props) {
    const { store } = props;

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
                                <span>tro chuyen</span>
                            </div>
                            <div className="flexBoxColunm mystore__follow">
                                <IconButton aria-label="chat" sx={{ color: "orangered" }} >
                                    <StoreIcon sx={{ fontSize: 30 }} />
                                </IconButton>
                                <span>theo doi</span>
                            </div>
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
