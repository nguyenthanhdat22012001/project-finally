import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

export default function ConfirmDialog({ dialog, hanldeConfirmDialog}) {

  return (
    <Dialog
      open={dialog.openDialog}
      onClose={() => hanldeConfirmDialog(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Typography variant="h6" gutterBottom component="div">
          {dialog.message}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => hanldeConfirmDialog(false)}>Hủy</Button>
        <Button onClick={() => hanldeConfirmDialog(false)} autoFocus>
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );
}
