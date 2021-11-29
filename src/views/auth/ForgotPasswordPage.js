import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { Link,useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
// api
import userApi from "api/userApi";
// notify
import { useSnackbar } from 'notistack';
// helper
import { handleNotiDialog } from 'helper/notify';

import FormForgotPassword from 'components/auth/password/FormForgotPassword';
import FormResetPassword from 'components/auth/password/FormResetPassword';

const theme = createTheme();

function ForgotPasswordPage(props) {
    const { enqueueSnackbar } = useSnackbar();
    const [user, setUser] = useState({});
    const history = useHistory();

    /************** handle forgot password ***************/
    const handleForgotPasswordSubmit = async (email) => {
        try {
            const res = await userApi.forgotPassword(email);
            console.log(res);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
                setUser({ ...user, ...email });
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }

        } catch (error) {
            console.log('error: ' + error);
        }
    };
    /************** handle re-send mail  ***************/
    const handleReSendMail = async () => {
        try {
            const res = await userApi.forgotPassword(user);
            console.log(res);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }

        } catch (error) {
            console.log('error: ' + error);
        }
    };
    /************** handle reset password ***************/
    const handleResetPasswordSubmit = async (data) => {
        const newData = { ...user, ...data };
        try {
            const res = await userApi.resetPassword(newData);
            console.log(res);
            if (res.success) {
                handleNotiDialog(enqueueSnackbar, res.message, 'success');
                history.push('/login');
            } else {
                handleNotiDialog(enqueueSnackbar, res.message, 'error');
            }

        } catch (error) {
            console.log('error: ' + error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Link to="/">
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                    </Link>
                    <Typography component="h1" variant="h5">
                        Quên mật khẩu
                    </Typography>
                    {
                        Object.keys(user).length === 0 ?
                            <FormForgotPassword handleForgotPasswordSubmit={handleForgotPasswordSubmit} />
                            : <FormResetPassword handleResetPasswordSubmit={handleResetPasswordSubmit} handleReSendMail={handleReSendMail} />
                    }
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default ForgotPasswordPage

