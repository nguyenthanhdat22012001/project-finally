import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListPaymentAdminPage from "./pages/ListPaymentAdminPage";

function Payment(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}`} component={ListPaymentAdminPage} />
        </Switch>
    )
}

export default Payment;

