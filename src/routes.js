import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Dashboard from './containers/Dashboard';
import SalesTrackerPage from './containers/SalesTrackerPage.js';
import OverviewPage from './containers/OverviewPage.js';
import NewCarPage from './containers/NewCarPage.js';
import AboutPage from './containers/AboutPage.js';
import NotFoundPage from './containers/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="sales-tracker" component={SalesTrackerPage}/>
    <Route path="car-new" component={NewCarPage}/>
    <Route path="overview" component={OverviewPage}/>
    <Route path="overview/:id" component={OverviewPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
