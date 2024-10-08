import React from "react";
import { Navbar } from "react-bootstrap";
import ReactLogo from '../assets/react.svg';

const Header = () => {
  return (
    <Navbar bg="light" className="justify-content-between p-3 " >
      <Navbar.Brand>
        <img
          src={ReactLogo}
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Pure-Claim
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
