import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">This is my placeholder header</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
