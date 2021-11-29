import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
//validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "validates/authValidate";

FormResetPassword.propTypes = {
    handleResetPasswordSubmit: PropTypes.func,
    handleReSendMail: PropTypes.func,
}

function FormResetPassword(props) {
    const { handleResetPasswordSubmit,handleReSendMail } = props;

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(resetPasswordSchema) });

    return (
        <Box component="form" onSubmit={handleSubmit(handleResetPasswordSubmit)} noValidate sx={{ mt: 3, width: '100%' }}>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        type="password"
                        id="password"
                        label="Mật khẩu mới"
                        name="password"
                        autoComplete="password"
                        {...register("password")}
                        helperText={errors.password && `${errors.password?.message}`}
                        error={errors.password && true}
                    />
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        type="password"
                        id="password_confirmation"
                        label="Xác nhận mật khẩu"
                        name="password_confirmation"
                        autoComplete="password_confirmation"
                        {...register("password_confirmation")}
                        helperText={errors.password_confirmation && `${errors.password_confirmation?.message}`}
                        error={errors.password_confirmation && true}
                    />
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        id="otp"
                        label="OTP"
                        name="otp"
                        {...register("otp")}
                        helperText={errors.otp && `${errors.otp?.message}`}
                        error={errors.otp && true}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Xác nhận
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Button
                        type="button"
                        fullWidth
                        variant="text"
                        color="secondary"
                        onClick={handleReSendMail}
                    >
                         Gửi lại mã otp
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FormResetPassword

