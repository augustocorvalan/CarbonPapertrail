import React from 'react';
import { Route, IndexRoute } from 'react-router';
import store from './store';

//components
import HomePage from 'pages/home/page';
import PlayerPage from 'pages/player/page';
import App from 'common/components/App';

export default (
	<Route path="/" component={App}>
        <IndexRoute component={HomePage} />
		<Route path="player" component={PlayerPage} />
    </Route>
);
