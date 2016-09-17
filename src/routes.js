import React from 'react';
import { Route, IndexRoute } from 'react-router';
import store from './store';

//components
import HomePage from './pages/home/page';

export default (
	<Route path="/" component={HomePage} />
);
