import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AuthorizedRoute from './AuthorizedRoute';
import PrimaryLayout from './layouts/PrimaryLayout';

import AppHomePage from './pages/AppHomePage';
import Home from './pages/Home';

const App = props => (
  <BrowserRouter>
    <Switch>
      <AuthorizedRoute path="/app" component={PrimaryLayout} />
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
