import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListCouponAdminPage from "./pages/ListCouponAdminPage";

function Coupon(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}`} component={ListCouponAdminPage} />
        </Switch>
    )
}

export default Coupon;

