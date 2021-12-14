import { Route, Switch, useRouteMatch } from "react-router-dom";

import CreateStore from "./pages/CreateStorePage";

function Index() {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${match.url}`} component={CreateStore} />
        </Switch>
    )
}

export default Index;