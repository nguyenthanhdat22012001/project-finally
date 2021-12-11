
import {Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";

import './App.scss';
import RouteClient from './routes/RouteClient';
import RouteSeller from './routes/RouteSeller';
import RouteAdmin from './routes/RouteAdmin';
import RouteAuth from './routes/RouteAuth';

//loading screen
import LoaderDialog from "./components/dialog/LoaderDialog";

function App() {
return (
  <div className="wrapper">
    { console.log('App')}
    <Suspense fallback={<LoaderDialog />}>
      <BrowserRouter>
        {/* <Switch> */}
        {/* seller  */}
        <RouteSeller />
        {/* auth  */}
        <RouteAuth />
        {/* client  */}
        <RouteClient />
        {/* admin  */}
        <RouteAdmin />
        {/* </Switch> */}
      </BrowserRouter>
    </Suspense>
  </div>
)
}


export default App

