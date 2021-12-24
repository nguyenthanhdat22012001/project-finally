import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFound from "components/gennerals/NotFound";

function Home(props) {
    const match = useRouteMatch();
    console.log(match)
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={HomePage} />
            <Route  component={NotFound} />
        </Switch>
    )
}

export default Home

