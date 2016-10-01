import { handleActions } from 'redux-actions';


//TODO: load this dynamically once SoundCloud authorizes our page...
const initState = [
	{ stream_url: "https://api.soundcloud.com/tracks/263314287/stream", title: 'Rockin Back Inside My Heart' }
];

//Reducer
const reducer = handleActions({
	//actions...
}, initState);

export default reducer;

// $ curl -v 'http://api.soundcloud.com/resolve?url=https://soundcloud.com/computer-magic/rockin-back-inside-my-heart-twin-peaks-julee-cruise-cover&client_id=YOUR_CLIENT_ID'
 // "stream_url": "https://api.soundcloud.com/tracks/263314287/stream",