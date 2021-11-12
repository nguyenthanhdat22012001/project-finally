import React from 'react';
// import { useHistory } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
// api
import userApi from "api/userApi";

import FormForgotPassword from 'components/auth/password/FormForgotPassword';

const theme = createTheme();

function ForgotPasswordPage(props) {

    /************** handle register user ***************/
    const handleForgotPasswordSubmit = async (data) => {
        try {
            const res = await userApi.forgotPassword(data);
            console.log(res);
            // if (res.success) {

            // }

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
                    {/* form register */}
                    <FormForgotPassword handleForgotPasswordSubmit={handleForgotPasswordSubmit} />
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default ForgotPasswordPage

