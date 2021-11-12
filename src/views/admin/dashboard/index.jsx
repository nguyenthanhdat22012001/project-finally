import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import DashboardAdminPage from "./pages/DashboardAdminPage";

function Dashboard(props) {
    const match = useRouteMatch();
    console.log(match);
    return (
        <Switch>
            <Route path={`${match.url}`} component={DashboardAdminPage} />
        </Switch>
    )
}

export default Dashboard;

