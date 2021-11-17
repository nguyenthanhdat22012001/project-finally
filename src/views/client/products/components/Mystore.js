import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import StoreIcon from '@mui/icons-material/Store';

import "./Mystore.scss";
import imageProduct from "assets/images/img1.jpg";

class Mystore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
    };

    render() {
        return (
            <div className="mystore">
                <div className="mystore__item">
                    <img src={imageProduct} alt="" />
                </div>
                <div className="mystore__item">
                    <h4 className="mystore__name">OPPO rental mega</h4>
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
        );
    }
}



export default Mystore;
