import React from 'react';
import classnames from 'classnames';
import styles from 'common/styles/episode.css';

import EpisodeTitle from 'common/components/EpisodeTitle';

const Episode = ({episode, isActive, onClick }) => {
	const wrapperClasses = classnames('episode-wrapper', { active: isActive });

	return (
		<div className={wrapperClasses} style={{ backgroundImage: `url(${episode.bgImage})` }} onClick={onClick}>
			<EpisodeTitle 
				{...episode}
				showFull={isActive} />
		</div>
	);
};

export default Episode;