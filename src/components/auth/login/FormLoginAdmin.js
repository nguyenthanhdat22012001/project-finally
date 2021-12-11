import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "validates/authValidate";

FormLoginAdmin.propTypes = {
    handleLogin: PropTypes.func,
}

function FormLoginAdmin(props) {
    const { handleLogin } = props;

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(loginSchema) });

    return (
        <Box component="form" noValidate onSubmit={handleSubmit(handleLogin)} sx={{ mt: 3 }}>
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
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Mật khẩu"
                        type="password"
                        id="password"
                        autoComplete="password"
                        {...register("password")}
                        helperText={errors.password && `${errors.password?.message}`}
                        error={errors.password && true}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Đăng Nhập
            </Button>
        </Box>
    )
}

export default FormLoginAdmin

