import React from 'react';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import "../user.scss";
import Sidebar from "../components/Sidebar";
import TabOrder from "../components/TabOrder";


class HistoryOrderPage extends React.Component {
    render() {
        return (
            <div className="wrapper_inner">
                <div className="user__wrapper">
                    <div className="user__col-left">
                        <Sidebar />
                    </div>
                    <div className="user__col-right">
                        <h2 className="user__title-page">Đơn hàng của tôi</h2>
                        <div className="row">
                            <TabOrder />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HistoryOrderPage;