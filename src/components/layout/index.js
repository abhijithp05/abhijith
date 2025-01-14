// import SideBar from './SideBar';
// import TopNav from './TopNav';

// export { SideBar, TopNav };

import React from 'react';
import SideBar from './SideBar';
import TopNav from './TopNav';

import {
  MainContainer,
  MainContentContainer,
} from '../styles/StyledContainers';
// import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <MainContentContainer>
      <TopNav />
      {children}
    </MainContentContainer>
    // </MainContainer>
  );
};

export default React.memo(Layout);
