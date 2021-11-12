import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Route, Switch, useRouteMatch } from "react-router-dom";


import Header from '../../components/seller/header/Header';


// lazy load 
const dashboardLazyLoad = React.lazy(() => import('./dashboard'));
const commentLazyLoad = React.lazy(() => import('./comment'));
const messageLazyLoad = React.lazy(() => import('./message'));
const orderLazyLoad = React.lazy(() => import('./order'));
const productLazyLoad = React.lazy(() => import('./product'));

const mdTheme = createTheme();

function Seller(props) {
    const match = useRouteMatch();
    console.log(match);
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Header/>

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
                            <Route path={`${match.url}/comment`} component={commentLazyLoad} />
                            <Route path={`${match.url}/message`} component={messageLazyLoad} />
                            <Route path={`${match.url}/product`} component={productLazyLoad} />
                        </Switch>

                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Seller;

