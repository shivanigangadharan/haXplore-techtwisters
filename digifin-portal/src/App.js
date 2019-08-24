import React from 'react';
import Details from './details-';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Verification from './verification';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={Details} path="/details" />
          <Route component={Verification} path="/verification" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
