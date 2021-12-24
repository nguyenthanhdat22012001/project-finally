import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListMemberAdminPage from "./pages/ListMemberAdminPage";

function Member(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}`} component={ListMemberAdminPage} />
        </Switch>
    )
}

export default Member;

