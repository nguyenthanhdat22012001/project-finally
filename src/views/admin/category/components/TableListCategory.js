import { useState } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@mui/material/IconButton';

import ConfirmDialog from 'components/dialog/ConfirmDialog';

TableListCategory.propTypes = {
  handleDeleteCategory: PropTypes.func,
  handleEditCategory: PropTypes.func,
  listCategory: PropTypes.array,
}
TableListCategory.defaultProps = {
  listCategory: [],
}

function TableListCategory(props) {
  const { listCategory, handleDeleteCategory,handleEditCategory } = props;
  const [dialogDelete, setDialogDelete] = useState({ openDialog: false, message: '', isDelete: false , idDelete: null });

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Danh mục', width: 150, },
    {
      field: 'hide', headerName: 'Trạng thái', width: 110,
      renderCell: (params) => {
        if (params.value === 1) {
          return <p>Ẩn</p>
        } else {
          return <p>Hiện</p>
        }
      },
    },
    {
      field: 'action', headerName: '', width: 150,
      renderCell: (params) => (
        <strong>
          <IconButton aria-label="" color="inherit" onClick={() => handleEditCategory(params.value.cate_id)}>
            <EditIcon />
          </IconButton>
          <IconButton 
          aria-label="" 
          color="inherit" 
          onClick={() => hanldeReportDeleteDialog(true, `Bạn có chắc muốn xóa danh mục "${params.value.cate_name}" ?`,params.value.cate_id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </strong>
      ),
    },
  ];

  /************** handle report delete dialogDelete ***************/
  const hanldeReportDeleteDialog = (openDialog, message ='',id = null) => {
    setDialogDelete({ ...dialogDelete, openDialog: openDialog, message: message,idDelete: id });
  }
   /************** handle accept delete dialogDelete ***************/
   const hanldeAcceptDelete = () => {
    hanldeReportDeleteDialog(false);
    handleDeleteCategory(dialogDelete.idDelete);
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={listCategory}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
      {/* dialogDelete delete */}
      <ConfirmDialog
        dialogDelete={dialogDelete}
        hanldeReportDeleteDialog={hanldeReportDeleteDialog}
        hanldeAcceptDelete={hanldeAcceptDelete}
      />
    </div>
  )
}

export default TableListCategory;

