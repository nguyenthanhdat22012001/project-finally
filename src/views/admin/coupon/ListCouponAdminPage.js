import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";

// import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';

import Header from '../../../components/admin/header/Header';
import ConfirmDialog from '../../../components/dialog/ConfirmDialog';
import FormCoupon from '../../../components/admin/coupon/FormCoupon';

const mdTheme = createTheme();



const rows = [
  { id: 1, cate_name: 'Nokia', cate_active: 'Hoạt động', cate_action: 1 },
];

function ListCouponAdminPageContent() {
  const history = useHistory();
  const [dialog, setDeleteDialog] = React.useState({ openDialog: false, message: '' });



  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'cate_name',
      headerName: 'Danh mục',
      width: 150,
    },
    {
      field: 'cate_active',
      headerName: 'Trạng thái',
      width: 110,
    },
    {
      field: 'cate_action', headerName: '', width: 150,
      renderCell: (params) => (
        <strong>
          <IconButton aria-label="" color="inherit" onClick={() => hanldeDirectEdit(params.value)}>
            <EditIcon />
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

        <Header titlePage={'Danh Sách Khuyến Mãi'} />

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

              <Grid item xs={12} sm={6} md={6}>
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

              <Grid item xs={12} sm={6} md={6}>
                <FormCoupon />
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

export default function ListCouponAdminPage() {
  return <ListCouponAdminPageContent />;
}
