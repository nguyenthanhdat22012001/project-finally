import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
//helper
import { formatdateDMY } from "helper/FormatDate";
import { fCurrencyVN } from 'helper/FormatNumber';

import ButtonStatus from "./ButtonStatus";

TableOrders.propTypes = {
    orders: PropTypes.array,
}

TableOrders.defaultProps = {
    orders: [],
}
const base_url = '/admin/order';

function TableOrders(props) {
    const {orders} = props;

    const columns = [
        { field: 'id', headerName: 'Mã đơn', width: 90 },
        {
            field: 'name',
            headerName: 'Họ tên',
            width: 150,
        },
        {
            field: 'phone',
            headerName: 'Số điện thoại',
            width: 150,
        },
        {
            field: 'totalprice',
            headerName: 'Tổng tiền',
            width: 150,
            renderCell: (params) => (
                <div>{fCurrencyVN(params.value)}</div>
            ),
        },
        {
            field: 'created_at',
            headerName: 'Ngày đặt',
            width: 150,
            renderCell: (params) => (
                <div>{formatdateDMY(params.value)}</div>
            ),
        },
        {
            field: 'statusObj', headerName: '', width: 180,
            renderCell: (params) => (
                <ButtonStatus statusObj={params.value} />
            ),
        },
        {
            field: 'or_action', headerName: '', width: 90,
            renderCell: (params) => (
                <Link to={`${base_url}/${params.value}`}>
                    <IconButton aria-label="" color="inherit">
                        <VisibilityIcon />
                    </IconButton>
                </Link>
            ),
        },
    ];

    return (
        <Grid container spacing={3}>

            <Grid item xs={12} sm={12} md={12}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={orders}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                    />
                </div>
            </Grid>

        </Grid>
    )
}



export default TableOrders

