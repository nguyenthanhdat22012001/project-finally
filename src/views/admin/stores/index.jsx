import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListStorePage from "./pages/ListStorePage";

function Member(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}`} component={ListStorePage} />
        </Switch>
    )
}

export default Member;

