import * as React from 'react';
import PropTypes from 'prop-types'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

SnackbarError.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarError(props) {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
         {props.message}
        </Alert>
      </Snackbar>
  );
}

