import React from 'react';
import { Route } from "react-router-dom";

import Seller from "views/seller/index";
//lazy load
const CreateStoreLazyLoad = React.lazy(() => import('../views/seller/create-store'));

class RouteSeller extends React.Component {
    render() {
        return (
            <div>
                {/* seller */}
                <Route path="/create-store" component={CreateStoreLazyLoad} /> {/* create store   */}

                <Route path="/seller" component={Seller} />  {/* dashboard   */}
            </div>
        );
    }
}



export default RouteSeller;
