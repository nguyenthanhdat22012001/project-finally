import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
//api
import storeApi from "api/storeApi";
//redux
import { useDispatch,useSelector} from "react-redux";
import { updateUserRedux } from 'redux/actions/AuthAction';
// notify
import { useSnackbar } from 'notistack';
//helper
import { handleNotiDialog } from "helper/notify";

// import InputFileAvatar from "components/inputs/InputFileAvatar";
import FormCreateStore from "../components/FormCreateStore";

const theme = createTheme();

function CreateStore() {
  const user = useSelector(state => state.auth.user);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  /*************handle create store************/
  const handleCreateStore = async (data) => {
    if (!user) {
      handleNotiDialog(enqueueSnackbar, 'Bạn chưa đăng nhập', 'error');
      return
    }

    try {
      const newData = { ...data, user_id: user.id };
      const res = await storeApi.createStore(newData);

      if (res.success) {
        dispatch(updateUserRedux());
        history.push('/seller');
      } else {
        handleNotiDialog(enqueueSnackbar, res.message, 'error');
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

          <Typography component="h1" variant="h5">
            Đăng Kí Cửa Hàng
          </Typography>

          <FormCreateStore handleCreateStore={handleCreateStore} />

        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CreateStore;