import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListBrandAdminPage from "./pages/ListBrandAdminPage";

function Brand(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}`} component={ListBrandAdminPage} />
        </Switch>
    )
}

export default Brand;

