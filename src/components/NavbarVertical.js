import React from "react";
import Nav from "react-bootstrap/Nav";
import styled from 'styled-components';


function NavbarVertical() {
  return (
    <div>
        <VerticalNav>
      <Nav 
       className=" flex-column  "
       style={{color : 'black'}}>
        <Nav.Item href="#Item-2">Play</Nav.Item>
        <Nav.Item href="#Item-1">Genre</Nav.Item>
        <Nav.Item href="#Item-2">Platform</Nav.Item>
        <Nav.Item href="#Item-3" >
          Top 10
        </Nav.Item>
      </Nav>
      </VerticalNav>
    </div>
  );
}

const VerticalNav = styled.div`
    display:flex;
    width:20vw;
    height:100vh;
    font-size:20px;
    padding-top:20px;
    padding-left:20px;
 
    background-color:  	rgb(220,220,220, 0.2);
    
    `



export default NavbarVertical;
