import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";

import PostsPage from "./pages/PostsPage";
import AddPostPage from "./pages/AddPostPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostsUserPage from "./pages/PostsUserPage";
import EditPostPage from "./pages/EditPostPage";
import NotFound from "components/gennerals/NotFound";

function Index(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={PostsPage} />
            <Route path={`${match.url}/create`} component={AddPostPage} />
            <Route path={`${match.url}/user/:id`} component={PostsUserPage} />
            <Route path={`${match.url}/:slug.html`} component={PostDetailPage} />
            <Route path={`${match.url}/edit/:slug`} component={EditPostPage} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Index;

