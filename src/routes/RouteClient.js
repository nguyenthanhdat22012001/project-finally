import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Client from "views/client/index";

class RouteClient extends React.Component {
  render() {
    return (
      <div>
        {/* client */}
        < Switch >
          <Redirect exact from="/" to="/client" component={Client} />
          <Route path="/client" component={Client} />
        </Switch >
      </div>

    );
  }
}



export default RouteClient;
