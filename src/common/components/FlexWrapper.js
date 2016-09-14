import React from 'react';

import style from '../styles/flexWrapper.css';

const FlexWrapper = ({ children }) => (
	<div className="flex-wrapper">
		{children}
	</div>
);

export default FlexWrapper;