import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
import Rating from '@mui/material/Rating';
// import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';

import Sidebar from '../../../components/seller/sidebar/Sidebar';
import Header from '../../../components/seller/header/Header';
import ConfirmDialog from '../../../components/dialog/ConfirmDialog';


const mdTheme = createTheme();



const rows = [
  { id: 1, pr_avatar: '../assets/img1.jpg', pr_name: 'cây lược', pr_rating: 5, pr_comment: '35 Lượt',action:1 },
];

function ListRatingPageContent() {
  const history = useHistory();
  const [openSideBar, setOpenSideBar] = React.useState(true);
  const [dialog, setDeleteDialog] = React.useState({openDialog:false,message:''});

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'pr_avatar',
      headerName: '',
      width: 150,
      renderCell: (params) => (<div><Avatar variant="square" sx={{ width: 56, height: 56 }} alt="" src={params.value} /></div>)
    },
    {
      field: 'pr_name',
      headerName: 'Sản phẩm',
      width: 150,
    },
    {
      field: 'pr_rating',
      headerName: 'Tổng sao',
      width: 150,
      renderCell: (params) => (  <Rating size="small" name="read-only" value={params.value} readOnly />)
    },
    {
      field: 'pr_comment',
      headerName: 'Số bình luận',
      width: 150,
    },
    {
      field: 'action', headerName: '', width: 200,
      renderCell: (params) => (
        <Button variant="outlined" startIcon={<CommentIcon />} onClick={()=> hanldeDirectEdit(params.value)} >
        Xem bình luận 
      </Button>
      ),
    },
  ];

  const hanldeDirectEdit = (id)=>{
    console.log('edit');
      history.push(`/seller/comments/${id}`)
  }

  const hanldeConfirmDialog = (boolean,message)=>{
    setDeleteDialog({...dialog,openDialog:boolean,message:message});
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Header titlePage={'Đánh Giá Sản Phẩm'} openSideBar={openSideBar} toggleSideBar={toggleSideBar} />
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

export default function ListRatingPage() {
  return <ListRatingPageContent />;
}
