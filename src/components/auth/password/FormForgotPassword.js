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
import { forgotPasswordSchema } from "validates/authValidate";

FormForgotPassword.propTypes = {
    handleForgotPasswordSubmit: PropTypes.func,
}

function FormForgotPassword(props) {
    const { handleForgotPasswordSubmit } = props;

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(forgotPasswordSchema) });

    return (
        <Box component="form" onSubmit={handleSubmit(handleForgotPasswordSubmit)} noValidate sx={{ mt: 3, width: '100%' }}>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        {...register("email")}
                        helperText={errors.email && `${errors.email?.message}`}
                        error={errors.email && true}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Gửi
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link to="/register" variant="body2" color="primary">
                        Đăng Kí?
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FormForgotPassword

