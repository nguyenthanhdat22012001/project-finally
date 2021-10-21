import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';


ConfirmDialog.propTypes = {
  hanldeReportDeleteDialog: PropTypes.func,
  hanldeAcceptDelete: PropTypes.func,
  dialogDelete: PropTypes.object,
} 

ConfirmDialog.defaultProps = {
  hanldeReportDeleteDialog: null,
  hanldeAcceptDelete: null,
  dialogDelete: null,
} 

export default function ConfirmDialog(props) {
  const {dialogDelete, hanldeReportDeleteDialog, hanldeAcceptDelete } = props;
  return (
    <Dialog
      open={dialogDelete && dialogDelete.openDialog}
      onClose={() => hanldeReportDeleteDialog && hanldeReportDeleteDialog(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Typography variant="h6" gutterBottom component="div">
          {dialogDelete && dialogDelete.message}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => hanldeReportDeleteDialog && hanldeReportDeleteDialog(false) } autoFocus>Hủy</Button>
        <Button onClick={() => hanldeAcceptDelete && hanldeAcceptDelete()} >
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );
}
