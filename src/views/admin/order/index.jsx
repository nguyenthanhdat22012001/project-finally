import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListOrderAdminPage from "./pages/ListOrderAdminPage";
import DetailOrderPage from "./pages/DetailOrderPage";

function Order(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={ListOrderAdminPage} />
            <Route path={`${match.url}/:id`} component={DetailOrderPage} />
        </Switch>
    )
}

export default Order;

