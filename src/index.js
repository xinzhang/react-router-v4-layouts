import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AuthorizedRoute from './AuthorizedRoute';
import PrimaryLayout from './layouts/PrimaryLayout';

const App = props => (
  <BrowserRouter>
    <Switch>
        <Route path="/app" component={PrimaryLayout} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
