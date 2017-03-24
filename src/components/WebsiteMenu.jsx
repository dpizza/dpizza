import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import {Link} from 'react-router-dom';

const WebsiteMenu = ({openModalWindowsFunc}) => (
  <Navbar inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">D'Pizza</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {/* TODO: need to make it style as a NavItem, there is no support for router 
      <Link to='/menu'>Menu</Link>
      */}
      <Nav activeKey={2}>
        <NavItem eventKey={2} href="/#pizzas">
          Pizzas
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} onClick={openModalWindowsFunc.order}>
          Ordena
        </NavItem>
        <NavItem eventKey={2} onClick={openModalWindowsFunc.schedule}>
          Horarios
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default WebsiteMenu;
