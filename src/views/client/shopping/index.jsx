import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import CartPage from "./pages/CartPage";
import ChekOutPage from "./pages/ChekOutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import NotFound from "components/gennerals/NotFound";

function Shopping(props) {
    const match = useRouteMatch();
    console.log(match);
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={CartPage} />
            <Route path={`${match.url}/checkout`} component={ChekOutPage} />
            <Route path={`${match.url}/checkout-success/:id`} component={CheckoutSuccessPage} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Shopping

