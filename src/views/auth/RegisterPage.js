import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
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
// helper
import { getToken } from "helper/auth";

import FormRegister from 'components/auth/register/FormRegister';

const theme = createTheme();

function Register() {
  const history = useHistory();

  /*************** go to back page if logined ************/
  useEffect(() => {
    const token = getToken();
    if (token) {
      history.goBack();
    }
  });
  /************** handle register user ***************/
  const handleRegisterSubmit = async (data) => {
    try {
      const res = await userApi.registerUser(data);

      if (res.success) {
        history.push('/login');
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
            Đăng Kí
          </Typography>
          {/* form register */}
          <FormRegister handleRegisterSubmit={handleRegisterSubmit} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;