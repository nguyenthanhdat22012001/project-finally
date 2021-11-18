import { useHistory } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
//redux
import {useSelector} from "react-redux";
// api
import userApi from "api/userApi";
// helper
import { handleNotiDialog } from 'helper/notify';
// notify
import { useSnackbar } from 'notistack';

import FormRegister from 'components/auth/register/FormRegister';

const theme = createTheme();

function Register() {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  /*************** go to back page if logined ************/
  const user = useSelector(state => state.auth.user);

  if (!user) {
      history.goBack();
  }
  /************** handle register user ***************/
  const handleRegisterSubmit = async (data) => {
    try {
      const res = await userApi.registerUser(data);

      if (res.success) {
        handleNotiDialog(enqueueSnackbar, res.message, 'success');
        history.push('/login');
      }else{
        handleNotiDialog(enqueueSnackbar, res.message, 'error');
      }

    } catch (error) {
      console.log('error: ' + error.message);
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