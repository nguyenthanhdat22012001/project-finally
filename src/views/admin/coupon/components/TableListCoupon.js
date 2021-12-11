import { useState } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@mui/material/IconButton';
//helper
import {fCurrencyVN} from "helper/FormatNumber";

import ConfirmDialog from 'components/dialog/ConfirmDialog';

TableListCoupon.propTypes = {
  handleDeleteCoupon: PropTypes.func,
  handleEditCoupon: PropTypes.func,
  listCoupon: PropTypes.array,
  editCoupon: PropTypes.object,
}
TableListCoupon.defaultProps = {
  listCoupon: [],
}

function TableListCoupon(props) {
  const { listCoupon, handleDeleteCoupon,handleEditCoupon ,editCoupon} = props;
  const [dialogDelete, setDialogDelete] = useState({ openDialog: false, message: '', isDelete: false , idDelete: null });

  const columns = [
    { field: 'id',hide: true},
    { field: 'name', headerName: 'Khuyến mãi', width: 150, },
    { field: 'price', headerName: 'Giá khuyến mãi', width: 150,  
    renderCell: (params) => {
        return fCurrencyVN(params.value);
    }},
    {
      field: 'hide', headerName: 'Trạng thái', width: 80,
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
          <IconButton aria-label="" color="inherit" onClick={() => handleEditCoupon(params.value.cou_id)}>
            <EditIcon />
          </IconButton>
          <IconButton 
          disabled={editCoupon.isEdit ? true : false}
          aria-label="" 
          color="inherit" 
          onClick={() => hanldeReportDeleteDialog(true, `Bạn có chắc muốn xóa khuyến mãi: "${params.value.cou_name}" ?`,params.value.cou_id)}>
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
    handleDeleteCoupon(dialogDelete.idDelete);
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={listCoupon}
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

export default TableListCoupon;

