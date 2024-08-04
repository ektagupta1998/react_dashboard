import React from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <>
      <div className="header-container" >
        <Navbar expand="lg">
          <div className="container-fluid">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="search-input me-2 "
                  aria-label="Search"
                />
              </Form>
              <Nav
                className="ms-auto my-2 my-lg-0"
                navbarScroll
              >
                <Nav.Link href="#action1"><img src="/images/Message.png" style={{ height: "50px" }} /></Nav.Link>
                <Nav.Link href="#action2"><img src="/images/Setting.png" style={{ height: "50px" }} /></Nav.Link>
                <Nav.Link href="#action2"><img src="/images/notification.png" style={{ height: "50px" }} /></Nav.Link>
                <Nav.Link href="#action2"><img src="/images/headerUser.png" style={{ height: "50px" }} /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>

    </>



  );
}
