import { handleActions } from 'redux-actions';

//reducer
const initState = [
	{title: 'Carbon Papertrails', shortTitle: 'Carbon', subtitle: 'some short manifesto about who we are and what we\'re about',bgImage: 'https://hd.unsplash.com/photo-1465326117523-6450112b60b2'},
	{title: 'Lizard Dreams', shortTitle: 'Ep. 1', bgImage: 'https://hd.unsplash.com/photo-1427806208781-b36531cb09ef'},
	{title: 'The Pull', shortTitle: 'Ep. 2', bgImage: 'https://hd.unsplash.com/photo-1444837881208-4d46d5c1f127'},
	{title: 'Episode 3 - Coming Soon', shortTitle: 'Ep. 3', bgImage: 'https://hd.unsplash.com/photo-1452716726610-30ed68426a6b'},
	{title: 'Episode 4 - Coming Soon', shortTitle: 'Ep. 4', bgImage: 'https://hd.unsplash.com/photo-1452716726610-30ed68426a6b'},
	{title: 'Episode 5 - Coming Soon', shortTitle: 'Ep. 5', bgImage: 'https://hd.unsplash.com/photo-1452716726610-30ed68426a6b'}
];

const reducer = handleActions({
	//actions...
}, initState);

export default reducer;