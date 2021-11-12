import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import CommentProductPage from "./pages/CommentProductPage";
import ListRatingPage from "./pages/ListRatingPage";

function Dashboard(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={ListRatingPage} />
            <Route path={`${match.url}/rating/:id`} component={CommentProductPage} />
        </Switch>
    )
}

export default Dashboard;

