
import { Route, Switch,Redirect } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

import Admin from "views/admin/index";

function RouteAdmin(props) {
    const user = useSelector(state => state.auth.user);
    
    return (
        <div>
            {/* admin */}
            < Switch >
                <Route path="/admin">
                    {!user || user.role < 1 ? <Redirect to="/login-admin" /> : <Admin />}
                </Route>
            </Switch >
        </div >
    )
}

export default RouteAdmin

