import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
 
export default combineReducers({
	//routing
	routing: routerReducer
	//insert more reducers here...
});
