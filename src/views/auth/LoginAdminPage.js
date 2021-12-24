import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useHistory } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import { LoginAdminRedux } from 'redux/actions/AuthAction';
// notify
import { useSnackbar } from 'notistack';

import FormLoginAdmin from 'components/auth/login/FormLoginAdmin';

const theme = createTheme();

function LoginAdmin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  /*************** handle login ************/
  const handleLogin = async (data) => {
    try {
      dispatch(LoginAdminRedux(enqueueSnackbar, history, data));

    } catch (error) {
      console.log('error: ' + error);
    }
  }

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
          <FormLoginAdmin handleLogin={handleLogin} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginAdmin;