import React from 'react';
//import logo from './logo.svg';<img src={logo} className="App-logo" alt="logo" />
//import '../assets/styles/main.css';
//import HeaderExampleFloating from './Header';
import { Container} from "semantic-ui-react";

const Layout = ({ children }) => (
  <Container>
    {children}
  </Container>
);
export default Layout;
