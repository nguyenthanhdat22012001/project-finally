import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import DetailInfoStorePage from "./pages/DetailInfoStorePage";


function Index(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}`} component={DetailInfoStorePage} />
        </Switch>
    )
}

export default Index;

