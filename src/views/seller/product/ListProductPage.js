import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import {useHistory} from "react-router-dom"
// import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';

import Sidebar from '../../../components/seller/sidebar/Sidebar';
import Header from '../../../components/seller/header/Header';
import ConfirmDialog from '../../../components/dialog/ConfirmDialog';


const mdTheme = createTheme();



const rows = [
  { id: 1, avatar: '../assets/img1.jpg', name: 'cây lược', totalQuanty: 35, active: 'Hoạt động',action:1 },
];

function ListProductPageContent() {
  const history = useHistory();
  const [openSideBar, setOpenSideBar] = React.useState(true);
  const [dialog, setDeleteDialog] = React.useState({openDialog:false,message:''});

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar',
      headerName: '',
      width: 150,
      renderCell: (params) => (<div><Avatar alt="" src={params.value} /></div>)
    },
    {
      field: 'name',
      headerName: 'Tên sản phẩm',
      width: 150,
    },
    {
      field: 'totalQuanty',
      headerName: 'Số lượng tồn kho',
      width: 150,
    },
    {
      field: 'active',
      headerName: 'Trạng thái',
      width: 110,
  
    },
    {
      field: 'action', headerName: '', width: 150,
      renderCell: (params) => (
        <strong>
          <IconButton aria-label="" color="inherit" onClick={()=> hanldeDirectEdit(params.value)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="" color="inherit" onClick={()=> hanldeDelete(params.value)}>
            <DeleteOutlineIcon />
          </IconButton>
        </strong>
      ),
    },
  ];

  const hanldeDelete = (id)=>{
    hanldeConfirmDialog(true,`Bạn có chắc muốn xóa sản phẩm id ${id} ?`);
  }

  const hanldeDirectEdit = (id)=>{
    console.log('edit');
      history.push(`/seller/product/edit/${id}`)
  }

  const hanldeConfirmDialog = (boolean,message)=>{
    setDeleteDialog({...dialog,openDialog:boolean,message:message});
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Header titlePage={'Danh Sách Sản Phẩm'} openSideBar={openSideBar} toggleSideBar={toggleSideBar} />
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

export default function ListProductPage() {
  return <ListProductPageContent />;
}
