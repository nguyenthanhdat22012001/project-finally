import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';

import Sidebar from '../../../components/seller/sidebar/Sidebar';
import Header from '../../../components/seller/header/Header';


const mdTheme = createTheme();

function EditOrderPageContent() {
  const [openSideBar, setOpenSideBar] = React.useState(true);
  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Header openSideBar={openSideBar} toggleSideBar={toggleSideBar} />
        <Sidebar openSideBar={openSideBar} toggleSideBar={toggleSideBar} />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={6} md={3}>
                
              </Grid>

            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function EditOrderPage() {
  return <EditOrderPageContent />;
}

