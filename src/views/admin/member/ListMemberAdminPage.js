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
import Chip from '@mui/material/Chip';
// import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';


import Header from '../../../components/admin/header/Header';
import ConfirmDialog from '../../../components/dialog/ConfirmDialog';

const mdTheme = createTheme();

const rows = [
    { id: 1, mem_name: 'Nguyen dat', mem_phone: '03467567567', mem_email: 'nguyendat@gmail.com', mem_role: 'quản trị viên', mem_status: 'đang hoạt động'},
];

function ListMemberAdminPageContent() {
    const history = useHistory();

    const [dialog, setDeleteDialog] = React.useState({ openDialog: false, message: '' });


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'mem_name',
            headerName: 'Họ tên',
            width: 150,
        },
        {
            field: 'mem_phone',
            headerName: 'Số điện thoại',
            width: 150,
        },
        {
            field: 'mem_email',
            headerName: 'Email',
            width: 150,
        },
        {
            field: 'mem_role',
            headerName: 'Vai trò',
            width: 110,
        },
        {
            field: 'mem_status', 
            headerName: 'Hoạt động', 
            width: 200,
            renderCell: (params) => (
                <Chip label={params.value} color="success" variant="outlined" />
            ),
        },
        {
            field: 'or_action', headerName: '', width: 110,
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

                <Header titlePage={'Danh Sách Thành Viên'} />

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

export default function ListMemberAdminPage() {
    return <ListMemberAdminPageContent />;
}