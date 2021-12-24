import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import VoucherPage from "./pages/VoucherPage";
import NotFound from "components/gennerals/NotFound";

function Voucher(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${match.url}`} component={VoucherPage} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Voucher

