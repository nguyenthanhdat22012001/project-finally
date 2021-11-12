import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListCategoryAdminPage from "./pages/ListCategoryAdminPage";

function Category(props) {
    const match = useRouteMatch();
    console.log(match);
    return (
        <Switch>
            <Route path={`${match.url}`} component={ListCategoryAdminPage} />
        </Switch>
    )
}

export default Category;

