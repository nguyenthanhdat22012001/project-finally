import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';

TableListUser.propTypes = {
    listUser: PropTypes.array,
}

TableListUser.defaultProps = {
    listUser: [],
}

function TableListUser(props) {
    const { listUser } = props;

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
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
            field: 'email',
            headerName: 'Email',
            width: 250,
        },
        {
            field: 'Địa chỉ',
            headerName: 'address',
            width: 250,
        },

    ];

    return (
        <Grid item xs={12} sm={12} md={12}>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={listUser}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                />
            </div>
        </Grid>
    )
}


export default TableListUser

