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
                        <h2 className="user__title-page">Don hang cua toi</h2>
                        <div className="user__filter">
                            <span className="">sap xep theo:</span>
                            <div>
                                <Box sx={{ minWidth: 150 }} >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Phu hop nhat</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Phu hop nhat"
                                        // onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Gia tu thap toi cao</MenuItem>
                                            <MenuItem value={20}>Gia tu cao toi thap</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
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