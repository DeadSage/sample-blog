import React from 'react';

import CustomTabs from '../Tabs'
import {LogoutButton} from  '../Buttons'

function BaseLayout({ children }) {
  return (
      <div className='container'>
          <LogoutButton/>
          <CustomTabs/>
          {children}
      </div>
  )
}


export default BaseLayout;
