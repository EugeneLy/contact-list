import React, { Component } from 'react';
import './App.scss';
import Routers from './routers';

import DevTools from './config/DevTools';

class App extends Component {
  render() {
    return (
      <div className="container">
        <DevTools />
        <Routers />
      </div>
    );
  }
}

export default App;
