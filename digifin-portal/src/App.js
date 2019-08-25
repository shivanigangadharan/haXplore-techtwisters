import React from 'react';
import Details from './details-';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Verification from './verification';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query, Mutation } from 'react-apollo';
import LandingPage from './landing-page';

function App() {
  const client = new ApolloClient({
    uri: "https://digifin-portal.herokuapp.com/v1/graphql",
    headers: {
      'x-hasura-admin-secret': 'madhunter'
    }
  });
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <Switch>
            <Route component={LandingPage} exact path="/" />
            <Route component={Details} exact path="/details" />
            <Route component={Verification} path="/verification" />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
