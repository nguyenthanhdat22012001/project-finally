import React from 'react';
import {useEffect} from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
// common component
import Header from "components/client/header/Header";
import Footer from "components/client/footer/Footer";
import ScrollToTop from "components/client/header/ScrollToTop";
import Chat from "components/client/chat/Chat";
//redux
import { useDispatch, useSelector } from "react-redux";
import { updateProfileUser} from "redux/actions/AuthAction";

// lazy load 
const homeLazyLoad = React.lazy(() => import('./home'));
const productLazyLoad = React.lazy(() => import('./products'));
const shoppingLazyLoad = React.lazy(() => import('./shopping'));
const userLazyLoad = React.lazy(() => import('./user'));
const voucherLazyLoad = React.lazy(() => import('./voucher'));

function Client(props) {
    const match = useRouteMatch();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        console.log('update');
        const localStorage_token = localStorage.getItem('token');
        if (localStorage_token) {
            dispatch(updateProfileUser);
            console.log('user',user)
        }
    },[])

    return (
        <div className="client">
            <ScrollToTop />
            <Chat />
            <Header />
            <main className="client__inner">
                <Switch>
                    <Route exact path={`${match.url}`} component={homeLazyLoad} />

                    <Route path={`${match.url}/product`} component={productLazyLoad} /> {/* product  */}

                    <Route path={`${match.url}/shopping`} component={shoppingLazyLoad} /> {/* shopping   */}

                    <Route path={`${match.url}/user`} component={userLazyLoad} /> {/* users  */}

                    <Route path={`${match.url}/vouchers`} component={voucherLazyLoad} /> {/* voucher   */}
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default Client

