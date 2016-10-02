import React from 'react';
import styles from 'common/styles/wallWrapper.css';

import DragScroll from 'common/components/DragScroll';


const WallWrapper = ({children}) => (
	<DragScroll className='wall-wrapper'>
		{children}
	</DragScroll>
);

export default WallWrapper;