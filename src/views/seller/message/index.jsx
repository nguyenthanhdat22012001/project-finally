import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import MessagePage from "./pages/MessagePage";


function Message(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}`} component={MessagePage} />
        </Switch>
    )
}

export default Message;

