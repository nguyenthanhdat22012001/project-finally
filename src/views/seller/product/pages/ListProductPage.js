import * as React from 'react';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";

import ConfirmDialog from 'components/dialog/ConfirmDialog';


const rows = [
  { id: 1, avatar: '../assets/img1.jpg', name: 'cây lược', totalQuanty: 35, active: 'Hoạt động', action: 1 },
];

function ListProductPage() {
  const history = useHistory();
  const [dialog, setDeleteDialog] = React.useState({ openDialog: false, message: '' });

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar',
      headerName: '',
      width: 150,
      renderCell: (params) => (<div><Avatar variant="square" sx={{ width: 56, height: 56 }} alt="" src={params.value} /></div>)
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

export default ListProductPage;
