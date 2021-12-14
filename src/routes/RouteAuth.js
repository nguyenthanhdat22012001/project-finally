import React from 'react';
import { Route, Switch } from "react-router-dom";

// lazy load 
const loginLazyLoad = React.lazy(()=> import('views/auth/LoginPage'));
const registerLazyLoad = React.lazy(()=> import('views/auth/RegisterPage'));
const loginAdminLazyLoad = React.lazy(()=> import('views/auth/LoginAdminPage'));
const ForgotPasswordPageAdminLazyLoad = React.lazy(()=> import('views/auth/ForgotPasswordPage'));

 function RouteAdmin()  {

        return (
            <Switch>
                {/* admin */}
                <Route path="/login" component={loginLazyLoad} />{/* login  */}

                <Route path="/register" component={registerLazyLoad} />{/* register  */}

                <Route path="/forgot-password" component={ForgotPasswordPageAdminLazyLoad} />{/* register  */}

                <Route path="/login-admin" component={loginAdminLazyLoad} />
            </Switch>
        );
}



export default RouteAdmin;
