import React from 'react';

import style from 'common/styles/flexWrapper.css';

const FlexWrapper = ({ children }) => (
	<div className="flex-wrapper">
		{children}
	</div>
);

export default FlexWrapper;