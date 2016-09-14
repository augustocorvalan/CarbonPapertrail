import React from 'react';

import FlexRow from './FlexRow';

export default ({children}) => {
  return (
  	<FlexRow className='container'>
      {children}
    </FlexRow>
  );
}