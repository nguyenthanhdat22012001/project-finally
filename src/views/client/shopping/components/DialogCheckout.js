import React,{ useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Typography from '@mui/material/Typography';
import { useHistory, Link } from 'react-router-dom';

DialogCheckout.propTypes = {
    openDialogChekout: PropTypes.bool,
    order: PropTypes.object,
}

DialogCheckout.defaultProps = {
    openDialogChekout: false,
    order: null,
}

export default function DialogCheckout(props) {
    const { openDialogChekout } = props;
    const [order,setOrder] = useState(props.order);
    const history = useHistory();

    useEffect(() => {
        setOrder(props.order);
    }, [props.order])

    const handleRedirectCheckoutSuccessPage = (id) => {
        history.push(`/client/shopping/checkout-success/${id}`);
    }

    return (
        <div>
            <Dialog
                open={openDialogChekout}
                onClose={() => handleRedirectCheckoutSuccessPage(order.id)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="xl"
            >
                <Box
                    component="div"
                    sx={{
                        textAlign: "center",
                        padding: "10px 20px"
                    }}
                >
                    <CheckCircleOutlineIcon sx={{ fontSize: '5vw' }} color='success' />
                    <Typography variant='h5' color="text.primary">Chúc mừng bạn đã đặt hàng thành công</Typography>
                </Box>
                <DialogActions>

                    <Button onClick={() => handleRedirectCheckoutSuccessPage(order.id)} autoFocus>
                        Tới hóa đơn
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
