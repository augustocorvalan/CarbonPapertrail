import React from 'react';
import style from '../styles/flexRow.css';
import classnames from 'classnames';

const FlexRow = ({ children, className, ...otherProps }) => (
	<div className={classnames('flex-row', className)} {...otherProps}>
		{children}
	</div>
);

export default FlexRow;