import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import HomePage from "./pages/HomePage";

function Home(props) {
    const match = useRouteMatch();
    console.log(match)
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={HomePage} />
        </Switch>
    )
}

export default Home

