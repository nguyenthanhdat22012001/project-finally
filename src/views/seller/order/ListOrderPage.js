import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import { useHistory } from "react-router-dom";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import ErrorIcon from '@mui/icons-material/Error';
// import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';

import Sidebar from '../../../components/seller/sidebar/Sidebar';
import Header from '../../../components/seller/header/Header';
import ConfirmDialog from '../../../components/dialog/ConfirmDialog';
import ButtonStatus from "../../../components/seller/order/ButtonStatus";

const mdTheme = createTheme();

const rows = [
    { id: 1, or_name: 'Nguyen dat', or_phone: '03467567567', or_totalQty: 2,or_total: '1.500.00đ', or_action: 1},
];

function ListOrderPageContent() {
    const history = useHistory();
    const [openSideBar, setOpenSideBar] = React.useState(true);
    const [dialog, setDeleteDialog] = React.useState({ openDialog: false, message: '' });

    const toggleSideBar = () => {
        setOpenSideBar(!openSideBar);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'or_name',
            headerName: 'Họ tên',
            width: 150,
        },
        {
            field: 'or_phone',
            headerName: 'Số điện thoại',
            width: 150,
        },
        {
            field: 'or_totalQty',
            headerName: 'Số lượng',
            width: 110,
        },
        {
            field: 'or_total',
            headerName: 'Tổng tiền',
            width: 150,
        },
        {
            field: 'or_status', headerName: '', width: 200,
            renderCell: (params) => (
                <ButtonStatus/>
            ),
        },
        {
            field: 'or_action', headerName: '', width: 150,
            renderCell: (params) => (
                <strong>
                    <IconButton aria-label="" color="inherit" onClick={() => hanldeDirectEdit(params.value)}>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton aria-label="" color="inherit" onClick={() => hanldeDelete(params.value)}>
                        <DeleteOutlineIcon />
                    </IconButton>
                </strong>
            ),
        },
    ];

    const hanldeDelete = (id) => {
        hanldeConfirmDialog(true, `Bạn có chắc muốn xóa sản phẩm id ${id} ?`);
    }

    const hanldeDirectEdit = (id) => {
        console.log('edit');
        history.push(`/seller/product/edit/${id}`)
    }

    const hanldeConfirmDialog = (boolean, message) => {
        setDeleteDialog({ ...dialog, openDialog: boolean, message: message });
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Header titlePage={'Danh Sách Đơn Hàng'} openSideBar={openSideBar} toggleSideBar={toggleSideBar} />
                <Sidebar openSideBar={openSideBar} toggleSideBar={toggleSideBar} />

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>

                            <Grid item xs={12} sm={12} md={12}>
                                <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                        disableSelectionOnClick
                                    />
                                </div>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </Box>
            {/* dialog */}
            <ConfirmDialog dialog={dialog} hanldeConfirmDialog={hanldeConfirmDialog} />
        </ThemeProvider>
    );
}

export default function ListOrderPage() {
    return <ListOrderPageContent />;
}