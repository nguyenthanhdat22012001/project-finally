import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
//validate
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const theme = createTheme();

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .min(18, "mật khẩu ít nhất 18 ký tự")
    .email('Không đúng định dang email'),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu tối đa 8 ký tự")
});

function LoginAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onLoginSubmit = (data) => {
    console.log(data);
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onLoginSubmit)} sx={{ mt: 3 }}>
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
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginAdmin;