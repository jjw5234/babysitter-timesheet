import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import MyProfile from './screens/MyProfile';
import NewChildForm from './screens/NewChildForm';
import LoginSignup from './screens/LoginSignup';
import Child from './screens/ChildInfo';
import Main from './screens/Main';

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/brendan-f224bf/hello-world/dev',
  // cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        {/* Redirect if no user logged in */}
        {/* <Redirect from="/" to="/Oct-2018" /> */}
        <Route exact path="/child/:id" component={Child} />
        <Route exact path="/new-child" component={NewChildForm} />
        <Route exact path="/my-profile" component={MyProfile} />
        <Route exact path="/:date" component={Main} />
        <Route exact path="/" component={LoginSignup} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
