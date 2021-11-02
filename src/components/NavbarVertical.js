import React from "react";
import Nav from "react-bootstrap/Nav";
import styled from 'styled-components';
import Login from './Login';



function NavbarVertical({handleShow}) {
  return (
    <PageForm>
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
      


    </PageForm >
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

const PageForm = styled.div`
display:flex;


`
export default NavbarVertical;
