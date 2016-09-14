import { createDuck } from 'redux-duck';

const duck = createDuck('episodes');
//action types
const LOAD = duck.defineType('LOAD');
//action creators
// export const loadInitialEpisodes = duck.createAction(LOAD);
//reducer
const initState = [
	{title: 'Lizard Dreams', bgImage: 'https://hd.unsplash.com/photo-1444837881208-4d46d5c1f127'},
	{title: 'The Pull', bgImage: 'https://hd.unsplash.com/photo-1465326117523-6450112b60b2'},
	{title: 'Episode 3 - Coming Soon', bgImage: 'https://hd.unsplash.com/photo-1459197648846-52de5e4d1e9a'},
	{title: 'Episode 4 - Coming Soon', bgImage: 'https://hd.unsplash.com/photo-1459197648846-52de5e4d1e9a'},
	{title: 'Episode 5 - Coming Soon', bgImage: 'https://hd.unsplash.com/photo-1459197648846-52de5e4d1e9a'}
];

const reducer = duck.createReducer({
}, initState);

export default reducer;