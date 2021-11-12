import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useHistory } from "react-router-dom";
// api
import userApi from "api/userApi";
// notify
import { useSnackbar } from 'notistack';
// helper
import { setToken } from "helper/auth";

import FormLoginAdmin from 'components/auth/login/FormLoginAdmin';
import ProccessDialog from "components/dialog/ProccessDialog";

const theme = createTheme();

function LoginAdmin() {
  const [isProccess, setIsProccess] = useState(false);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  /*************** handle login ************/
  const handleLogin = async (data) => {
    try {
      setIsProccess(true);

      const res = await userApi.LoginAdmin(data);

      if (res.success) {
        setToken(res.access_token);

        setIsProccess(false);
        history.push('/admin');
      } else {
        setIsProccess(false);
        handleNotiDialog(res.message, 'error');
      }

      console.log(res);
    } catch (error) {
      console.log('error: ' + error);
    }
    console.log(data);
  }
     /************** handle noti dialog***************/
     const handleNotiDialog = (message, status) => {
      enqueueSnackbar(message, {
        variant: status,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
      });
    };

  return (
    <ThemeProvider theme={theme}>
      {isProccess && <ProccessDialog />} {/* proccess page */}
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