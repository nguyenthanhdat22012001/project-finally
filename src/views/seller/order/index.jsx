import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListOrderPage from "./pages/ListOrderPage";


function Order(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}`} component={ListOrderPage} />
        </Switch>
    )
}

export default Order;

