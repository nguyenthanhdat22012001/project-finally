import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import PostsPage from "./pages/PostsPage";
import AddPostPage from "./pages/AddPostPage";
import PostDetailPage from "./pages/PostDetailPage";

function Index(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={PostsPage} />
            <Route exact path={`${match.url}/create`} component={AddPostPage} />
            <Route path={`${match.url}/:slug.html`} component={PostDetailPage} />
        </Switch>
    )
}

export default Index;

