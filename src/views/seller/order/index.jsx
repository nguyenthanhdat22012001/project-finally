import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListOrderPage from "./pages/ListOrderPage";
import DetailOrderPage from "./pages/DetailOrderPage";


function Order(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={ListOrderPage} />
            <Route path={`${match.url}/:id`} component={DetailOrderPage} />
        </Switch>
    )
}

export default Order;

