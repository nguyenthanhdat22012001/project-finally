import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

import Header from 'components/admin/header/Header';

// lazy load 
const dashboardLazyLoad = React.lazy(() => import('./dashboard'));
const brandLazyLoad = React.lazy(() => import('./brand'));
const categoryLazyLoad = React.lazy(() => import('./category'));
const couponLazyLoad = React.lazy(() => import('./coupon'));
const memberLazyLoad = React.lazy(() => import('./member'));
const orderLazyLoad = React.lazy(() => import('./order'));

const mdTheme = createTheme();

function Admin(props) {
    const match = useRouteMatch();
    const history = useHistory();
    const user = useSelector(state => state.auth.user);

    if (!user || user.role < 1) {
        history.push('/login-admin');
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Header titlePage={'Thống Kê'} />

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

                        <Switch>
                            <Route exact path={`${match.url}`} component={dashboardLazyLoad} />
                            <Route path={`${match.url}/order`} component={orderLazyLoad} />
                            <Route path={`${match.url}/category`} component={categoryLazyLoad} />
                            <Route path={`${match.url}/brand`} component={brandLazyLoad} />
                            <Route path={`${match.url}/coupon`} component={couponLazyLoad} />
                            <Route path={`${match.url}/member`} component={memberLazyLoad} />
                        </Switch>

                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Admin

