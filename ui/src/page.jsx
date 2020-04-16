/* eslint linebreak-style: ["error","windows"] */
import React from 'react';
import {
  Nav, NavItem,
  Grid,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Contents from './contents.jsx';

function NavBar() {
  return (
    <Nav>
      <LinkContainer exact to="/">
        <NavItem>Home</NavItem>
      </LinkContainer>
      <LinkContainer to="/products">
        <NavItem>Prodcut List</NavItem>
      </LinkContainer>
    </Nav>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Grid fluid>
        <Contents />
      </Grid>
    </div>
  );
}
