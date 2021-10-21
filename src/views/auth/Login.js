import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { LoginAuthAction } from "../../redux/actions/AuthAction";
// api
import userApi from "../../api/userApi";

import FormLogin from "../../components/auth/login/FormLogin";
import LoaderDialog from "../../components/dialog/LoaderDialog";

const theme = createTheme();

/*************** get user api ************/

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const isSigned = useSelector(state => state.auth.isSigned);
  const dispatch = useDispatch();
  const history = useHistory();

/*************** go to home page if logined ************/
  if (isSigned) {
    history.push('/');
  }
/*************** loading page ************/
  useEffect(() => {
    const timeLoading = setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    return () => {
      clearTimeout(timeLoading)
    }
  }, [])
/*************** handle login ************/
  const handleLogin = async (data) => {
    try {
      setIsLoading(true);
      const res = await userApi.LoginUser(data);
      const user = {
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
      }

      const action = LoginAuthAction(user);
      dispatch(action);

      console.log(res);
    } catch (error) {
      console.log('error: ' + error);
    }

  }
/*************** handle login google ************/
  const handleLoginGoogle = (data) => {
    console.log(data.profileObj);
  }

  return (
    <ThemeProvider theme={theme}>

      {isLoading && <LoaderDialog />} {/* load page */}

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
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                icon={false}
                onSuccess={handleLoginGoogle}
                onFailure={handleLoginGoogle}
                cookiePolicy={'single_host_origin'}
              // isSignedIn={true}
              >
                <IconButton aria-label="google" color="error" >
                  <GoogleIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </GoogleLogin>
            </Box>
            {/* login form */}
            <FormLogin onHandleLogin={handleLogin} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}