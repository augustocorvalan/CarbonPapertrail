import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import episodes from 'modules/episodes';
import tracks from 'modules/tracks';
 
export default combineReducers({
	//routing
	routing: routerReducer,
	episodes,
	tracks
});
