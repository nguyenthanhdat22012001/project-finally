import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import InfoPage from "./pages/InfoPage";
import EditInfoPage from "./pages/EditInfoPage";
import CouponPage from "./pages/CouponPage";
import HistoryOrderPage from "./pages/HistoryOrderPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import FavoriteAndFollowPage from "./pages/FavoriteAndFollowPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";

function User(props) {
    const match = useRouteMatch();
    console.log(match);
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={InfoPage} />
            <Route path={`${match.url}/edit-info`} component={EditInfoPage} />
            <Route path={`${match.url}/change-password`} component={ChangePasswordPage} />
            <Route path={`${match.url}/coupon`} component={CouponPage} />
            <Route exact path={`${match.url}/order`} component={HistoryOrderPage} />
            <Route path={`${match.url}/order-:id`} component={OrderDetailPage} />
            <Route path={`${match.url}/favorite-follow`} component={FavoriteAndFollowPage} />
        </Switch>
    )
}

export default User

