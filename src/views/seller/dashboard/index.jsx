import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import DashboardSellerPage from "./pages/DashboardSellerPage";

function Dashboard(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}`} component={DashboardSellerPage} />
        </Switch>
    )
}

export default Dashboard;

