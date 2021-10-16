import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
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

export default function Login() {
  const [values, setValues] = React.useState({
    weightRange: '',
    showPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onLoginSubmit = (data) => {
    console.log(data);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(../assets/img-login.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng Nhập
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <IconButton aria-label="google" color="error" >
                <GoogleIcon sx={{ fontSize: 30 }} />
              </IconButton>
              <IconButton aria-label="google" color="primary" >
                <FacebookIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit(onLoginSubmit)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email")}
                helperText={errors.email && `${errors.email?.message}`}
                error={errors.email && true}
              />
              <FormControl fullWidth variant="outlined" sx={{marginTop: '16px'}}>
                <InputLabel htmlFor="outlined-adornment-password" color={errors.password && 'error'}>Mật khẩu</InputLabel>
                <OutlinedInput
                  {...register("password")}
                  he
                  error={errors.password && true}
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                 {errors.password && <FormHelperText sx={{color: 'red'}} id="outlined-weight-helper-text">{errors.password?.message}</FormHelperText>}
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng Nhập
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Quên Mật Khẩu?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2" color="primary">
                    {"Chưa có tài khoản? Đăng Kí"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}