
import React from 'react';

import './App.scss';
import RouteClient from './routes/RouteClient'

class App extends React.Component {
  render() {
    return (

      <div className="wrapper">
        {/* client  */}
        <RouteClient />
        {/* auth */}

      </div>
    );
  };
};

export default App;
