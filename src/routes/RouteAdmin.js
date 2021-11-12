
import { Route, Switch } from "react-router-dom";

import Admin from "views/admin/index";

function RouteAdmin(props) {
    return (
        <div>
            {/* admin */}
            < Switch >
                <Route path="/admin" component={Admin} />
            </Switch >
        </div>
    )
}

export default RouteAdmin

