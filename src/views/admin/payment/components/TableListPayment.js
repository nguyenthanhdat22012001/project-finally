import { useState } from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@mui/material/IconButton';
//helper
import { fCurrencyVN } from "helper/FormatNumber";

import ConfirmDialog from 'components/dialog/ConfirmDialog';

TableListPayment.propTypes = {
  handleDeletePayment: PropTypes.func,
  handleEditPayment: PropTypes.func,
  listPayment: PropTypes.array,
}
TableListPayment.defaultProps = {
  listPayment: [],
}

function TableListPayment(props) {
  const { listPayment, handleDeletePayment, handleEditPayment } = props;
  const [dialogDelete, setDialogDelete] = useState({ openDialog: false, message: '', isDelete: false, idDelete: null });

  const columns = [
    { field: 'id', hide: true, headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Thương hiệu', width: 200, },
    {
      field: 'fee_shipping', headerName: 'Phí ship', width: 110,
      renderCell: (params) => {
        return fCurrencyVN(params.value);
      }
    },
    {
      field: 'hide', headerName: 'Trạng thái', width: 90,
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
          <IconButton aria-label="" color="inherit" onClick={() => handleEditPayment(params.value.pay_id)}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label=""
            color="inherit"
            onClick={() => hanldeReportDeleteDialog(true, `Bạn có chắc muốn xóa Phương thức: "${params.value.pay_name}" ?`, params.value.pay_id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </strong>
      ),
    },
  ];

  /************** handle report delete dialogDelete ***************/
  const hanldeReportDeleteDialog = (openDialog, message = '', id = null) => {
    setDialogDelete({ ...dialogDelete, openDialog: openDialog, message: message, idDelete: id });
  }
  /************** handle accept delete dialogDelete ***************/
  const hanldeAcceptDelete = () => {
    hanldeReportDeleteDialog(false);
    handleDeletePayment(dialogDelete.idDelete);
  }

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={listPayment}
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

export default TableListPayment;

