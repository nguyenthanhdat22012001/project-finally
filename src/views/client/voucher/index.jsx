import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import VoucherPage from "./pages/VoucherPage";

function Voucher(props) {
    const match = useRouteMatch();

    console.log(match);
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={VoucherPage} />
        </Switch>
    )
}

export default Voucher

