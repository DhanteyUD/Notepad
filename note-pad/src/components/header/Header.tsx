import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container className="header-container">
        <Navbar.Brand className="navbar-title">Note Pad</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
