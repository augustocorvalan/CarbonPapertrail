import React from 'react';

const WallImage = ({ height, width }) => (
	<img src={`http://lorempixel.com/${width}/${height}/cats`} style={{ width, height }} />
);

export default WallImage;