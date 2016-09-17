import React from 'react';
import classnames from 'classnames';
import styles from '../styles/episode.css';

import EpisodeTitle from './EpisodeTitle';

const Episode = ({episode, isActive, onClick }) => {
	const wrapperClasses = classnames('episode-wrapper', { active: isActive });

	return (
		<div className={wrapperClasses} style={{ backgroundImage: `url(${episode.bgImage})` }} onClick={onClick}>
			<EpisodeTitle 
				fullTitle={episode.title} 
				subtitle={episode.subtitle}
				shortTitle={episode.short} 
				showFull={isActive} />
		</div>
	);
};

export default Episode;