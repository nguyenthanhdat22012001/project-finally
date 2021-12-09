import React from 'react';
import { Route, Redirect } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

import Seller from "views/seller/index";
//lazy load
const CreateStoreLazyLoad = React.lazy(() => import('../views/seller/create-store'));

function RouteSeller() {
    const user = useSelector(state => state.auth.user);

    return (
        <div>
            {/* seller */}
            <Route path="/create-store" component={CreateStoreLazyLoad} /> {/* create store   */}

            <Route path="/seller" component={Seller} >
                {
                !user ? <Redirect to="/login" /> 
                : user.store_id === null ? <Redirect to="/create-store" /> : <Seller />
                }
            </Route>
        </div >
    );
}



export default RouteSeller;
