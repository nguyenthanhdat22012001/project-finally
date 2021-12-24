import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductStorePage from "./pages/ProductStorePage";
import ProductSearchPage from "./pages/ProductSearchPage";
import NotFound from "components/gennerals/NotFound";

function Product(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={ProductPage} />
            <Route path={`${match.url}/:slug.html`} component={ProductDetailPage} />
            <Route path={`${match.url}/store/:slug`} component={ProductStorePage} />
            <Route path={`${match.url}/category/:slug`} component={ProductCategoryPage} />
            <Route path={`${match.url}/search/:search`} component={ProductSearchPage} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Product

