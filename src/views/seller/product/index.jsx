import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListProductPage from "./pages/ListProductPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";

function Product(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={ListProductPage} />
            <Route path={`${match.url}/add`} component={AddProductPage} />
            <Route path={`${match.url}/edit/:id`} component={EditProductPage} />
        </Switch>
    )
}

export default Product;

