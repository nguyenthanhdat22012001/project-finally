import * as React from 'react';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import Rating from '@mui/material/Rating';


import ConfirmDialog from 'components/dialog/ConfirmDialog';


const rows = [
  { id: 1, pr_avatar: '../assets/img1.jpg', pr_name: 'cây lược', pr_rating: 5, pr_comment: '35 Lượt', action: 1 },
];

function ListRatingPage() {
  const history = useHistory();
  const [dialog, setDeleteDialog] = React.useState({ openDialog: false, message: '' });

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
      renderCell: (params) => (<Rating size="small" name="read-only" value={params.value} readOnly />)
    },
    {
      field: 'pr_comment',
      headerName: 'Số bình luận',
      width: 150,
    },
    {
      field: 'action', headerName: '', width: 200,
      renderCell: (params) => (
        <Button variant="outlined" startIcon={<CommentIcon />} onClick={() => hanldeDirectEdit(params.value)} >
          Xem bình luận
        </Button>
      ),
    },
  ];

  const hanldeDirectEdit = (id) => {
    console.log('edit');
    history.push(`/seller/comment/rating/${id}`)
  }

  const hanldeConfirmDialog = (boolean, message) => {
    setDeleteDialog({ ...dialog, openDialog: boolean, message: message });
  }

  return (
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

      {/* dialog */}
      <ConfirmDialog dialog={dialog} hanldeConfirmDialog={hanldeConfirmDialog} />

    </Grid>
  );
}

export default ListRatingPage;
