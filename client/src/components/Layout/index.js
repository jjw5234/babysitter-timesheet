import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../NavBar';
import { theme } from '../../shared/theme';

const Wrapper = styled.div`
  background-color: #eee;
  height: 100vh;
  overflow: scroll;
  > .ant-layout-header {
    position: fixed;
    background-color: #fff;
    z-index: ${theme.zIndex.navBar};
    height: ${theme.heights.navBar};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #e4e9ee;
    box-shadow: 0 0 25px 0 hsla(0, 0%, 79%, .35);
    font-size: 1.125rem;
  }
`;

const Content = styled.div`
  padding: calc(${theme.heights.navBar}px + 1rem);
`;

const Layout = ({ children, isLoggedIn }) => (
  <Wrapper>
    <NavBar isLoggedIn={isLoggedIn} />
    <Content>
      {children}
    </Content>
  </Wrapper>
);

export { Layout };