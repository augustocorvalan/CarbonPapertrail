import React from 'react';

//components
import Episode from './Episode';
import FlexRow from './FlexRow';

const EpisodePicker = ({ episodes = [] }) => (
	<FlexRow>{
		episodes.map((episode, i) => (
			<Episode {...episode} key={i} />
		))
	}</FlexRow>
);

export default EpisodePicker;