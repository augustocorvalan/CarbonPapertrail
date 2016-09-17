import { createDuck } from 'redux-duck';

const duck = createDuck('episodes');
//action types
const LOAD = duck.defineType('LOAD');
//action creators
// export const loadInitialEpisodes = duck.createAction(LOAD);
//reducer
https://hd.unsplash.com/photo-1444837881208-4d46d5c1f127
const initState = [
	{title: 'Carbon Papertrails', short: 'Carbon', subtitle: 'some short manifesto about who we are and what we\'re about',bgImage: 'https://hd.unsplash.com/photo-1465326117523-6450112b60b2'},
	{title: 'Lizard Dreams', short: 'Ep. 1', bgImage: 'https://hd.unsplash.com/photo-1427806208781-b36531cb09ef'},
	{title: 'The Pull', short: 'Ep. 2', bgImage: 'https://hd.unsplash.com/photo-1444837881208-4d46d5c1f127'},
	{title: 'Episode 3 - Coming Soon', short: 'Ep. 3', bgImage: 'https://hd.unsplash.com/photo-1452716726610-30ed68426a6b'},
	{title: 'Episode 4 - Coming Soon', short: 'Ep. 4', bgImage: 'https://hd.unsplash.com/photo-1452716726610-30ed68426a6b'},
	{title: 'Episode 5 - Coming Soon', short: 'Ep. 5', bgImage: 'https://hd.unsplash.com/photo-1452716726610-30ed68426a6b'}
];

const reducer = duck.createReducer({
}, initState);

export default reducer;