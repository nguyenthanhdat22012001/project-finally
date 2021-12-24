import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
//helper
import {fCurrencyVN} from "helper/FormatNumber";

TableListStore.propTypes = {
    listStore: PropTypes.array,
}

TableListStore.defaultProps = {
    listStore: [],
}

function TableListStore(props) {
    const { listStore } = props;

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'img',
            headerName: '',
            width: 110,
            renderCell: (params) => (<div><Avatar variant="square" sx={{ width: 56, height: 56 }} alt="" src={params.value} /></div>)
        },
        {
            field: 'name',
            headerName: 'Cửa hàng',
            width: 200,
        },
        {
            field: 'phone',
            headerName: 'Số điện thoại',
            width: 150,
        },
        {
            field: 'address',
            headerName: 'Địa chỉ cửa hàng',
            width: 250,
        },
        {
            field: 'revenueMonth',
            headerName: 'Doanh thu tháng',
            width: 150,
            renderCell: (params) => (<p>{fCurrencyVN(params.value)}</p>)
        },
    ];

    return (
        <Grid item xs={12} sm={12} md={12}>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={listStore}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                />
            </div>
        </Grid>
    )
}


export default TableListStore

