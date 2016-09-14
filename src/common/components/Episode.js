import React from 'react';
import styles from '../styles/episode.css';

const Episode = ({title = '', bgImage = ''}) => (
	<div className='episode-wrapper' style={{ backgroundImage: `url(${bgImage})` }}>
		<span className='episode-title'>{title}</span>
	</div>
);

export default Episode;