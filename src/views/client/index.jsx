import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
// common component
import Header from "components/client/header/Header";
import Footer from "components/client/footer/Footer";
import ScrollToTop from "components/client/header/ScrollToTop";
import NotFound from "components/gennerals/NotFound";
// lazy load 
const homeLazyLoad = React.lazy(() => import('./home'));
const productLazyLoad = React.lazy(() => import('./products'));
const shoppingLazyLoad = React.lazy(() => import('./shopping'));
const userLazyLoad = React.lazy(() => import('./user'));
const voucherLazyLoad = React.lazy(() => import('./voucher'));
const postsLazyLoad = React.lazy(() => import('./posts'));



function Client(props) {
    const match = useRouteMatch();

    return (
        <div className="client">
            <ScrollToTop />
            <Header />
            <main className="client__inner">
                <Switch>
                    <Route exact path={`${match.url}`} component={homeLazyLoad} />

                    <Route path={`${match.url}/product`} component={productLazyLoad} /> {/* product  */}

                    <Route path={`${match.url}/shopping`} component={shoppingLazyLoad} /> {/* shopping   */}

                    <Route path={`${match.url}/user`} component={userLazyLoad} /> {/* users  */}

                    <Route path={`${match.url}/vouchers`} component={voucherLazyLoad} /> {/* voucher   */}
                    
                    <Route path={`${match.url}/posts`} component={postsLazyLoad} /> {/* posts   */}

                    <Route  component={NotFound} /> {/* NotFound   */}
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default Client

