import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
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
// api
import userApi from "../../api/userApi";
//redux
import { useSelector, useDispatch } from "react-redux";
import { LoginAuthAction } from "../../redux/actions/AuthAction";

import LoaderDialog from "../../components/dialog/LoaderDialog";

const theme = createTheme();

const schema = yup.object().shape({
  name: yup
    .string()
    .min(8, "Nhập ít nhất 8 ký tự")
    .max(50, "Nhập tối đa 50 ký tự")
    .required("Vui lòng nhập họ tên"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .min(16, "email ít nhất 16 ký tự")
    .email('Không đúng định dang email'),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu tối đa 8 ký tự"),
  confirm_password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu tối đa 8 ký tự")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("password")],
        "Xác mật khẩu không khớp"
      ),
    })
});


function Register() {
  const [isLoading, setIsLoading] = useState(true);
  const isSigned = useSelector(state => state.auth.isSigned);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log("isSigned ="+isSigned)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  /*************** go to home page if logined ************/
  if (isSigned) {
    history.push('/');
  }

  /************** handle register user ***************/
  const handleRegisterSubmit = async (data) => {
    try {
      setIsLoading(true);
      const res = await userApi.registerUser(data);
      const user = {
        user: {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
        },
        isSigned: true,
      }

      const action = LoginAuthAction(user);
      dispatch(action);

      console.log(res);
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  /*************** loading page ************/
  useEffect(() => {
    const timeLoading = setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    return () => {
      clearTimeout(timeLoading)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>

      {isLoading && <LoaderDialog />} {/* load page */}

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
            Đăng Kí
          </Typography>
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
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;