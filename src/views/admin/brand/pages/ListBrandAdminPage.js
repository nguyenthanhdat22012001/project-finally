import * as React from 'react';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";


import ConfirmDialog from 'components/dialog/ConfirmDialog';
import FormBrand from 'components/admin/brand/FormBrand';

const rows = [
  { id: 1, cate_name: 'Nokia', cate_active: 'Hoạt động', cate_action: 1 },
];

function ListBrandAdminPage() {
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
        <FormBrand />
      </Grid>

      {/* dialog */}
      <ConfirmDialog dialog={dialog} hanldeConfirmDialog={hanldeConfirmDialog} />
    </Grid>
  );
}

export default ListBrandAdminPage;
