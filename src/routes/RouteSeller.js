import React from 'react';
import { Route } from "react-router-dom";

// seller
import CreateStorePage from "views/seller/create-store/CreateStorePage";

import Seller from "views/seller/index";

class RouteSeller extends React.Component {
    render() {
        return (
            <div>
                {/* seller */}
                <Route path="/create-store" component={CreateStorePage} /> {/* create store   */}

                <Route path="/seller" component={Seller} />  {/* dashboard   */}
            </div>
        );
    }
}



export default RouteSeller;
