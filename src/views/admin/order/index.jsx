import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListOrderAdminPage from "./pages/ListOrderAdminPage";

function Order(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}`} component={ListOrderAdminPage} />
        </Switch>
    )
}

export default Order;

