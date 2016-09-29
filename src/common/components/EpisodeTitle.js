import React from 'react';
import classnames from 'classnames';
import style from 'common/styles/episodeTitle.css';

const EpisodeTitle = ({fullTitle, subtitle, shortTitle, showFull}) => {
	const className = classnames('episode-title', { 'show-full': showFull });
	return (
		<div className={className}>
			<span className='episode-title-short'>{shortTitle}</span>
			<span className='episode-title-full'>{fullTitle}</span>
			<span className='episode-subtitle'>{subtitle}</span>
		</div>
	);
};

export default EpisodeTitle;