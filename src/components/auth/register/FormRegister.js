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
import {registerSchema} from "validates/authValidate";

FormRegister.propTypes = {
    handleRegisterSubmit: PropTypes.func,
}

function FormRegister(props) {
    const {handleRegisterSubmit } = props;

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({ resolver: yupResolver(registerSchema) });

    return (
        <Box component="form" onSubmit={handleSubmit(handleRegisterSubmit)} noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="name"
              label="Họ Tên"
              name="name"
              autoComplete="name"
              {...register("name")}
              helperText={errors.name && `${errors.name?.message}`}
              error={errors.name && true}
            />
          </Grid>
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
              autoComplete="new-password"
              {...register("password")}
              helperText={errors.password && `${errors.password?.message}`}
              error={errors.password && true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="confirm_password"
              label="Xác nhận mật khẩu"
              type="password"
              id="confirm_password"
              {...register("confirm_password")}
              helperText={errors.confirm_password && `${errors.confirm_password?.message}`}
              error={errors.confirm_password && true}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Đăng Kí
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/login" variant="body2" color="primary">
              Đã có tài khoản? Đăng Nhập
            </Link>
          </Grid>
        </Grid>
      </Box>
    )
}

export default FormRegister

