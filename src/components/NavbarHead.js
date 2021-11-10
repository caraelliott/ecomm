import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { GiShoppingCart } from "react-icons/gi";
import Logo from "../assets/gameLogoTransparent.png";
import Basket from "./Basket";
import Badge from 'react-bootstrap/Badge'

function NavbarHead({ user, handleAdd, basket, setBasket,purchHistory, setPurchHistory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const totalItem = basket.reduce((prev, curr) => prev + curr.qty, 0);

  return (
    <>
      <Navbar expand="lg" style={{ color: "white" }}>
        <Container fluid>
          <Navbar.Brand
            href="#home"
            style={{ fontSize: "25px", color: "white" }}
          >
            <img
              alt=""
              src={Logo}
              width="80"
              height="50"
              className="d-inline-block "
            />{" "}
            TheGamePortal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{ color: "white" }}>
            <Nav
              className=" me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1 " style={{ color: "white" }}>
                Home
              </Nav.Link>
              {/* <Nav.Link href="#action2" style={{color: "white"}}>Link</Nav.Link> */}
              <NavDropdown
                title="About"
                id="collasible-nav-dropdown"
                style={{ color: "white" }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <h4>
              Welcome <Badge bg="secondary">{user.name}</Badge>
            </h4>&nbsp;&nbsp;&nbsp;
            <p
              style={{
                backgroundColor: "black",
                marginRight: "-12px",
                zIndex: "2",
                width: "20px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              {totalItem}
            </p>
            <Button variant="outline-* " onClick={handleShow}>
              <GiShoppingCart size={35} style={{ color: "white" }} />
              {"     "}
            </Button>
            <Basket
              user={user}
              handleAdd={handleAdd}
              basket={basket}
              setBasket={setBasket}
              show={show}
              onHide={handleClose}
              purchHistory ={purchHistory}
              setPurchHistory={setPurchHistory}
            />

            <Form className="d-flex">
              <input
                type="input"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ backgroundColor: "transparent" }}
              />

              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHead;
