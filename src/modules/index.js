import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import episodes from './episodes';
 
export default combineReducers({
	//routing
	routing: routerReducer,
	episodes
});
